import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ArrowDown from '../../assets/svgs/ArrowDown'

const Homescreen = () => {
      return (
            <SafeAreaView style={{
                  flex: 1,
                  margin: 20,
            }}>
                  <Text style={{
                        fontSize: 18,
                        fontWeight: '500',
                        marginBottom: 20,
                  }}>All Plants</Text>
                  <Text style={{
                        fontSize: 32,
                        fontWeight: '500',
                  }}>Plant</Text>
                  <Text style={{
                        fontSize: 32,
                        fontWeight: '500',
                        marginBottom: 15,
                  }}>is for room</Text>
                  <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                  }}>
                        <Text style={{
                              opacity: 0.50,
                              color: 'black',
                              fontSize: 12,
                              fontWeight: '500',
                              lineHeight: 20
                        }}>Popularity</Text>
                        <ArrowDown style={{
                              marginTop: 8,
                        }} />
                  </View>
            </SafeAreaView>
      )
}

export default Homescreen

const styles = StyleSheet.create({})