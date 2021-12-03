import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    align-items: center;
    padding: ${theme.spacings.small} ${theme.spacings.large};
  `}
`

export const Header = styled.View`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxlarge} 0 ${theme.spacings.large};
    align-items: center;
  `}
`

export const ListTitle = styled.Text`
  ${({ theme }) => css`
    width: 100%;
    text-align: center;
    padding-bottom: ${theme.spacings.small};

    color: ${theme.colors.primary};
    font-size: ${RFValue(16)}px;
    font-family: ${theme.fonts.primary500};

    border-bottom-width: 2px;
    border-bottom-color: ${theme.colors.primary};
  `}
`
