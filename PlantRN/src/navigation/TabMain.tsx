import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './stacks/HomeStack';
import FavouritesStack from './stacks/FavouritesStack';
import MyPlants from './stacks/MyPlants';
const Tab = createBottomTabNavigator();
const TabMain = () => {
      return (
            <>
                  <Tab.Navigator screenOptions={{
                        headerShown: false,
                        tabBarShowLabel: false,
                  }}>
                        <Tab.Screen name='HomeStack' component={HomeStack}
                              options={{

                              }} />
                        <Tab.Screen name='FavouritesStack' component={FavouritesStack}
                              options={{

                              }} />
                        <Tab.Screen name='MyPlants' component={MyPlants}
                              options={{

                              }} />
                  </Tab.Navigator>
            </>
      )
}

export default TabMain

const styles = StyleSheet.create({})