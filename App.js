import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Hello from './components/Hello';
import HelloClass from './components/HelloClass';
import StateClass from './components/StateClass'
import UseStateHooks from './components/UseStateHooks';

export default function App() {
  return (
    <View>
      <UseStateHooks />
    </View>
  );
}
