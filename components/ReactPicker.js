import React, {useState} from 'react'
import { Text, View } from 'react-native'
import {Picker} from '@react-native-picker/picker'

function ReactPicker() {
    const [names, setNames] = useState()

    return (
        <View style={{padding: 50}}>
            <Picker
             selectedValue={names}
             onValueChange= {(itemValue, itemIndex) => {
                 setNames(itemValue)
             }}
             >
                 <Picker.Item label="Parwiz" value="Parwiz" />
                 <Picker.Item label="Emad" value="Emad" />
                 <Picker.Item label="Bob" value="Bob" />
            </Picker>

            <Text>{names}</Text>
        </View>
    )
}

export default ReactPicker
