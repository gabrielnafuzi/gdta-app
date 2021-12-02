import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

export const Container = styled.KeyboardAvoidingView`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.xxlarge} ${theme.spacings.large};
  `}
`

export const InnerContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`

export const LogoWrapper = styled.View`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxlarge} 0;
    align-items: center;
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary500};
    font-size: ${RFValue(42)}px;
    text-align: center;

    margin-bottom: ${theme.spacings.xxlarge};
  `}
`
