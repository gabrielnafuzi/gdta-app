import React from 'react'

import { ActivityIndicator, ActivityIndicatorProps } from 'react-native'

import { useTheme } from 'styled-components'

export const Spinner = (props: ActivityIndicatorProps) => {
  const theme = useTheme()

  return <ActivityIndicator color={theme.colors.primary} size={36} {...props} />
}
