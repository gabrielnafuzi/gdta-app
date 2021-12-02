import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css, DefaultTheme } from 'styled-components/native'

import { Input } from '../Input'

type InputTextProps = {
  isFocused: boolean
}

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
`

const inputTextModifiers = {
  isFocused: (theme: DefaultTheme) => css`
    border: 2px solid ${theme.colors.primary};
    border-right-width: 0px;
  `
}

export const InputText = styled(Input)<InputTextProps>`
  ${({ theme, isFocused }) => css`
    flex: 1;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;

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
    width: ${RFValue(50)}px;
    height: ${RFValue(58)}px;
    justify-content: center;
    align-items: center;

    border-top-right-radius: ${theme.border.radius.md};
    border-bottom-right-radius: ${theme.border.radius.md};

    background-color: ${theme.colors.grayLight};

    ${isFocused && iconContainerModifiers.isFocused(theme)}
  `}
`
