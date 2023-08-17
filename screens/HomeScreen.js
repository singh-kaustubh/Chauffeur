import { View, Text, SafeAreaView, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image source={require('../assets/logo.png')}
                    resizeMode='contain'
                    style={tw`w-30 h-30`}
                />
                <GooglePlacesAutocomplete nearbyPlacesAPI='GooglePlacesSearch' debounce={400} placeholder='Where from?l' />
                <NavOptions />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen