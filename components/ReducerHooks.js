import React, {useReducer} from 'react'
import { Text, View, Button } from 'react-native'

const initialState = {count: 0}

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return {count:state.count+1}
        case 'decrement':
            return {count:state.count-1}
    }
}


function ReducerHooks() {
    const [state, dispatch] = useReducer(reducer, initialState)


    return (
        <View style={{padding: 40}}>
            <View style={{flexDirection:'row'}}>
                <Button title="Increment" onPress={() => dispatch({type:"increment"})}/>
                <Button title="Decrement" onPress={() => dispatch({type:"decrement"})}/>

                
            </View>

            <Text style={{fontSize: 25, padding: 20}}>Count: {state.count}</Text>
        </View>
       
    )
}

export default ReducerHooks
