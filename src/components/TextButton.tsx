import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const TextButton = (props: any) => {
    return (
        <TouchableOpacity activeOpacity={0.5} className={`${props.containerStyle}`} onPress={props.onPress}>
            <Text className={`${props.textStyle}`}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default TextButton;