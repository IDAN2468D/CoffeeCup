import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const PaymentFooter = (props: any) => {
    return (
        <View className='flex-row-reverse justify-between items-center gap-5 p-5'>
            <View className='items-center w-[100px]'>
                <Text className='font-Medium text-xs text-secondaryLightGreyHex'>Price</Text>
                <Text className='text-primaryOrangeHex text-base'>{props?.currency}
                    <Text className='text-primaryWhiteHex text-2xl font-SemiBold'> {props?.price?.price}</Text>
                </Text>
            </View>
            <TouchableOpacity className='flex-1 items-center py-4 justify-center bg-primaryOrangeHex rounded-[20px]' activeOpacity={0.5} onPress={props.buttonPressHandler}>
                <Text className='font-SemiBold text-lg text-primaryWhiteHex'>{props?.buttonTitle}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PaymentFooter;