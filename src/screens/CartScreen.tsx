import React from 'react'
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { EmptyListAnimation, HeaderBar, PaymentFooter, CartItem } from '../components'
import { useCartScreen } from '../hooks/useCartScreen'

const CartScreen = ({ navigation }: any) => {
    const {
        incrementItem,
        decrementItem,
        buttonPressHandler,
        CartList,
        CartPrice,
        tabBarHeight
    } = useCartScreen({ navigation });

    return (
        <View className='bg-primaryBlackHex flex-1'>
            <StatusBar backgroundColor="#0C0F14" />
            <HeaderBar title="Cart" />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}
            >
                <View
                    style={{ marginBottom: tabBarHeight }}
                    className={"flex-1 justify-between"}
                >
                    <View className='flex-1'>
                        {CartList.length == 0 ? (
                            <EmptyListAnimation title="Cart is Empty" />
                        ) : (
                            <View className='px-5 gap-5'>
                                {CartList.map((data: any) => (
                                    <TouchableOpacity
                                        activeOpacity={0.5}
                                        key={data.id}
                                        onPress={() => {
                                            navigation.push("Details", {
                                                index: data.index,
                                                id: data.id,
                                                type: data.type
                                            })
                                        }}>
                                        <CartItem
                                            id={data.id}
                                            name={data.name}
                                            imagelink_square={data.imagelink_square}
                                            special_ingredient={data.special_ingredient}
                                            roasted={data.roasted}
                                            prices={data.prices}
                                            type={data.type}
                                            incrementItem={incrementItem}
                                            decrementItem={decrementItem}
                                        />
                                    </TouchableOpacity>
                                ))}
                            </View>
                        )}
                    </View>
                    {CartList.length != 0 ?
                        (
                            <PaymentFooter
                                buttonPressHandler={() => buttonPressHandler()}
                                buttonTitle="Pay"
                                price={{ price: CartPrice, current: "$" }}
                            />
                        ) : (
                            <></>
                        )}
                </View>
            </ScrollView>
        </View>
    )
}

export default CartScreen;