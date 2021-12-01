import React from 'react'

import { StyleSheet, View, Text } from 'react-native'
import { ThemeProvider } from 'styled-components'

import { HomeScreen } from '@/screens/Home'
import { theme } from '@/styles/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <HomeScreen />

        <Text>asdas</Text>
      </View>
    </ThemeProvider>
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
