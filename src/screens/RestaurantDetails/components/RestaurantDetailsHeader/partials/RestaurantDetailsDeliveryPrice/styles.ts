import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.fonts.primary500};
    font-size: ${RFValue(12)}px;
    line-height: ${RFValue(14)}px;

    margin-left: ${theme.spacings.xxsmall};
  `}
`
