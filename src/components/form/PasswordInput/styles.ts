import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css, DefaultTheme } from 'styled-components/native'

type InputTextProps = {
  isFocused: boolean
}

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 100%;
`

const inputTextModifiers = {
  isFocused: (theme: DefaultTheme) => css`
    border: 2px solid ${theme.colors.primary};
    border-right-width: 0px;
  `
}

export const InputText = styled.TextInput<InputTextProps>`
  ${({ theme, isFocused }) => css`
    /* width: 100%; */
    flex: 1;
    height: 50px;
    margin-bottom: ${theme.spacings.small};
    border-top-left-radius: ${theme.border.radius.md};
    border-bottom-left-radius: ${theme.border.radius.md};

    background-color: ${theme.colors.grayLight};
    color: ${theme.colors.black};
    font-family: ${theme.fonts.primary500};
    font-size: ${RFValue(16)}px;

    padding-left: ${theme.spacings.small};

    ${isFocused && inputTextModifiers.isFocused(theme)}
  `}
`

const iconContainerModifiers = {
  isFocused: (theme: DefaultTheme) => css`
    border: 2px solid ${theme.colors.primary};
    border-left-width: 0px;
  `
}

export const IconContainer = styled.View<InputTextProps>`
  ${({ theme, isFocused }) => css`
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;

    border-top-right-radius: ${theme.border.radius.md};
    border-bottom-right-radius: ${theme.border.radius.md};

    background-color: ${theme.colors.grayLight};

    ${isFocused && iconContainerModifiers.isFocused(theme)}
  `}
`
