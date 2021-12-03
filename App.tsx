import React, { useEffect } from 'react'

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium
} from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading'
import Toast from 'react-native-toast-message'
import { ThemeProvider } from 'styled-components'

import { AuthProvider } from '@/hooks'
import { Routes } from '@/routes'
import { theme } from '@/styles/theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium
  })

  if (!fontsLoaded) return <AppLoading />

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>

      <Toast />
    </ThemeProvider>
  )
}
