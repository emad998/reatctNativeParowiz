import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

function UseStateHooks() {
    const [name, setName] = useState("Geekcoders.com")

    return (
        <View>
            <Text style={{fontSize: 30, padding: 30}}>{name}</Text>
            <Button title="click me" onPress={() => setName('this has changed')}/>
        </View>
    )
}

export default UseStateHooks
