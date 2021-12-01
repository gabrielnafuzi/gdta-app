import React from 'react'

import { ActivityIndicator } from 'react-native'

import { RectButtonProps } from 'react-native-gesture-handler'
import { useTheme } from 'styled-components'

import * as S from './styles'

export type ButtonProps = {
  title: string
  loading?: boolean
} & RectButtonProps

export const Button = ({
  title,
  loading = false,
  enabled = true,
  onPress,
  ...props
}: ButtonProps) => {
  const theme = useTheme()

  return (
    <S.Container
      onPress={onPress}
      enabled={enabled && !loading}
      {...props}
      isDisabled={!enabled || loading}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.white} />
      ) : (
        <S.Title>{title}</S.Title>
      )}
    </S.Container>
  )
}
