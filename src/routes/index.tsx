import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

export const Routes = () => {
  const isAuthenticated = false

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  )
}
