import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { styled } from 'nativewind';
import IconButton from './IconButton';

const CartItem = (props: any) => {
    const ImageS = styled(Image);

    return (
        <View>
            {props.prices.length !== 1 ? (
                <LinearGradient
                    colors={["#252A32", "#0C0F14"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    className='p-3 rounded-[25px]'
                >
                    <View className='flex-1 flex-row-reverse gap-3'>
                        <ImageS source={props.imagelink_square} className='w-[130px] h-[130px] rounded-[25px]' />
                        <View className='py-1 justify-between'>
                            <View>
                                <Text className='text-white font-SemiBold text-lg'>{props.name}</Text>
                                <Text className='text-white font-Regular text-xs'>{props.special_ingredient}</Text>
                            </View>
                            <View className="w-[130px] h-[55px] rounded-[10px] items-center justify-center bg-primaryBlackHex">
                                <Text className='text-primaryWhiteHex font-Medium text-xs'>{props.roasted}</Text>
                            </View>
                        </View>
                    </View>
                    {props.prices.map((data: any, index: number) => (
                        <View key={`${props.id}-${data.size}-${index}`} className='flex-1 flex-row-reverse mt-4 justify-center items-center'>
                            <View className='flex-1 items-center flex-row-reverse justify-between'>
                                <View className='bg-primaryBlackHex h-10 w-[100px] items-center justify-center rounded-[10px]'>
                                    <Text className={`
                                    ${data.type === "Bean" ? "text-xs" : "text-base"}
                                     ${"text-primaryWhiteHex"}`
                                    }
                                    >{data.size}</Text>
                                </View>
                                <Text className='text-primaryWhiteHex font-SemiBold text-lg'>
                                    <Text className='text-primaryOrangeHex'>{data.currency} </Text>
                                    {data.price}
                                </Text>
                                <IconButton
                                    onPress={() => props.decrementItem(props.id, data.size)}
                                    containerIcon="bg-primaryOrangeHex p-[12px] rounded-[10px]"
                                    icon="minus"
                                    size={10}
                                />
                                <View className='border-primaryOrangeHex py-1 px-6 border-[1px] rounded-[10px]'>
                                    <Text className='text-primaryWhiteHex text-base'>{data.quantity}</Text>
                                </View>
                                <IconButton
                                    onPress={() => props.incrementItem(props.id, data.size)}
                                    containerIcon="bg-primaryOrangeHex p-[12px] rounded-[10px]"
                                    icon="add"
                                    size={10}
                                />
                            </View>
                        </View>
                    ))}
                </LinearGradient>
            ) : (
                <LinearGradient
                    colors={["#252A32", "#0C0F14"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    className='flex-row-reverse p-3 rounded-[25px]'
                >
                    <View className='flex-1 flex-row-reverse gap-3'>
                        <ImageS source={props.imagelink_square} className='w-[150px] h-[150px] rounded-[25px]' />
                        <View className='flex-1 self-stretch justify-around'>
                            <View>
                                <Text className='text-white font-SemiBold text-lg'>{props.name}</Text>
                                <Text className='text-white font-Regular text-xs'>{props.special_ingredient}</Text>
                            </View>
                            {props.prices.map((data: any, index: number) => (
                                <View key={`${props.id}-${data.size}-${index}`}>
                                    <View className='flex-row-reverse'>
                                        <View className='flex-row-reverse gap-3 my-1 items-center'>
                                            <View className='bg-primaryBlackHex h-10 w-[90px] items-center justify-center rounded-[10px]'>
                                                <Text className={`
                                    ${data.type === "Bean" ? "text-xs" : "text-base"}
                                     ${"text-primaryWhiteHex"}`
                                                }
                                                >{data.size}</Text>
                                            </View>
                                            <Text className='text-primaryWhiteHex font-SemiBold text-lg'>
                                                <Text className='text-primaryOrangeHex'>{data.currency} </Text>
                                                {data.price}
                                            </Text>
                                        </View>
                                    </View>
                                    <View className='flex-row-reverse my-1'>
                                        <IconButton
                                            onPress={() => props.decrementItem(props.id, data.size)}
                                            containerIcon="bg-primaryOrangeHex p-[12px] rounded-[10px]"
                                            icon="minus"
                                            size={10}
                                        />
                                        <View className='border-primaryOrangeHex py-1 px-6 border-[1px] rounded-[10px] mx-3'>
                                            <Text className='text-primaryWhiteHex text-base'>{data.quantity}</Text>
                                        </View>
                                        <IconButton
                                            onPress={() => props.incrementItem(props.id, data.size)}
                                            containerIcon="bg-primaryOrangeHex p-[12px] rounded-[10px]"
                                            icon="add"
                                            size={10}
                                        />
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
                </LinearGradient>
            )}
        </View>
    );
};

export default CartItem;
