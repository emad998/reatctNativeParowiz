import React, { useEffect, useState } from 'react'
import { Text, View, FlatList } from 'react-native'
import {Card} from 'react-native-paper'
import axios from 'axios'

function EffectHooks() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    const renderData2 = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(resp => {
            setPosts(resp.data)
            setLoading(false)
        })
        .catch(error => console.log(err))
    }

    useEffect(() => {
        renderData2()
    }, [])

    const renderData = (item) => {
        return (
            <Card style={{padding: 30, margin: 10, backgroundColor: 'red'}}>
                <Text style={{fontSize: 30}}>{item.title}</Text>
                <Text style={{fontSize: 20}}>{item.body}</Text>
            </Card>
        )
    }


    return (
        <FlatList 
        data = {posts}
        renderItem = {({item}) => {
            return renderData(item)
        }}
        keyExtractor = {item => `${item.id}`}
        onRefresh = {() => renderData2()}
        refreshing = {loading}
        
        />
    )
}

export default EffectHooks
