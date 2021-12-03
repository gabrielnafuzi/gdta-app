import React from 'react'

import { Text } from 'react-native'

import { Logo } from '@/components/common'

import * as S from './styles'

export const HomeScreen = () => {
  return (
    <S.Container>
      <S.Header>
        <Logo />
      </S.Header>
      <Text style={{ fontSize: 40 }}>Home</Text>
    </S.Container>
  )
}
