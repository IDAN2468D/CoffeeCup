import React from 'react';
import { ImageBackground, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomIcon from './CustomIcon';
import BgIcon from './BgIcon';


const CoffeeCard = ({
    id,
    index,
    type,
    roasted,
    imagelink_square,
    name,
    special_ingredient,
    average_rating,
    price,
    buttonPressHandler,
}: any) => {

    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={['#252A32', '#0C0F14']}
            style={{ borderRadius: 25, padding: 10 }}
        >
            <ImageBackground
                className='h-cardHeight w-cardWidth rounded-[20px] overflow-hidden mb-[15px]'
                source={imagelink_square}
                resizeMode='cover'
            >
                <View className='flex-row-reverse bg-primaryBlackRGBA items-center justify-center gap-[10px] px-[15px] absolute rounded-tl-[20px] rounded-br-[20px] top-0 left-0'>
                    <CustomIcon className='text-primaryOrangeHex text-[14px]' name='star' />
                    <Text className='font-SemiBold text-[16px] pb-1 leading-[22px] text-primaryWhiteHex'>{average_rating}</Text>
                </View>
            </ImageBackground>
            <Text className='text-primaryWhiteHex text-base font-Black'>{name}</Text>
            <Text className='text-primaryWhiteHex text-[10px] font-Regular'>{special_ingredient}</Text>
            <View className='flex-row-reverse items-center justify-between mt-[15px]'>
                <Text className='font-SemiBold text-lg text-primaryOrangeHex'>
                    <Text className='text-primaryWhiteHex text-sm'>{price.currency} </Text>
                    {price.price}
                </Text>
                {/* Add Button */}
                <TouchableOpacity
                    className='flex-row-reverse'
                    onPress={() => buttonPressHandler({
                        id,
                        index,
                        name,
                        roasted,
                        imagelink_square,
                        special_ingredient,
                        type,
                        prices: [{ ...price, quantity: 1 }],
                    })}>
                    <BgIcon color="text-primaryWhiteHex" name={"add"} size="text-[16px]" />
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

export default CoffeeCard;