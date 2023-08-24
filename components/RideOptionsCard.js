import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native';
import React, { useState } from 'react'
import tw from 'twrnc';
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectTravelTimeInfo, setDestination } from '../features/navSlice';

const RideOptionsCard = () => {
    const rideOptionParameter = useSelector(selectTravelTimeInfo);
    const [rideOptions, setRideOptions] = useState([
        {
            id: 1,
            title: "Thrift",
            multiplier: 0.75,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9K3laJ6MRc_frPlCd9NLbe5J-syR5gAdFGkF_Sp8dortSM7-myLB8nb3MqeSIGUFYcA8&usqp=CAU",
        },
        {
            id: 2,
            title: "Modern",
            multiplier: 1,
            image: "https://links.papareact.com/3pn",
        },
        {
            id: 3,
            title: "Utility",
            multiplier: 1.25,
            image: "https://links.papareact.com/5w8",
        },
        {
            id: 4,
            title: "Luxury",
            multiplier: 1.5,
            image: "https://links.papareact.com/7pf",
        },
    ]);
    const navigation = useNavigation();
    const dispatch = useDispatch();
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
                <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
            </View>
            <FlatList
                data={rideOptions}
                keyExtractor={(item) => item.id}
                renderItem={({ item: { id, title, multiplier, image }, item }) => (
                    <TouchableOpacity onPress={() => setSelectedRide(item)} style={[tw`flex-row justify-between items-center px-8 pb-5 mb-2`, id === selectedRide?.id ? tw`bg-gray-200` : tw``]}>
                        <Image
                            source={{
                                uri: image
                            }}
                            resizeMode='cover'
                            style={tw`h-25 w-35`}
                        />
                        <View style={tw`-ml-6`}>
                            <Text style={tw`text-xl font-semibold`}>{title}</Text>
                            <Text>Travel time: {rideOptionParameter?.duration?.text}</Text>
                        </View>
                        <Text style={tw`text-xl`}>₹ {(rideOptionParameter?.distance?.value) * multiplier}</Text>
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
                        Choose {selectedRide?.title}
                    </Text>
                </TouchableOpacity>
            </View >
        </SafeAreaView >
    )
}

export default RideOptionsCard