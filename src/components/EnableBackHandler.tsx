import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import GradientBgIcon from './GradientBgIcon'

const EnableBackHandler = (props: any) => {
    return (
        <View>
            {props.EnableBackHandler ? (
                <View className='p-[30px] items-center flex-row-reverse justify-between'>
                    <TouchableOpacity activeOpacity={0.5} onPress={props.BackHandler}>
                        <GradientBgIcon name='left' color="#52555A" size={16} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} onPress={props.ToggleFavourite}>
                        <GradientBgIcon name='like' color={props.color} size={props.size} />
                    </TouchableOpacity>
                </View>
            ) : (
                <View className='p-[30px] items-center flex-row justify-start'>
                    <TouchableOpacity activeOpacity={0.5} onPress={props.ToggleFavourite}>
                        <GradientBgIcon name='like' color={props.color} size={props.size} />
                    </TouchableOpacity>
                </View>
            )}
        </View>
    )
}

export default EnableBackHandler

const styles = StyleSheet.create({})