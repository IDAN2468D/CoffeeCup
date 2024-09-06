import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomIcon from './CustomIcon';

const BgIcon = (props: any) => {
    return (
        <View className={'h-[30px] w-[30px] justify-center items-center rounded-lg bg-primaryOrangeHex'} >
            <CustomIcon className={(`${props.color} ${props.size}`)} name={props.name} />
        </View>
    )
}

export default BgIcon;