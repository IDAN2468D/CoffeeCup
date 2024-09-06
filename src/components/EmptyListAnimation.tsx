import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

const EmptyListAnimation = (props: any) => {
    return (
        <View className='flex-1 justify-center'>
            <LottieView
                style={{ height: 300 }}
                source={require('../lottie/coffeecup.json')}
                autoPlay={true}
                loop={true}
            />
            <Text className='font-Medium text-base text-primaryOrangeHex text-center'>{props.title}</Text>
        </View>
    )
}

export default EmptyListAnimation;