import React, { useCallback, useState } from 'react'

import { View } from 'react-native'

import Toast from 'react-native-toast-message'

import { Button, Input, PasswordInput } from '@/components'
import { signIn } from '@/services/auth'

export const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = useCallback(async () => {
    setIsSubmitting(true)

    const { data, error } = await signIn({ email, password })

    setIsSubmitting(false)

    if (error) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: `Ops... ${error} 🙁`,
        text2: 'Tente novamente com outro email ou senha.',
        visibilityTime: 5000,
        topOffset: 50
      })

      return
    }

    Toast.show({ type: 'success', text1: 'Login realizado com sucesso! 😎' })
  }, [email, password])

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
        loading={isSubmitting}
        title="Entrar"
        onPress={handleSubmit}
        style={{ marginTop: 14 }}
      />
    </View>
  )
}
