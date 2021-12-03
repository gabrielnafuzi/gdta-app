import React from 'react'

import { ViewProps } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'

import * as S from './styles'

type RestaurantDetailsDeliveryPriceProps = {
  deliveryPrice: string
} & Pick<ViewProps, 'style'>

export const RestaurantDetailsDeliveryPrice = ({
  deliveryPrice,
  style
}: RestaurantDetailsDeliveryPriceProps) => {
  const theme = useTheme()

  return (
    <S.Container style={style}>
      <MaterialCommunityIcons
        name="moped"
        size={14}
        style={{ marginBottom: RFValue(3) }}
        color={theme.colors.white}
      />

      <S.Text>{deliveryPrice}</S.Text>
    </S.Container>
  )
}
