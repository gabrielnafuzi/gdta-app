import React, { useState } from 'react'

import { View, Text } from 'react-native'

import { Input, PasswordInput } from '@/components'

export const HomeScreen = () => {
  const [email, setEmail] = useState('')

  return (
    <View
      style={{ width: 180, alignItems: 'center', justifyContent: 'center' }}
    >
      <Input
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <Text>{email}</Text>
      <PasswordInput />
    </View>
  )
}
