import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'
import TabMain from './src/navigation/TabMain'

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