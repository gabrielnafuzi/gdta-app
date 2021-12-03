import React from 'react'

import {
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  View
} from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

import { Logo } from '@/components'

import { LoginForm } from './components'
import * as S from './styles'

export const SignInScreen = () => {
  return (
    <S.Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={{ flex: 1 }}>
          <S.InnerContainer>
            <S.Header>
              <Logo />

              <S.Title>Login</S.Title>
            </S.Header>

            <LoginForm />

            <View style={{ flex: 1 }} />
          </S.InnerContainer>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </S.Container>
  )
}
