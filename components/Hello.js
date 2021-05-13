import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Hello(props) {
    return (
        <View>
            <Text style={styles.textStyle}>{props.name}{props.lastName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: 'green',
        padding: 20
    }
})


export default Hello
