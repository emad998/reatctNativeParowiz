import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class HelloClass extends Component {
    render() {
        return (
            <View>
                <Text style={styles.textStyle}>{this.props.website}</Text>
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