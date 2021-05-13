import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import CreateCard from './components/CreateCard';
import FetchData from './components/FetchData';
import FlexLayout from './components/FlexLayout';
import FloatingButton from './components/FloatingButton';
import Hello from './components/Hello';
import HelloClass from './components/HelloClass';
import ReactFlat from './components/ReactFlat';
import StateClass from './components/StateClass'
import UseStateHooks from './components/UseStateHooks';
import EffectHooks from './components/EffectHooks'
import ReactImage from './components/ReactImage';
import ReactInput from './components/ReactInput'

export default function App() {
  return (
   
      <View>
        <ReactInput />
      </View>
    
  );
}
