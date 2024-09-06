import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import CustomIcon from './CustomIcon';
import { EnableBackHandler } from '../components';

const ImageBackgroundInfo = (props: any) => {
    return (
        <View>
            <ImageBackground className='w-full aspect-[20/25] justify-between' source={props.imagelink_portrait}>
                <EnableBackHandler
                    BackHandler={props.BackHandler}
                    EnableBackHandler={true}
                    ToggleFavourite={() => { props.ToggleFavourite(props.favourite, props.type, props.id) }}
                    color={props.favourite ? "#DC3535" : "#52555A"}
                    size={16}
                />
                <View className='py-6 px-[30px] bg-primaryBlackRGBA rounded-t-[30px]'>
                    <View className='justify-between gap-[15px]'>
                        <View className='flex-row-reverse justify-between items-center'>
                            <View>
                                <Text className='font-SemiBold text-2xl text-primaryWhiteHex'>{props.name}</Text>
                                <Text className='font-Medium text-xs text-secondaryLightGreyHex'>{props.special_ingredient}</Text>
                            </View>
                            <View className='flex-row-reverse items-center gap-5'>
                                <View className="w-[55px] h-[55px] rounded-[10px] items-center justify-center bg-primaryBlackHex">
                                    <CustomIcon
                                        className='text-primaryOrangeHex'
                                        name={props.type == "Bean" ? "bean" : "beans"}
                                        size={props.type == "Bean" ? 18 : 24}
                                    />
                                    <Text className={`text-primaryWhiteHex ${props.type == "Bean" ? "mt-1" : "mt-[2px]"}`}>
                                        {props.type}
                                    </Text>
                                </View>
                                <View className="w-[55px] h-[55px] rounded-[10px] items-center justify-center bg-primaryBlackHex">
                                    <CustomIcon
                                        className='text-primaryOrangeHex'
                                        name={props.type == "Bean" ? "location" : "drop"}
                                        size={16}
                                    />
                                    <Text className={"font-Medium text-[10px] text-purple-50 mt-1"}>
                                        {props.ingredients}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View className='flex-row-reverse justify-between items-center'>
                            <View className='flex-row-reverse gap-[10px] items-end'>
                                <CustomIcon name='star' color="#D17842" size={20} />
                                <Text className='font-SemiBold text-lg text-primaryWhiteHex'>{props.average_rating}</Text>
                                <Text className='font-Regular text-xs text-primaryWhiteHex'>({props.ratings_count})</Text>
                            </View>
                            <View className="w-[130px] h-[55px] rounded-[10px] items-center justify-center bg-primaryBlackHex">
                                <Text className='text-primaryWhiteHex font-Medium text-xs'>{props.roasted}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default ImageBackgroundInfo;