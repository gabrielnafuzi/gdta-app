import React from 'react'

import { ViewProps } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'

import * as S from './styles'

type RestaurantDetailsDeliveryFeeProps = {
  deliveryFee: string
} & Pick<ViewProps, 'style'>

export const RestaurantDetailsDeliveryFee = ({
  deliveryFee,
  style
}: RestaurantDetailsDeliveryFeeProps) => {
  const theme = useTheme()

  return (
    <S.Container style={style}>
      <MaterialCommunityIcons
        name="moped"
        size={14}
        style={{ marginBottom: RFValue(3) }}
        color={theme.colors.white}
      />

      <S.Text>{deliveryFee}</S.Text>
    </S.Container>
  )
}
