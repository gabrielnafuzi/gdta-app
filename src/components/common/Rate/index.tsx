import React from 'react'

import { ViewProps } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'

import * as S from './styles'

export type RateProps = {
  rate: string
  quantity?: number
  textColor?: 'orange' | 'white'
} & Pick<ViewProps, 'style'>

export const Rate = ({
  rate,
  quantity,
  textColor = 'orange',
  style
}: RateProps) => {
  const theme = useTheme()

  return (
    <S.Container style={style}>
      <MaterialIcons
        name="star"
        size={14}
        style={{ marginBottom: RFValue(3) }}
        color={theme.colors.orange}
      />

      <S.Text textColor={textColor}>{rate}</S.Text>

      {quantity !== undefined && (
        <S.Text textColor={textColor}>({quantity})</S.Text>
      )}
    </S.Container>
  )
}
