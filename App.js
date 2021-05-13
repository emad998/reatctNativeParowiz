import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Hello from './components/Hello';
import HelloClass from './components/HelloClass';

export default function App() {
  return (
    <View>
      <Hello name='Emad' lastName='Hanna'/>
      <HelloClass website = "geekcoders.com"/>
    </View>
  );
}
