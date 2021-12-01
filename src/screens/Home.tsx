import React, { useState } from 'react'

import { View } from 'react-native'

import LogoSvg from '@assets/logo.svg'
import { RFValue } from 'react-native-responsive-fontsize'

import { Button, Input, PasswordInput } from '@/components'

export const HomeScreen = () => {
  const [email, setEmail] = useState('')

  return (
    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 26 }}>
      <LogoSvg width={RFValue(47)} height={RFValue(55)} />

      <Input
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <PasswordInput placeholder="Password" />

      <Button
        title="Entrar"
        onPress={() => {
          console.log('pressed')
        }}
      />
    </View>
  )
}
