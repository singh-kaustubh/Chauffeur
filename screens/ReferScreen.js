import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from "twrnc";

const ReferScreen = () => {
    return (
        <SafeAreaView style={tw`flex flex-1 items-center`}>
            <Image
                source={require('../assets/Refer.png')}
                style={tw`h-full w-full`}
                resizeMode='contain'
            />
        </SafeAreaView>
    )
}

export default ReferScreen