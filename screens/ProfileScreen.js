import { SafeAreaView, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Icon } from '@rneui/base';

const ProfileScreen = () => {
    return (
        <SafeAreaView style={tw`flex-col flex-1 android:mt-14 mx-8 android:mb-2`}>
            <View style={tw`p-5 items-center`}>
                <Text style={tw`text-sm`}>My Profile</Text>
            </View>
            <View style={tw``}>
                <View style={tw`items-center`}>
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/profile.png')}
                            resizeMode='contain'
                            style={tw`w-30 h-30 rounded-full`}
                        />
                    </TouchableOpacity>
                </View>
                <View style={tw`p-5 items-center flex-col`}>
                    <Text style={tw`text-2xl`}>Kaustubh Singh</Text>
                    <Text style={tw`text-sm text-gray-500`}>+91 8837760135</Text>
                </View>
            </View>
            <View style={tw`flex-col flex-1`}>
                <Text style={tw`text-sm text-gray-500 py-4`}>Dashboard</Text>
                <ScrollView scrollEnabled={false}>
                    <TouchableOpacity style={tw`flex-row items-center`}>
                        <Icon name='envelope' type='font-awesome' color='#00008B' size={50} style={tw`w-15`} />
                        <Text style={tw`font-bold text-2xl p-3 flex-1`}>Email</Text>
                        <Icon name='pencil' type='font-awesome' color='#808080' size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity style={tw`flex-row items-center`}>
                        <Icon name='venus-mars' type='font-awesome' color='#808080' size={50} style={tw`w-15`} />
                        <Text style={tw`font-bold text-2xl p-3 flex-1`}>Gender</Text>
                        <Icon name='pencil' type='font-awesome' color='#808080' size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity style={tw`flex-row items-center`}>
                        <Icon name='calendar' type='font-awesome' color='#FCD99A' size={50} style={tw`w-15`} />
                        <Text style={tw`font-bold text-2xl p-3 flex-1`}>Date Of Birth</Text>
                        <Icon name='arrow-right' type='font-awesome' color='#808080' size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity style={tw`flex-row items-center`}>
                        <Icon name='mobile' type='font-awesome' color='#000000' size={50} style={tw`w-15`} />
                        <Text style={tw`font-bold text-2xl p-3 flex-1`}>Mobile</Text>
                        <Icon name='pencil' type='font-awesome' color='#808080' size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity style={tw`flex-row items-center`}>
                        <Icon name='credit-card' type='font-awesome' color='#32612D' size={50} style={tw`w-15`} />
                        <Text style={tw`font-bold text-2xl p-3 flex-1`}>Payment</Text>
                        <Icon name='pencil' type='font-awesome' color='#808080' size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity style={tw`flex-row items-center`}>
                        <Icon name='ambulance' type='font-awesome' color='#ff0000' size={50} style={tw`w-15`} />
                        <Text style={tw`font-bold text-2xl p-3 flex-1`}>Emergency Contact</Text>
                        <Icon name='pencil' type='font-awesome' color='#808080' size={20} />
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={tw``}>
                <Text style={tw`text-sm text-gray-500 py-4`}>Others</Text>
                <ScrollView>
                    <Text style={tw`text-blue-800 py-2 text-xl`}>Switch Account</Text>
                    <Text style={tw`text-red-800 py-2 text-xl`}>Log Out</Text>
                </ScrollView>
            </View>
        </SafeAreaView >
    )
}

export default ProfileScreen