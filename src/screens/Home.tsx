import React, { useState } from 'react'

import { View } from 'react-native'

import { Button, Input, PasswordInput } from '@/components'

export const HomeScreen = () => {
  const [email, setEmail] = useState('')

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 26
      }}
    >
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
