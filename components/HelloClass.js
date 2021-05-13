import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class HelloClass extends Component {
    render() {
        return (
            <View>
                <Text style={{fontSize: 30, color: 'yellow', padding: 20}}>Hello from class component</Text>
                <Text style={styles.textStyle}>this is second text</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 23,
        color: 'brown'
    }
})

export default HelloClass