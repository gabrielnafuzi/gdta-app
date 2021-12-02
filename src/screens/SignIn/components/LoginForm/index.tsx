import React, { useState } from 'react'

import { View } from 'react-native'

import { Button, Input, PasswordInput } from '@/components'

export const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={{ width: '100%' }}>
      <Input
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        textContentType="emailAddress"
        autoCompleteType="off"
        value={email}
        onChangeText={setEmail}
      />

      <PasswordInput
        placeholder="Senha"
        returnKeyType="go"
        value={password}
        onChangeText={setPassword}
        textContentType="password"
        autoCompleteType="off"
      />

      <Button
        enabled={!!email && !!password}
        title="Entrar"
        onPress={() => {
          console.log('pressed')
        }}
        style={{ marginTop: 14 }}
      />
    </View>
  )
}
