import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Icon } from '@rneui/base';
import tw from 'twrnc';

const NavFavourite = () => {
    const [favList, setFavList] = useState([
        {
            id: 1,
            icon: "home",
            location: "Home",
            description: "I-338, Yamunapuram, Bulandshahr, UP, India"
        },
        {

            id: 2,
            icon: "airplane",
            location: "Work",
            description: "Zomato Corporate Office, Sector 62, Gurugram, Haryana, India"
        },
        {

            id: 3,
            icon: "briefcase",
            location: "Flat",
            description: "EWS-106, Pioneer Park, Baharampur Naya, Sector 61, Ghata, Haryana, India"

        }
    ])
    return (
        <FlatList
            data={favList}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
                <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
            )}
            renderItem={
                ({ item: { location, description, icon } }) => (
                    <TouchableOpacity style={tw`flex-row items-center p-5`}>
                        <Icon
                            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                            name={icon}
                            type='ionicon'
                            color={'white'}
                            size={18}
                        />
                        <View>
                            <Text style={tw`font-semibold text-lg`}>{location}</Text>
                            <Text style={tw`text-gray-500`}>{description}</Text>
                        </View>
                    </TouchableOpacity>
                )
            }
        />
    )
}

export default NavFavourite