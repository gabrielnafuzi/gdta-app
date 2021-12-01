import React from 'react'

import { StyleSheet, View, Text } from 'react-native'

import { HomeScreen } from '@/screens/Home'

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />

      <Text>asdas</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
