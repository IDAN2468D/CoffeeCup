import React from 'react';
import { Image, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomIcon from './CustomIcon';

const PaymentMethod = (props: any) => {
    console.log(props.price)
    return (
        <View
            className={`
                ${"rounded-[30px] border-[3px]  bg-primaryBlackHex"}
                ${props.paymentMode == props.name ? 'border-primaryOrangeHex' : 'border-primaryGreyHex'} 
            `}
        >
            {props.isIcon ? (
                <LinearGradient
                    colors={['#252A32', '#0C0F14']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    className="flex-row-reverse items-center justify-between p-3 px-6 rounded-[30px]"
                >
                    <View className="flex-row-reverse items-center gap-6">
                        <CustomIcon name="wallet" size={30} className="text-primaryOrangeHex" />
                        <Text className="text-primaryWhiteHex text-base font-SemiBold">{props.name}</Text>
                    </View>
                    <View className='flex-row'>
                        <Text className='text-primaryWhiteHex font-SemiBold text-[16px]'>{props.price}</Text>
                        <Text className='text-primaryOrangeHex font-SemiBold text-[18px]'>$ </Text>
                    </View>
                </LinearGradient>
            ) : (
                <LinearGradient
                    colors={['#252A32', '#0C0F14']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    className="flex-row-reverse items-center p-3 px-6 rounded-[30px]"
                >
                    <View className="flex-row-reverse items-center gap-6">
                        <Image className="w-[30px] h-[30px]" source={props.icon} />
                        <Text className="text-primaryWhiteHex text-base font-SemiBold">{props.name}</Text>
                    </View>
                </LinearGradient>
            )}
        </View>
    );
};

export default PaymentMethod;
