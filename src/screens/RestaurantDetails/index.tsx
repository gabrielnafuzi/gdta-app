import React from 'react'

import { Text } from 'react-native'

import { StatusBar } from 'expo-status-bar'

import { RestaurantDetailsHeader } from './components'
import * as S from './styles'

export const RestaurantDetails = () => {
  return (
    <S.Container>
      <StatusBar style="light" />

      <RestaurantDetailsHeader />

      <S.BodyContainer>
        <Text>Tradicionais</Text>
      </S.BodyContainer>
    </S.Container>
  )
}
