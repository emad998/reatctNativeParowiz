import React from 'react'
import { Text, View } from 'react-native'

function FlexLayout() {
    return (
        <View style= {{height: 300, padding: 20, flexDirection: "row"}}>
            <View style = {{flex: 1, backgroundColor: "red"}}></View>
            <View style= {{flex: 2, backgroundColor: "green"}}></View>
            <View style= {{flex: 3, backgroundColor: "yellow"}}></View>
            
        </View>
    )
}

export default FlexLayout
