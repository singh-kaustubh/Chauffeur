import { View, Text, SafeAreaView, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux';
import { setOrigin, setDestination } from '../features/navSlice';
import NavFavourite from '../components/NavFavourites';

const HomeScreen = () => {
    const dispatch = useDispatch();
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image source={require('../assets/logo.png')}
                    resizeMode='contain'
                    style={tw`w-30 h-30 ios:mx-4`}
                />
                <GooglePlacesAutocomplete
                    styles={{
                        textInputContainer: tw`ios:px-3`,
                        container: {
                            flex: 0,
                        },
                        textInput: tw`text-xl android:font-extralight`
                    }}
                    onPress={(data, details = null) => {
                        dispatch(
                            setOrigin({
                                location: details.geometry.location,
                                description: data.description
                            })
                        );
                    }}
                    fetchDetails={true}
                    minLength={2}
                    enablePoweredByContainer={false}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: "en"
                    }}
                    nearbyPlacesAPI='GooglePlacesSearch'
                    debounce={300}
                    placeholder='Where from?'
                />
                <NavOptions />
                <NavFavourite />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen