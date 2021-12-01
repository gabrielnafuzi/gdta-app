import React from 'react'

import { View } from 'react-native'
import styled from 'styled-components/native'

const StyledView = styled.View`
  background-color: papayawhip;
`

const StyledText = styled.Text`
  color: palevioletred;
`

export const HomeScreen = () => {
  return (
    <View>
      <StyledView>
        <StyledText>Hello World!</StyledText>
      </StyledView>
    </View>
  )
}
