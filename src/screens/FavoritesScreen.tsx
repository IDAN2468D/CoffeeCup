import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { EmptyListAnimation, FavoritesItemCard, HeaderBar } from '../components';
import { useStore } from '../store/store';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'

const FavoritesScreen = ({ navigation }: any) => {
    const FavoritesList = useStore((state: any) => state.FavoritesList);
    const BottomTabBarHeight = useBottomTabBarHeight();
    const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
    const deleteFromFavoriteList = useStore((state: any) => state.deleteFromFavoriteList);

    const ToggleFavourite = (favourite: boolean, type: string, id: string) => {
        favourite ? deleteFromFavoriteList(type, id) : addToFavoriteList(type, id);
    };

    return (
        <View className='flex-1 bg-primaryBlackHex '>
            <HeaderBar title="Favorites" />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}
            >
                <View
                    style={{ marginBottom: BottomTabBarHeight }}
                    className={"flex-1 justify-between"}
                >
                    <View className='flex-1'>
                        {FavoritesList.length == 0 ? (
                            <EmptyListAnimation title="No Favorites" />
                        ) : (
                            <View className='px-5 gap-5'>
                                {FavoritesList.map((data: any) => (
                                    <TouchableOpacity
                                        activeOpacity={0.5}
                                        key={data.id}
                                        onPress={() => {
                                            navigation.push("Details", {
                                                index: data.index,
                                                id: data.id,
                                                type: data.type
                                            })
                                        }}
                                    >
                                        <FavoritesItemCard
                                            id={data.id}
                                            imagelink_portrait={data.imagelink_portrait}
                                            name={data.name}
                                            special_ingredient={data.special_ingredient}
                                            type={data.type}
                                            ingredients={data.ingredients}
                                            average_rating={data.average_rating}
                                            ratings_count={data.ratings_count}
                                            roasted={data.roasted}
                                            description={data.description}
                                            favourite={data.favourite}
                                            ToggleFavouriteItem={ToggleFavourite}
                                        />
                                    </TouchableOpacity>
                                ))}
                            </View>
                        )}
                    </View>
                </View>
            </ScrollView>

        </View>
    )
}

export default FavoritesScreen;
