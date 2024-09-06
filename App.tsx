import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import useAuthStatus from './src/hooks/useAuthStatus';
import { PaymentScreen, DetailsScreen } from './src/screens';
import Tabs from './src/navigators/TabNavigator'; // Use default import
import { LogInScreen, RegisterScreen } from './src/screens/Authentication';
import 'react-native-url-polyfill/auto';
import { Buffer } from 'buffer';
global.Buffer = Buffer;

const Stack = createNativeStackNavigator();

const App = () => {
  const { isLoading, isSignedIn } = useAuthStatus();

  if (isLoading) {
    return (
      <View className='flex-1 justify-center items-center bg-primaryBlackHex'>
        <LottieView
          source={require("./src/lottie/coffeecup.json")}
          style={{ width: 200, height: 200 }}
          loop
          autoPlay
        />
        <Text className='text-lg text-primaryWhiteHex font-SemiBold'>CoffeeCup</Text>
      </View>
    );
  }

  console.log('Navigation State:', isSignedIn);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={Tabs} options={{ animation: "fade_from_bottom" }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ animation: "fade_from_bottom" }} />
        <Stack.Screen name="Payment" component={PaymentScreen} options={{ animation: "fade_from_bottom" }} />
        <Stack.Screen name="LogIn" component={LogInScreen} options={{ animation: "fade_from_bottom" }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ animation: "fade_from_bottom" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;