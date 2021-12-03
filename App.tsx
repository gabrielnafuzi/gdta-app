import React, { useEffect } from 'react'

import { LogBox } from 'react-native'

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium
} from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading'
import Toast from 'react-native-toast-message'
import { QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'styled-components'

import { AuthProvider } from '@/hooks'
import { Routes } from '@/routes'
import { queryClient } from '@/services'
import { theme } from '@/styles/theme'

LogBox.ignoreLogs([
  'Setting a timer for a long period of time, i.e. multiple minutes',
  'VirtualizedLists should never be nested'
]) // TODO: Remove when fixed

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium
  })

  if (!fontsLoaded) return <AppLoading />

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Routes />
        </AuthProvider>

        <Toast />
      </ThemeProvider>
    </QueryClientProvider>
  )
}
