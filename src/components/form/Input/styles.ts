import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css, DefaultTheme } from 'styled-components/native'

type ContainerProps = {
  isFocused: boolean
}

const containerModifiers = {
  isFocused: (theme: DefaultTheme) => css`
    border: 2px solid ${theme.colors.primary};
  `
}

export const Container = styled.TextInput<ContainerProps>`
  ${({ theme, isFocused }) => css`
    width: 100%;
    height: ${RFValue(58)}px;
    margin-bottom: ${theme.spacings.small};
    border-radius: ${theme.border.radius.md};

    background-color: ${theme.colors.grayLight};
    color: ${theme.colors.black};
    font-family: ${theme.fonts.primary500};
    font-size: ${RFValue(16)}px;

    padding: 0 ${theme.spacings.medium};

    ${isFocused && containerModifiers.isFocused(theme)}
  `}
`
