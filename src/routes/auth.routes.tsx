import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { SignInScreen } from '@/screens'

const { Navigator, Screen } = createStackNavigator()

export const AuthRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="SignIn" component={SignInScreen} />
    </Navigator>
  )
}
