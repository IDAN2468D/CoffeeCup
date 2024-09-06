import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import OrderItemCard from './OrderItemCard';

const OrderHistoryCard = (props: any) => {
    console.log(props.CartList)
    return (
        <View>
            <View className='flex-row-reverse justify-between items-center mb-2 mt-6'>
                <View>
                    <Text className='font-SemiBold text-base text-primaryWhiteHex'>Order Date</Text>
                    <Text className='font-Regular text-base text-primaryWhiteHex'>{props.OrderDate}</Text>
                </View>
                <View className='items-start'>
                    <Text className='font-SemiBold text-base text-primaryWhiteHex'>Total Amount</Text>
                    <Text className='font-Regular text-[18px] text-primaryOrangeHex'>$ {props.CartListPrice}</Text>
                </View>
            </View>
            <View className='  gap-5'>
                {props.CartList.map((item: any, index: number) => (
                    <TouchableOpacity key={index.toString() + item.id}>
                        <OrderItemCard
                            name={item.name}
                            image={item.imagelink_square}
                            special_ingredient={item.special_ingredient}
                            prices={item.prices}
                            ItemPrice={item.ItemPrice}
                        />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

export default OrderHistoryCard;