import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {FAB} from 'react-native-paper'


function FloatingButton() {
    return (
        <FAB 
        style={styles.fab}
        small= {false}
        icon = "plus"
        onPress = {() => console.log('pressed')}
        />
    )
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        flex: 1,
        backgroundColor: 'green'
    }
})

export default FloatingButton


// remove surrounding view in app js.