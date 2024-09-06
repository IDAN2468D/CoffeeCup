import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, CartScreen, FavoritesScreen, OrderHistoryScreen } from '../screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BlurView } from '@react-native-community/blur';
import CustomIcon from '../components/CustomIcon';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export function Tabs() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.container,
                tabBarBackground: () => (
                    <BlurView
                        overlayColor="transparent"
                        blurAmount={15}
                        style={styles.BlurViewStyle}
                    />
                ),
            }}
        >
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({ focused, size }) => (
                        <Ionicons
                            name="settings-sharp"
                            size={size}
                            style={{ color: focused ? '#D17842' : '#52555A' }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="History"
                component={OrderHistoryScreen}
                options={{
                    tabBarIcon: ({ focused, size }) => (
                        <CustomIcon
                            name="bell"
                            size={size}
                            className={focused ? 'text-primaryOrangeHex' : 'text-primaryLightGreyHex'}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Favorites"
                component={FavoritesScreen}
                options={{
                    tabBarIcon: ({ focused, size }) => (
                        <CustomIcon
                            name="like"
                            size={size}
                            className={focused ? 'text-primaryOrangeHex' : 'text-primaryLightGreyHex'}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    tabBarIcon: ({ focused, size }) => (
                        <CustomIcon
                            name="cart"
                            size={size}
                            className={focused ? 'text-primaryOrangeHex' : 'text-primaryLightGreyHex'}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, size }) => (
                        <CustomIcon
                            name="home"
                            size={size}
                            className={focused ? 'text-primaryOrangeHex' : 'text-primaryLightGreyHex'}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default Tabs;

const styles = StyleSheet.create({
    container: {
        height: 80,
        position: "absolute",
        backgroundColor: "rgba(12,15,20,0.5)",
        borderTopWidth: 0,
        elevation: 0,
        borderTopColor: "transparent",
    },
    BlurViewStyle: {
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
    }
});
