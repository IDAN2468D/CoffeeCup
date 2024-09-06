import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { EmptyListAnimation, HeaderBar, OrderHistoryCard, PopUpAnimated, TextButton } from '../components'
import { useStore } from '../store/store';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const OrderHistoryScreen = () => {
    const tabBarHeight = useBottomTabBarHeight()
    const [showAnimation, setShowAnimation] = useState(false);
    const OrderHistoryList = useStore((state: any) => state.OrderHistoryList);

    const buttonPressHandler = () => {
        setShowAnimation(true);
        setTimeout(() => {
            setShowAnimation(false);
        }, 2000)
    }


    return (
        <View className='flex-1 bg-primaryBlackHex'>
            <HeaderBar title="Order History" />
            <PopUpAnimated icon={require("../lottie/download.json")} showAnimation={showAnimation} style={{ height: 250 }} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                className='flex-grow'>
                <View className="flex-1" style={{ marginBottom: tabBarHeight }} >
                    <View className='flex-1'>
                        {OrderHistoryList.length == 0 ? (
                            <EmptyListAnimation title={"No Order History"} />
                        ) : (
                            <View className='mx-5'>
                                {OrderHistoryList.map((data: any, index: number) => (
                                    <OrderHistoryCard
                                        key={index.toString()}
                                        navigationOnHandler={() => { }}
                                        CartList={data.CartList}
                                        CartListPrice={data.CartListProps}
                                        OrderDate={data.OrderDate}
                                    />
                                ))}
                            </View>
                        )}
                    </View>
                    {OrderHistoryList.length > 0 ? (
                        <TextButton
                            title="Download"
                            containerStyle="mx-6 py-5 mt-5 bg-primaryOrangeHex rounded-2xl"
                            textStyle="text-center"
                            onPress={() => buttonPressHandler()}
                        />
                    ) : (
                        <></>
                    )}
                </View>
            </ScrollView>
        </View>
    )
}

export default OrderHistoryScreen;