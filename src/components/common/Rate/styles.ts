import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

import { RateProps } from '.'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`

type TextProps = Pick<RateProps, 'textColor'>

export const Text = styled.Text<TextProps>`
  ${({ theme, textColor = 'orange' }) => css`
    color: ${theme.colors[textColor]};
    font-family: ${theme.fonts.primary500};
    font-size: ${RFValue(12)}px;
    line-height: ${RFValue(14)}px;

    margin-left: ${theme.spacings.xxsmall};
  `}
`
