import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CustomIcon, GradientBgIcon, PaymentFooter, PaymentMethod, PopUpAnimated } from '../components';
import { CreditCard, PaymentList } from '../data/PaymentList';
import { useStore } from '../store/store';
import LinearGradient from 'react-native-linear-gradient';

const PaymentScreen = ({ navigation, route }: any) => {
    const [paymentMode, setPaymentMode] = useState("credit card");
    const CartPrice = useStore((state: any) => state.CartPrice);
    const [showAnimation, setShowAnimation] = useState(false);
    const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);
    const addToOrderHistoryListFromCart = useStore((state: any) => state.addToOrderHistoryListFromCart);

    const buttonPressHandler = () => {
        setShowAnimation(true);
        addToOrderHistoryListFromCart();
        calculateCartPrice();
        setTimeout(() => {
            setShowAnimation(false);
            navigation.navigate('History');
        }, 2000);
    }

    return (
        <View className='flex-1 bg-primaryBlackHex'>
            <PopUpAnimated icon={require("../lottie/successful.json")} showAnimation={showAnimation} style={{ flex: 1 }} />
            <ScrollView
                className='flex-grow'
                showsVerticalScrollIndicator={false}
            >
                <View className='px-6 py-[15px] items-center justify-between flex-row-reverse'>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.pop()}>
                        <GradientBgIcon name='left' color="#52555A" size={16} />
                    </TouchableOpacity>
                    <Text className='text-white font-Medium text-lg'>Payments</Text>
                    <View className='h-9 w-9' />
                </View>
                <View className='p-[15px] gap-[15px]'>
                    {CreditCard.map((data: any) => (
                        <TouchableOpacity
                            activeOpacity={0.5}
                            key={data.CardHolderName}
                            onPress={() => { setPaymentMode("Credit Card") }}
                        >
                            <View
                                className={`
                                        ${"rounded-[30px] border-[3px] p-4 bg-primaryBlackHex"}
                                        ${paymentMode == "Credit Card" ? 'border-primaryOrangeHex' : 'border-primaryGreyHex'} 
                                    `}>
                                <Text className='text-white font-Medium text-lg mx-3 mb-3'>Credit Card</Text>
                                <LinearGradient
                                    colors={["#252a32", "rgba(12,15,20,0.5)"]}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    className='rounded-[30px] px-5 py-5'
                                >
                                    <View className='flex-row-reverse justify-between items-center'>
                                        <CustomIcon name='chip' size={40} color={"#D17842"} />
                                        <CustomIcon name='visa' size={40} color={"#FFFFFF"} />
                                    </View>
                                    <Text className='text-primaryWhiteHex text-base my-5'>{data.CreditCard}</Text>
                                    <View className='flex-row-reverse justify-between'>
                                        <View>
                                            <Text className='text-xs text-primaryLightGreyHex'>Card Holder Name</Text>
                                            <Text className='text-sm text-primaryWhiteHex'>{data.CardHolderName}</Text>
                                        </View>
                                        <View className='items-start'>
                                            <Text className='text-xs text-primaryLightGreyHex'>Expiry Date</Text>
                                            <Text className='text-sm text-primaryWhiteHex'>{data.ExpiryDate}</Text>
                                        </View>
                                    </View>
                                </LinearGradient>
                            </View>
                        </TouchableOpacity>
                    ))}
                    {PaymentList.map((data: any) => (
                        <TouchableOpacity
                            activeOpacity={0.5}
                            key={data.name}
                            onPress={() => { setPaymentMode(data.name) }}
                        >
                            <PaymentMethod
                                paymentMode={paymentMode}
                                name={data.name}
                                icon={data.icon}
                                isIcon={data.isIcon}
                                price={CartPrice}
                            />
                        </TouchableOpacity>
                    ))}
                </View>
                <PaymentFooter
                    buttonTitle={`pay with ${paymentMode}`}
                    price={{ price: route.params.amount }}
                    currency="$"
                    buttonPressHandler={buttonPressHandler}
                />
            </ScrollView>
        </View>
    )
}

export default PaymentScreen;