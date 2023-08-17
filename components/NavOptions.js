import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';

const NavOptions = () => {
    const navigation = useNavigation();
    const data = [
        {
            id: "1",
            title: "Rides",
            image: "https://links.papareact.com/3pn",
            screen: "Map"
        },
        {
            id: "2", 
            title: "Porter",
            image: "https://cdn-icons-png.flaticon.com/512/2830/2830175.png",
            screen: "Map",
        }
    ];
    return (
        <FlatList
            data={data}
            style={tw`mx-auto`}
            horizontal={true}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity style={tw`p-1 bg-gray-200 m-1`} onPress={() => navigation.navigate(item.screen)}>
                    <View>
                        <Image
                            source={{
                                uri: item.image
                            }}
                            resizeMode='contain'
                            style={tw`h-30 w-40`}
                        />
                        <Text style={tw`mt-2 text-sm font-semibold text-center`}>{item.title}</Text>
                        <Icon style={tw`p-2 mx-auto bg-black w-full`} type='antdesign' name="arrowright" color={'white'} />
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavOptions