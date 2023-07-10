import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TabMain from './src/navigation/TabMain'
import { NavigationContainer } from '@react-navigation/native'
import HomeStack from './src/navigation/stacks/HomeStack'

const App = () => {
  return (
    <>
      <NavigationContainer>
        <TabMain />
      </NavigationContainer>

    </>
  )
}

export default App

const styles = StyleSheet.create({})