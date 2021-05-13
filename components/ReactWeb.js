import React from 'react'
import { Text, View } from 'react-native'
import { WebView } from 'react-native-webview';

function ReactWeb() {
    return (
        <WebView source={{ uri: 'https://geekscoders.com' }} style={{ marginTop: 20 }} />
    )
}

export default ReactWeb
