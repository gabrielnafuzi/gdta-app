import React, { useCallback, useState } from 'react'

import { TextInputProps } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useTheme } from 'styled-components'

import * as S from './styles'

type PasswordInputProps = {
  value?: string
} & TextInputProps

export const PasswordInput = ({ value, ...props }: PasswordInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const theme = useTheme()

  const handleTogglePasswordVisibility = useCallback(() => {
    setIsPasswordVisible((prevState) => !prevState)
  }, [])

  const handleOnFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleOnBlur = useCallback(() => {
    setIsFocused(false)
  }, [])

  return (
    <S.Container>
      <S.InputText
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        value={value}
        secureTextEntry={!isPasswordVisible}
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="default"
        {...props}
        isFocused={isFocused}
      />

      <BorderlessButton onPress={handleTogglePasswordVisibility}>
        <S.IconContainer isFocused={isFocused}>
          <Feather
            name={isPasswordVisible ? 'eye' : 'eye-off'}
            size={24}
            color={isFocused ? theme.colors.primary : theme.colors.gray}
          />
        </S.IconContainer>
      </BorderlessButton>
    </S.Container>
  )
}
