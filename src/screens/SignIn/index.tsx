import React from 'react'

import {
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  View
} from 'react-native'

import LogoSvg from '@assets/logo.svg'
import { RFValue } from 'react-native-responsive-fontsize'
import { SafeAreaView } from 'react-native-safe-area-context'

import { LoginForm } from './components'
import * as S from './styles'

export const SignInScreen = () => {
  return (
    <S.Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={{ flex: 1 }}>
          <S.InnerContainer>
            <S.LogoWrapper>
              <LogoSvg width={RFValue(50)} height={RFValue(58)} />
            </S.LogoWrapper>

            <S.Title>Login</S.Title>

            <LoginForm />

            <View style={{ flex: 1 }} />
          </S.InnerContainer>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </S.Container>
  )
}
