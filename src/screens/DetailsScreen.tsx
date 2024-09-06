import { ImageBackground, ScrollView, StatusBar, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import { useStore } from '../store/store';
import { ImageBackgroundInfo, PaymentFooter } from '../components';
import useItemDetails from '../hooks/useItemDetails';

const DetailsScreen = ({ navigation, route }: any) => {
    const {
        item,
        price,
        setPrice,
        fullDesc,
        setFullDesc,
        toggleFavourite,
        backHandler,
        addToCartHandler,
    } = useItemDetails(route, navigation);

    return (
        <View className='flex-1 bg-primaryBlackHex'>
            <StatusBar backgroundColor="#0C0F14" />
            <ScrollView
                showsHorizontalScrollIndicator={false}
                className='flex-grow'
            >
                <ImageBackgroundInfo
                    EnableBackHandler={true}
                    imagelink_portrait={item.imagelink_portrait}
                    type={item.type}
                    id={item.id}
                    favourite={item.favourite}
                    name={item.name}
                    special_ingredient={item.special_ingredient}
                    ingredients={item.ingredients}
                    average_rating={item.average_rating}
                    ratings_count={item.ratings_count}
                    roasted={item.roasted}
                    BackHandler={backHandler}
                    ToggleFavourite={toggleFavourite}
                />
                <View className='p-5'>
                    <Text className='font-SemiBold text-base text-primaryWhiteHex mb-[10px]'>Description</Text>
                    {fullDesc ? (
                        <TouchableWithoutFeedback onPress={() => setFullDesc(prev => !prev)}>
                            <Text className='font-Regular text-sm text-primaryWhiteHex mb-[30px] tracking-widest'>
                                {item.description}
                            </Text>
                        </TouchableWithoutFeedback>
                    ) : (
                        <TouchableWithoutFeedback onPress={() => setFullDesc(prev => !prev)}>
                            <Text numberOfLines={3} className='font-Regular text-sm text-primaryWhiteHex mb-[30px] tracking-widest'>
                                {item.description}
                            </Text>
                        </TouchableWithoutFeedback>
                    )}
                    <Text className='font-SemiBold text-base text-primaryWhiteHex mb-[10px]'>Size</Text>
                    <View className='flex-row-reverse justify-between gap-5'>
                        {item.prices.map((data: any) => {
                            const isSelected = data.size === price.size;
                            const textSizeClass = item.type === "bean" ? "text-sm" : "text-base";
                            const borderColorClass = isSelected ? "border-primaryOrangeHex" : "border-primaryDarkGreyHex";
                            const SizeBox = "flex-1 bg-primaryDarkGreyHex items-center justify-center h-[48px] rounded-[10px] border-2"
                            return (
                                <TouchableOpacity
                                    key={data.size}
                                    className={`${SizeBox} ${borderColorClass}`}
                                    onPress={() => setPrice(data)}
                                >
                                    <Text className={`${textSizeClass} text-primaryWhiteHex`}>
                                        {data.size}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>
                <PaymentFooter
                    price={price}
                    buttonTitle="Add to Cart"
                    currency={"$"}
                    buttonPressHandler={addToCartHandler}
                />
            </ScrollView>
        </View>
    );
}

export default DetailsScreen;