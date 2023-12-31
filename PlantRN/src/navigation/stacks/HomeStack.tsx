import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from '../screens/Homescreen';
import PlantDetail from '../screens/PlantDetail';
const Home = createNativeStackNavigator();

const HomeStack = () => {
      return (
            <Home.Navigator screenOptions={{ headerShown: false }}>
                  <Home.Screen name="homescreen" component={Homescreen} />
                  <Home.Screen name="plantdetail" component={PlantDetail} />
            </Home.Navigator>
      )
}

export default HomeStack

const styles = StyleSheet.create({})