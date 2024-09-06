import React from 'react';
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { useStore } from '../store/store';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import useCoffee from '../hooks/useHomeScreen';
import { CoffeeCard, HeaderBar } from '../components';
import SearchInput from '../components/SearchInput';
import LottieView from 'lottie-react-native';

type CoffeeCardProps = {
    id: number;
    index: number;
    type: string;
    roasted: string;
    imagelink_square: string | null;  // Allow null values
    name: string;
    special_ingredient: string;
    average_rating: number;
    price: number;
    buttonPressHandler: (id: number) => void;
};

export default function HomeScreen({ navigation }: any) {
    const CoffeeList = useStore((state: any) => state.CoffeeList);
    const BeanList = useStore((state: any) => state.BeanList);
    const TabBarHeight = useBottomTabBarHeight();

    const {
        filteredCategories,
        searchText,
        categoryIndex,
        sortedCoffee,
        scrollViewRef,
        setSearchText,
        handleCategoryPress,
        searchCoffee,
        resetSearchCoffee,
        CoffeeCartAddCart
    } = useCoffee(CoffeeList);

    return (
        <View className='flex-1 bg-primaryBlackHex'>
            <StatusBar backgroundColor="#0C0F14" />
            <ScrollView showsVerticalScrollIndicator={false} className='flex-grow'>
                {/* App Header */}
                <HeaderBar />
                {/* Header Text Title */}
                <Text className='text-[28px] font-SemiBold text-primaryWhiteHex pl-[30px]'>
                    Find the best{'\n'}coffee for you
                </Text>
                {/* Search Input */}
                <SearchInput
                    searchText={searchText}
                    setSearchText={setSearchText}
                    searchCoffee={searchCoffee}
                    resetSearchCoffee={resetSearchCoffee}
                />
                {/* Category ScrollView */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        flexDirection: 'row-reverse',
                        paddingHorizontal: 20,
                        marginBottom: 20,
                    }}
                >
                    {filteredCategories.length > 0 ? (
                        filteredCategories.map((category, index) => (
                            <View className='px-[15px]' key={index.toString()}>
                                <TouchableOpacity className='items-center' onPress={() => handleCategoryPress(index)}>
                                    <Text
                                        className={`font-SemiBold text-base text-primaryLightGreyHex mb-1 
                                            ${categoryIndex.index === index ? 'text-primaryOrangeHex' : ''}`}
                                    >
                                        {category}
                                    </Text>
                                    {categoryIndex.index === index && (
                                        <View className='h-[10px] w-[10px] rounded-[10px] bg-primaryOrangeHex' />
                                    )}
                                </TouchableOpacity>
                            </View>
                        ))
                    ) : (
                        <Text className='text-primaryWhiteHex text-center mx-[20px]'>No categories found.</Text>
                    )}
                </ScrollView>
                {/* Coffee List */}
                {sortedCoffee.length === 0 ? (
                    <View className='items-center p-[20px]'>
                        <LottieView
                            source={require("../lottie/CoffeeEmpty.json")}
                            style={{ width: 100, height: 100 }}
                            autoPlay
                            loop
                        />
                        <Text className='font-SemiBold text-base text-primaryWhiteHex'>No coffee available.</Text>
                    </View>
                ) : (
                    <ScrollView ref={scrollViewRef} horizontal showsHorizontalScrollIndicator={false}>
                        {sortedCoffee.map((coffee: any, index: number) => (
                            <TouchableOpacity
                                key={index}
                                activeOpacity={0.5}
                                onPress={() => {
                                    navigation.push("Details", {
                                        index: coffee.index,
                                        id: coffee.id,
                                        type: coffee.type,
                                    });
                                }}>
                                <View className='mr-[20px] pl-[5px]'>
                                    <CoffeeCard
                                        id={coffee.id}
                                        index={coffee.index}
                                        type={coffee.type}
                                        roasted={coffee.roasted}
                                        imagelink_square={coffee.imagelink_square}
                                        name={coffee.name}
                                        special_ingredient={coffee.special_ingredient}
                                        average_rating={coffee.average_rating}
                                        price={coffee.prices[2]}
                                        buttonPressHandler={CoffeeCartAddCart}
                                    />
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                )}
                <Text className='font-Medium text-lg mr-[30px] my-5 text-secondaryLightGreyHex'>Coffee Beans</Text>
                {/* Coffee Beans */}
                <ScrollView style={{ marginBottom: TabBarHeight }} horizontal showsHorizontalScrollIndicator={false}>
                    {BeanList.map((beans: any, index: number) => (
                        <TouchableOpacity
                            key={index}
                            activeOpacity={0.5}
                            onPress={() => {
                                navigation.push("Details", {
                                    index: beans.index,
                                    id: beans.id,
                                    type: beans.type,
                                });
                            }}>
                            <View className='mr-[20px] pl-[5px]'>
                                <CoffeeCard
                                    id={beans.id}
                                    index={beans.index}
                                    type={beans.type}
                                    roasted={beans.roasted}
                                    imagelink_square={beans.imagelink_square}
                                    name={beans.name}
                                    special_ingredient={beans.special_ingredient}
                                    average_rating={beans.average_rating}
                                    price={beans.prices[2]}
                                    buttonPressHandler={CoffeeCartAddCart}
                                />
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </ScrollView>
        </View>
    );
}
