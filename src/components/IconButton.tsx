import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomIcon from './CustomIcon'

const IconButton = (props: any) => {
    return (
        <TouchableOpacity activeOpacity={0.5} className={props.containerIcon} onPress={props.onPress}>
            <CustomIcon className={props.styleIcon} name={props.icon} size={props.size} />
        </TouchableOpacity>
    )
}

export default IconButton;