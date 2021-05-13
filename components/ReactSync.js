import React, {useState, useEffect} from 'react'
import { Text, TextInput, View, Button } from 'react-native'
import AsynStorage from '@react-native-async-storage/async-storage'

function ReactSync() {
    const [username, setUsername] = useState()

    const storeData = async () => {
        try{
            await AsynStorage.setItem('MyUsername', username)
        } catch(e) {
            // save the error
        }
    }

    const getData = async () => {
        try {
            const value = await AsynStorage.getItem('MyUsername')
            if(value != null) {
                setUsername(value)
            }
        } catch (e) {
            // save the error
        }

    }

    useEffect(() => {
        getData()
    }, [])

    const removeValue = async () => {
        try {
            await AsynStorage.removeItem('MyUsername')
        } catch(e) {
            // error
        } finally {
            setUsername('')
        }
    }

    return (
        <View style={{flex:1, alignItems:'center', paddingTop:50}}>
            <Text style={{height: 20}}>{username}</Text>
            <Text style={{fontSize: 25}}>Write your username here</Text>

            <TextInput
            style= {{borderWidth: 2, alignSelf: 'stretch', height: 60, margin: 20, paddingHorizontal: 10}}
            placeholder = "please enter username"
            onChangeText = {(text) => setUsername(text)}

            />

            <View style={{flexDirection: 'row'}}>
                <Button title='save Username' onPress={() => storeData()}/>

                <Button title='remove username' onPress={() => removeValue()}/>

            </View>

        </View>
    )
}

export default ReactSync
