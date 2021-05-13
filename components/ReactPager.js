import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import PagerView from 'react-native-pager-view'

function ReactPager() {
    return (
        <PagerView style={styles.pagerView} initialPage = {0}>
            <View key="1">
                <Image
                style = {{width: '100%', height: 200, marginTop: 50}}
                    source = {require('../img/cake1.jpg')}
                />

            </View>
            <View key="2">
                <Image
                style = {{width: '100%', height: 200, marginTop: 50}}
                    source = {require('../img/cake2.jpg')}
                />

            </View>
            <View key="3">
                <Image
                style = {{width: '100%', height: 200, marginTop: 50}}
                    source = {require('../img/cake3.jpg')}
                />

            </View>


        </PagerView>
    )
}

const styles = StyleSheet.create({
    pagerView: {
        flex: 1
    }
})


export default ReactPager
