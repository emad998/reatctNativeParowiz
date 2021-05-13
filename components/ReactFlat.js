import React from 'react'
import { Text, View, FlatList } from 'react-native'
import {Card} from 'react-native-paper'

function ReactFlat() {

    const mydata = [
        {id: 1, title: 'first title', description: 'first description'},
        {id: 2, title: 'second title', description: 'second description'},
        {id: 3, title: 'third title', description: 'Third description'},
        {id: 4, title: 'fourth title', description: 'fourth description'},
        {id: 5, title: 'first title', description: 'first description'},
        {id: 6, title: 'second title', description: 'second description'},
        {id: 7, title: 'third title', description: 'Third description'},
        {id: 8, title: 'fourth title', description: 'fourth description'},
        {id: 9, title: 'first title', description: 'first description'},
        {id: 10, title: 'second title', description: 'second description'},
        {id: 11, title: 'third title', description: 'Third description'},
        {id: 12, title: 'fourth title', description: 'fourth description'},

    ]

    const renderData = ({item}) => {
        return (
            <Card style={{padding: 10, margin: 10, backgroundColor: 'red'}}>
            <Text style={{fontSize: 25}}>{item.title}</Text>
            <Text style={{fontSize: 20}}>{item.description}</Text>
            </Card>
        )
        
    }

    return (
        <FlatList
        data = {mydata}
        renderItem = {(item) => {
            return renderData(item)
        }}
        keyExtractor={(item) => `${item.id}`}
        
        />

        
    )
}

export default ReactFlat
