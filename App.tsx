import React from 'react'

import { StyleSheet, View, Text } from 'react-native'

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium
} from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading'
import { ThemeProvider } from 'styled-components'

import { HomeScreen } from '@/screens/Home'
import { theme } from '@/styles/theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium
  })

  if (!fontsLoaded) return <AppLoading />

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
