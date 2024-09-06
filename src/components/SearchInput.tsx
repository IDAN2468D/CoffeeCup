import React from 'react';
import { TextInput, TouchableOpacity, View, Text } from 'react-native';
import CustomIcon from './CustomIcon'; // Adjust the import path as needed

interface SearchInputProps {
    searchText: string;
    setSearchText: (text: string) => void;
    searchCoffee: (search: string) => void;
    resetSearchCoffee: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ searchText, setSearchText, searchCoffee, resetSearchCoffee }) => {
    return (
        <View className='flex-row-reverse m-[30px] rounded-[20px] bg-primaryDarkGreyHex items-center'>
            <TouchableOpacity onPress={() => searchCoffee(searchText)}>
                <CustomIcon
                    name='search'
                    size={18}
                    color={searchText.length > 0 ? "#D17842" : "#52555A"}
                    style={{ marginHorizontal: 20 }}
                />
            </TouchableOpacity>
            <TextInput
                placeholder='Find Your Coffee...'
                value={searchText}
                onChangeText={(text) => {
                    setSearchText(text);
                    searchCoffee(text);
                }}
                placeholderTextColor="#52555A"
                className='flex-1 h-[40px] font-Medium text-sm text-primaryWhiteHex'
            />
            {searchText.length > 0 && (
                <TouchableOpacity onPress={resetSearchCoffee}>
                    <CustomIcon name='close' size={15} color="#52555a" style={{ marginHorizontal: 20 }} />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default SearchInput;
