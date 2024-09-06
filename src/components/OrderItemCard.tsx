import { View, Text, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import TextButton from './TextButton'

const OrderItemCard = (props: any) => {
    console.log(props.prices)
    return (
        <LinearGradient
            colors={["#252a32", "rgba(12,15,20,0.5)"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className='p-5 rounded-[25px]'
        >
            <View className='flex-row-reverse justify-between items-center'>
                <View className='flex-row-reverse gap-5 items-center'>
                    <Image source={props.image} style={{ width: 90, height: 90, borderRadius: 15 }} />
                    <View>
                        <Text className='text-base text-primaryWhiteHex'>{props.name}</Text>
                        <Text className='text-[10px] font-SemiBold text-primaryWhiteHex'>{props.special_ingredient}</Text>
                    </View>
                </View>
                <View>
                    <Text className='text-primaryOrangeHex text-base font-SemiBold'>$
                        <Text className='text-primaryWhiteHex text-xl font-SemiBold'> {props.ItemPrice}</Text>
                    </Text>
                </View>
            </View>
            {
                props.prices.map((data: any, index: any) => (
                    <View key={index.toString()} className='flex-row-reverse justify-between mt-3'>
                        <View className='flex-row-reverse gap-[1px]'>
                            <View className='px-5 py-2 bg-primaryBlackHex rounded-r-lg'>
                                <Text className='text-sm text-primaryWhiteHex font-SemiBold'>{data.size}</Text>
                            </View>
                            <View className='px-5 py-2 bg-primaryBlackHex rounded-l-lg'>
                                <Text className='text-primaryOrangeHex text-center text-sm font-SemiBold'>$
                                    <Text className='text-primaryWhiteHex text-base font-SemiBold'> {props.ItemPrice}</Text>
                                </Text>
                            </View>
                        </View>
                        <View className='flex-row-reverse justify-center items-center gap-2'>
                            <Text className='text-xl text-primaryOrangeHex font-SemiBold'>x</Text>
                            <Text className='text-xl text-primaryWhiteHex font-SemiBold'>{data.quantity}</Text>
                        </View>
                        <View className='flex-row-reverse justify-center items-center gap-2 '>
                            <Text className='text-sm text-primaryOrangeHex font-SemiBold'>$</Text>
                            <Text className='text-primaryWhiteHex text-base font-SemiBold'>{data.price}</Text>
                        </View>
                    </View>
                ))
            }
        </LinearGradient>
    )
}

export default OrderItemCard