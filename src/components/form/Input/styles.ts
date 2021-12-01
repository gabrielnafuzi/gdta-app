import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css, DefaultTheme } from 'styled-components/native'

type InputTextProps = {
  isFocused: boolean
}

const inputTextModifiers = {
  isFocused: (theme: DefaultTheme) => css`
    border: 2px solid ${theme.colors.primary};
  `
}

export const InputText = styled.TextInput<InputTextProps>`
  ${({ theme, isFocused }) => css`
    width: 100%;
    height: 50px;
    margin-bottom: ${theme.spacings.small};
    border-radius: ${theme.border.radius.md};

    background-color: ${theme.colors.grayLight};
    color: ${theme.colors.black};
    font-family: ${theme.fonts.primary500};
    font-size: ${RFValue(16)}px;

    padding: 0 ${theme.spacings.small};

    ${isFocused && inputTextModifiers.isFocused(theme)}
  `}
`
