import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ProfilePic = () => {
    return (
        <View className='border-2 border-secondaryDarkGreyHex rounded-xl items-center justify-center bg-secondaryDarkGreyHex overflow-hidden'>
            <Image source={require("../../assets/app_images/avatar.png")} className='h-9 w-9' />
        </View>
    );
};

export default ProfilePic;