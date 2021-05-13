import React from 'react'
import { Text, View, Button } from 'react-native'

function Home(props) {
    return (
        <View>
            <Text>Welcome screen</Text>

            <Button title="Profile" onPress = {() => props.navigation.navigate('Profile')}/>
        </View>
    )
}

export default Home
