import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { HomeScreen } from '@/screens'

const { Navigator, Screen } = createStackNavigator()

export const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={HomeScreen} />
    </Navigator>
  )
}
