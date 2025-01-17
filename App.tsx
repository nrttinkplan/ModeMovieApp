import {StyleSheet, View, Text } from 'react-native'
import React from 'react'
import LoginScreen from './screens/LoginScreen'
import SignUpScreen from './screens/SignUpScreen'
import { NavigationContainer } from '@react-navigation/native'
import MyStack from './navigation/Mystack'

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
      </NavigationContainer>
      
  )
}

export default App