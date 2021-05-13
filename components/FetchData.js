import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import axios from 'axios'
import {Card} from 'react-native-paper'


class FetchData extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(resp => {
            this.setState({posts: resp.data})
        })
        .catch(error => console.log(err))
    }
    
    renderData = (item) => {
        return (
            <Card style={{padding: 30, margin: 10, backgroundColor: 'red'}}>
                <Text style={{fontSize: 30}}>{item.title}</Text>
                <Text style={{fontSize: 30}}>{item.body}</Text>

            </Card>
        )
    }


    render() {
        return (
            <FlatList 
            data = {this.state.posts}
            renderItem = {({item}) => {
                return this.renderData(item)
            }}
            keyExtractor = {item => `${item.id}`}
            />
        )
    }
}


export default FetchData