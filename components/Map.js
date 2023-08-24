import React, { useRef, useEffect } from 'react'
import MapView, { Marker } from 'react-native-maps';
import tw from 'twrnc';
import { useDispatch, useSelector } from 'react-redux';
import { selectDestination, selectOrigin, setTravelTimeInfo } from '../features/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_APIKEY } from "@env";
import Networking from '../utils/networking';

const Map = () => {
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const dispatch = useDispatch();
    const mapRef = useRef(null);

    useEffect(() => {
        if (!origin || !destination) {
            return;
        }
        const getTravelTime = async () => {
            const URL = 'https://maps.googleapis.com/maps/api/distancematrix/json';
            try {
                const response = await Networking.get(URL, {
                    header: {
                        'content-type': 'application/json',
                    },
                    body: {
                        units: 'metrics',
                        origins: origin.description,
                        destinations: destination.description,
                        key: GOOGLE_MAPS_APIKEY,
                    },
                });
                dispatch(setTravelTimeInfo(response?.rows[0]?.elements[0]));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        getTravelTime();
    }, [origin, destination, GOOGLE_MAPS_APIKEY]);

    useEffect(() => {
        if (origin == null || destination == null) {
            return;
        }
        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
            edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
            animated: true,
        });
    }, [origin, destination]);

    return (
        <MapView
            ref={mapRef}
            mapType='mutedStandard'
            style={tw`flex-1`}
            initialRegion={{
                latitude: origin?.location?.lat,
                longitude: origin?.location?.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005
            }}
        >
            {origin && destination && (
                <MapViewDirections
                    origin={origin.description}
                    destination={destination.description}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    mode={'DRIVING'}
                    strokeColor='black'
                    onError={() => {
                        console.warn('Nahi mil rha bhai');
                    }}
                />
            )}
            {origin?.location && (
                <Marker
                    coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng,
                    }}
                    title='Origin'
                    description={origin.description}
                    identifier='origin'
                />
            )}
            {destination?.location && (
                <Marker
                    coordinate={{
                        latitude: destination.location.lat,
                        longitude: destination.location.lng,
                    }}
                    title='Destination'
                    description={origin.description}
                    identifier='destination'
                />
            )}
        </MapView>
    )
}

export default Map