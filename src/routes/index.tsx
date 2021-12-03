import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import AppLoading from 'expo-app-loading'

import { useAuth } from '@/hooks'

import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

export const Routes = () => {
  const { user, isInitializing } = useAuth()

  if (isInitializing) return <AppLoading />

  return (
    <NavigationContainer>
      {user?.id ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  )
}
