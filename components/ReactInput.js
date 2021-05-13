import React, {useState} from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'

function ReactInput() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')


    return (
        <View style={{flex: 1, padding: 50}}>
            <TextInput
        style={styles.input}
        placeholder= 'please enter first name'
        value={name}
        onChangeText = {(text) => setName(text)}
        
      />
         

         <TextInput
        style={styles.input}
        placeholder= 'please enter email'
        value={email}
        onChangeText = {(text) => setEmail(text)}
        
      />

      <Text style={{padding: 30, fontSize: 20, color: 'red'}}>{name}</Text>
      <Text>{email}</Text>

        </View>
            
        
    )
}


const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
  });


export default ReactInput
