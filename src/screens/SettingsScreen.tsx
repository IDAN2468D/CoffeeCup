import { StyleSheet, Text, View, Alert } from 'react-native';
import React from 'react';
import { TextButton } from '../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
    const navigation = useNavigation<any>();

    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem('userToken');
            Alert.alert('Logged out', 'You have been logged out successfully.');
            navigation.navigate('LogIn');
        } catch (error) {
            console.error('Failed to logout:', error);
            Alert.alert('Logout failed', 'An error occurred while logging out.');
        }
    };

    return (
        <View style={styles.container}>
            <TextButton
                title="LogOut"
                textStyle="text-lg"
                containerStyle="px-7 py-4 bg-primaryOrangeHex rounded-lg"
                onPress={handleLogout}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SettingsScreen;
