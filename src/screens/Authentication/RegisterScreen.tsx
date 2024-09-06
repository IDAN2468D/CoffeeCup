import React from 'react';
import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import useSignUpForm from '../../hooks/useSignUpForm';

const SignUpScreen = ({ navigation }: any) => {
    const { state, dispatch, handleSignUp } = useSignUpForm();

    return (
        <View className="flex-1 justify-center items-center px-6 py-8 bg-primaryBlackHex">
            <View className='flex-1'>
                <Image
                    source={require("../../../assets/app_images/Logo.png")}
                    style={{ width: 100, height: 100 }}
                    resizeMode="contain"
                />
            </View>
            <Text className="text-white text-2xl font-bold mb-2">Hello,</Text>
            <Text className="text-white text-lg mb-6">Register here to get started.</Text>
            <TextInput
                placeholder="Full Name"
                value={state.fullName}
                onChangeText={(text) => dispatch({ type: 'SET_FIELD', payload: { field: 'fullName', value: text } })}
                className="bg-EerieBlack text-white px-4 rounded mb-4 w-full"
                placeholderTextColor="#FFFFFF"
                autoCapitalize="words"
            />
            <TextInput
                placeholder="Email Address"
                value={state.email}
                onChangeText={(text) => dispatch({ type: 'SET_FIELD', payload: { field: 'email', value: text } })}
                className="bg-[#1c1c1c] text-white px-4 rounded mb-4 w-full"
                placeholderTextColor="#FFFFFF"
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <View className="bg-EerieBlack text-white px-4 rounded mb-4 w-full flex-row-reverse justify-between items-center">
                <TextInput
                    placeholder="Password"
                    value={state.password}
                    onChangeText={(text) => dispatch({ type: 'SET_FIELD', payload: { field: 'password', value: text } })}
                    placeholderTextColor="#FFFFFF"
                    className='text-primaryWhiteHex'
                    secureTextEntry={state.secureText}
                />
                <TouchableOpacity onPress={() => dispatch({ type: 'TOGGLE_SECURE_TEXT' })}>
                    <Entypo name={state.secureText ? "eye" : "eye-with-line"} color="white" size={20} />
                </TouchableOpacity>
            </View>
            <View className="bg-[#1c1c1c] text-white px-4 rounded mb-4 w-full flex-row-reverse justify-between items-center">
                <TextInput
                    placeholder="Confirm Password"
                    value={state.confirmPassword}
                    onChangeText={(text) => dispatch({ type: 'SET_FIELD', payload: { field: 'confirmPassword', value: text } })}
                    placeholderTextColor="#FFFFFF"
                    className='text-primaryWhiteHex'
                    secureTextEntry={state.secureText}
                />
                <TouchableOpacity onPress={() => dispatch({ type: 'TOGGLE_SECURE_TEXT' })}>
                    <Entypo name={state.secureText ? "eye" : "eye-with-line"} color="white" size={20} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={handleSignUp} className="bg-[#FFA25E] p-4 rounded w-full items-center mb-4">
                <Text className="text-white font-bold">Register</Text>
            </TouchableOpacity>

            <Text className="text-gray-500 mb-4">Or Register With</Text>

            <View className="flex-row justify-between w-full mb-4">
                <TouchableOpacity activeOpacity={0.5} className="bg-[#3b5998] p-4 rounded flex-1 mx-1 items-center">
                    <AntDesign name='facebook-square' color="white" size={20} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} className="bg-[#db4437] p-4 rounded flex-1 mx-1 items-center">
                    <AntDesign name='google' color="white" size={20} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} className="bg-EerieBlack p-4 rounded flex-1 mx-1 items-center">
                    <AntDesign name='apple1' color="white" size={20} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
                <Text className="text-gray-500">Already have an account? <Text className="text-[#FFA25E]">Log In</Text></Text>
            </TouchableOpacity>

            {state.authMessage ? <Text className="mt-4 text-red-500">{state.authMessage}</Text> : null}
        </View>
    );
};

export default SignUpScreen;
