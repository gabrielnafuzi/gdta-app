import React, { useCallback, useState } from 'react'

import { TextInputProps } from 'react-native'

import { useTheme } from 'styled-components'

import * as S from './styles'

type InputProps = {
  value?: string
} & TextInputProps

export const Input = ({ value, ...props }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false)

  const theme = useTheme()

  const handleOnBlur = useCallback(() => {
    setIsFocused(false)
  }, [])

  const handleOnFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  return (
    <S.InputText
      value={value}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      selectionColor={theme.colors.primary}
      {...props}
      isFocused={isFocused}
    />
  )
}
