import React from 'react'

import { Feather } from '@expo/vector-icons'
import { BorderlessButtonProps } from 'react-native-gesture-handler'
import { useTheme } from 'styled-components'

import * as S from './styles'

type BackButtonProps = BorderlessButtonProps

export const BackButton = (props: BackButtonProps) => {
  const theme = useTheme()

  return (
    <S.Container {...props}>
      <Feather name="chevron-left" size={34} color={theme.colors.primary} />
    </S.Container>
  )
}
