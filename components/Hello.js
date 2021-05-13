import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Hello() {
    return (
        <View>
            <Text style={{fontSize: 25, color: 'red', padding: 50}}>Hello from functional component</Text>
            <Text style={styles.textStyle}>This is the second text</Text>
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
