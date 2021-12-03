import React from 'react'

import { NavigationProp } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { RestaurantsScreen, RestaurantDetails } from '@/screens'

export type AppStackParamList = {
  Restaurants: undefined
  RestaurantDetails: { restaurantId: string }
}

export type RestaurantDetailsNavigationProp = NavigationProp<
  AppStackParamList,
  'RestaurantDetails'
>

const { Navigator, Screen } = createStackNavigator<AppStackParamList>()

export const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Restaurants" component={RestaurantsScreen} />
      <Screen name="RestaurantDetails" component={RestaurantDetails} />
    </Navigator>
  )
}
