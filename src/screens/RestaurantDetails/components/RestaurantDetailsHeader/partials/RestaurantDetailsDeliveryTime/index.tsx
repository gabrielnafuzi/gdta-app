import React from 'react'

import { ViewProps } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'

import * as S from './styles'

type RestaurantDetailsDeliveryTimeProps = {
  deliveryTime: string
} & Pick<ViewProps, 'style'>

export const RestaurantDetailsDeliveryTime = ({
  deliveryTime,
  style
}: RestaurantDetailsDeliveryTimeProps) => {
  const theme = useTheme()

  return (
    <S.Container style={style}>
      <MaterialCommunityIcons
        name="clock"
        size={14}
        style={{ marginBottom: RFValue(3) }}
        color={theme.colors.white}
      />

      <S.Text>{deliveryTime}</S.Text>
    </S.Container>
  )
}
