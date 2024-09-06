import React, { useEffect, useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { useLogIn } from '../../hooks/useLogIn';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Image } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
    webClientId: '741936568330-9g3hr6f8v99kltj69fqj3u351s3b1pp5.apps.googleusercontent.com',
});

const SignInScreen = ({ navigation }: any) => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        authMessage,
        secureText,
        setSecureText,
        handleSignIn,
    } = useLogIn({ navigation });

    const signInWithGoogle = async (): Promise<void> => {
        try {
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            const response = await GoogleSignin.signIn();
            console.log('Google Sign-In response:', response);
            const { idToken } = response.data as { idToken: string };
            if (!idToken) {
                throw new Error('No idToken returned from Google Sign-In.');
            }
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            await auth().signInWithCredential(googleCredential);
            console.log('Successfully signed in with Google.');
            navigation.navigate("Home")
        } catch (error: any) {
            console.error('Error during Google Sign-In: ', error.message);
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.warn('User cancelled the Google Sign-In process.');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.warn('Google Sign-In is already in progress.');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.warn('Google Play Services is not available or out of date.');
            } else {
                console.error('Unhandled error during Google Sign-In:', error);
            }
        }
    };

    return (
        <View className="flex-1 items-center px-6 py-8 bg-primaryBlackHex">
            <View className='flex-1 justify-center'>
                <Image
                    source={require("../../../assets/app_images/Logo.png")}
                    style={{ width: 100, height: 100 }}
                    resizeMode="contain"
                />
            </View>
            <Text className="text-white text-2xl font-bold mb-2">Welcome back!</Text>
            <Text className="text-white text-lg mb-6">Glad to see you again!</Text>
            <View className="bg-EerieBlack text-white px-4 rounded mb-4 w-full">
                <TextInput
                    placeholder="Email Address"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    placeholderTextColor="#FFFFFF"
                    className="text-primaryWhiteHex"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>
            <View className="bg-EerieBlack text-white px-4 rounded mb-4 w-full flex-row-reverse justify-between items-center">
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    placeholderTextColor="#FFFFFF"
                    className="text-primaryWhiteHex"
                    secureTextEntry={secureText}
                />
                <TouchableOpacity onPress={() => setSecureText()}>
                    <Entypo name={secureText ? 'eye' : 'eye-with-line'} color="white" size={20} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity className="mb-6 self-end">
                <Text className="text-[#FFA25E]">Forgot password?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleSignIn} className="bg-[#FFA25E] p-4 rounded w-full items-center mb-4">
                <Text className="text-white font-bold">Login</Text>
            </TouchableOpacity>

            <Text className="text-gray-500 mb-4">Or Login With</Text>

            <View className="flex-row justify-between w-full mb-4">
                <TouchableOpacity activeOpacity={0.5} className="bg-[#3b5998] p-4 rounded flex-1 mx-1 items-center">
                    <AntDesign name="facebook-square" color="white" size={20} />
                </TouchableOpacity>
                <TouchableOpacity onPress={signInWithGoogle} activeOpacity={0.5} className="bg-[#db4437] p-4 rounded flex-1 mx-1 items-center">
                    <AntDesign name="google" color="white" size={20} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} className="bg-EerieBlack p-4 rounded flex-1 mx-1 items-center">
                    <AntDesign name="apple1" color="white" size={20} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text className="text-gray-500">
                    Don't have an account? <Text className="text-[#FFA25E]">Register</Text>
                </Text>
            </TouchableOpacity>

            {authMessage ? <Text className="mt-4 text-red-500">{authMessage}</Text> : null}
        </View>
    );
};

export default SignInScreen;
