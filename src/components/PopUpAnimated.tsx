import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

const PopUpAnimated = (props: any) => {
    return (
        <>
            {
                props.showAnimation ? (
                    <View className='flex-1 absolute top-0 bottom-0 left-0 right-0 z-50 bg-primaryBlackRGBA justify-center'>
                        <LottieView source={props.icon} style={props.style} autoPlay loop={false} />
                    </View>
                ) : (
                    <></>
                )
            }
        </>
    )
}

export default PopUpAnimated