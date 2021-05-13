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
import ReactPicker from './components/ReactPicker';
import ReactWeb from './components/ReactWeb'
import ReducerHooks from './components/ReducerHooks';
import ReactSync from './components/ReactSync';
import ReactPager from './components/ReactPager';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home'
import Profile from './components/Profile'

const Stack = createStackNavigator();

const myStyles = {
  title: 'Home',
  headerStyle: {
    backgroundColor: 'green'
  }
}

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}  options={myStyles}/>
     
      <Stack.Screen name="Profile" component={Profile} />
     
    </Stack.Navigator>
    
    
  );
}


export default () => {
  return (
  <NavigationContainer>
    <App />
  </NavigationContainer>
  )
}