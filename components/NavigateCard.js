import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch, useSelector } from 'react-redux';
import { selectDestination, setDestination } from '../features/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavourite from './NavFavourites';
import { Icon } from '@rneui/base';

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const destination = useSelector(selectDestination);
    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>Good Morning, User</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete
                        styles={{
                            container: {
                                backgroundColor: 'white',
                                paddingTop: 20,
                                flex: 0,
                            },
                            textInput: tw`bg-[#DDDDDF] rounded-lg text-xl android:font-extralight`,
                            textInputContainer: tw`px-5 pb-0`
                        }}
                        query={{
                            key: GOOGLE_MAPS_APIKEY,
                            language: "en"
                        }}
                        onPress={(data, details = null) => {
                            dispatch(
                                setDestination({
                                    location: details.geometry.location,
                                    description: data.description
                                })
                            );
                        }}
                        enablePoweredByContainer={false}
                        minLength={2}
                        fetchDetails={true}
                        placeholder='Where to?'
                        nearbyPlacesAPI='GooglePlacesSearch'
                        debounce={300}
                    />
                </View>
                <NavFavourite />
                <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-700`}>
                    <TouchableOpacity style={[tw`flex flex-row bg-black w-24 px-4 py-3 rounded-full`, destination ? tw`opacity-100'` : tw`opacity-50`]} onPress={() => navigation.navigate('RiderOptionsCard')} disabled={!(destination?.location)}>
                        <Icon name='car' type='font-awesome' color={'white'} size={16} />
                        <Text style={tw`text-white text-center ml-2`}>Rides</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[tw`flex flex-row bg-black w-24 px-4 py-3 rounded-full`, destination ? tw`opacity-100'` : tw`opacity-50`]} onPress={() => navigation.navigate('RiderOptionsCard')} disabled={!(destination?.location)}>
                        <Icon name='truck' type='font-awesome' color={'white'} size={16} />
                        <Text style={tw`text-white text-center ml-2`}>Porter</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    )
}

export default NavigateCard