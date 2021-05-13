import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

 class StateClass extends Component {
    state = {
        name: 'Emad'
    }


    render() {
        return (
            <View>
                <Text style={{fontSize: 20, padding: 30}}>{this.state.name}</Text>
                <Button title="click me"
                onPress={() => this.setState({name: 'text changed'})}
                />
            </View>
        )
    }
}


export default StateClass