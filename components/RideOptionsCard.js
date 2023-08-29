import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native';
import React, { useState, useLayoutEffect } from 'react'
import tw from 'twrnc';
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectTravelTimeInfo } from '../features/navSlice';
import sanityClient, { urlFor } from '../sanityClient';

const RideOptionsCard = () => {
    const rideOptionParameter = useSelector(selectTravelTimeInfo);
    useLayoutEffect(() => {
        sanityClient.fetch(
            ` *[_type == "ride"] `
        ).then((resp) => {
            setRideOptions(resp);
        }).catch((err) => {
            console.warn("Could not fetch ride options");
        })
    }, [])
    const [rideOptions, setRideOptions] = useState([]);
    const navigation = useNavigation();
    const [selectedRide, setSelectedRide] = useState(null);
    return (
        <SafeAreaView style={tw`bg-white flex-1 -mt-2`}>
            <View>
                <TouchableOpacity
                    style={tw`absolute top-3 left-5 p-3 rounded-full z-10`}
                    onPress={() => {
                        navigation.goBack()
                    }}
                >
                    <Icon name="chevron-left" type='font-awesome' />
                </TouchableOpacity>
                <Text style={tw`text-center py-5 text-xl`}>Select a Ride: {rideOptionParameter?.distance?.text}</Text>
            </View>
            <FlatList
                data={rideOptions.sort((a, b) => {
                    return parseFloat(a.multiplier) - parseFloat(b.multiplier);
                })}
                keyExtractor={(item) => item._id}
                renderItem={({ item: { _id, vehicle_type, multiplier, image }, item }) => (
                    <TouchableOpacity onPress={() => setSelectedRide(item)} style={
                        [tw`flex-row justify-between items-center px-8 pb-5 mb-2`, _id === selectedRide?._id ? tw`bg-gray-200` : tw``]
                    }>
                        <Image
                            source={{
                                uri: urlFor(image).url()
                            }}
                            resizeMode='cover'
                            style={tw`h-25 w-35`}
                        />
                        <View style={tw`-ml-6`}>
                            <Text style={tw`text-xl font-semibold`}>{vehicle_type}</Text>
                            <Text>Travel time: {rideOptionParameter?.duration?.text}</Text>
                        </View>
                        <Text style={tw`text-xl`}>₹ {((rideOptionParameter?.distance?.value / 100) * multiplier).toFixed(2)}</Text>
                    </TouchableOpacity>
                )
                }
            />
            < View >
                <TouchableOpacity
                    style={[tw`bg-black py-3 w-9/10 rounded-full mx-auto mb-2`, !selectedRide ? tw`bg-gray-300` : tw``]}
                    disabled={!selectedRide}
                >
                    <Text style={tw`text-center text-white text-xl`}>
                        Choose {selectedRide?.vehicle_type}
                    </Text>
                </TouchableOpacity>
            </View >
        </SafeAreaView >
    )
}

export default RideOptionsCard