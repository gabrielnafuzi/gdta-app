import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css, DefaultTheme } from 'styled-components/native'

type ContainerProps = {
  isFocused: boolean
}

const containerModifiers = {
  isFocused: (theme: DefaultTheme) => css`
    border-bottom-width: 3px;
    border-bottom-color: ${theme.colors.primary};
  `
}

export const Container = styled.View<ContainerProps>`
  ${({ theme, isFocused }) => css`
    flex-direction: row;
    margin-top: ${theme.spacings.large};

    border-bottom-left-radius: ${theme.border.radius.lg};
    border-bottom-right-radius: ${theme.border.radius.lg};

    ${isFocused && containerModifiers.isFocused(theme)}
  `}
`

export const IconContainer = styled.View`
  ${({ theme }) => css`
    height: ${RFValue(56)}px;
    width: ${RFValue(56)}px;
    justify-content: center;
    align-items: center;

    border-top-left-radius: ${theme.border.radius.lg};
    border-bottom-left-radius: ${theme.border.radius.md};

    background-color: ${theme.colors.grayLight};
  `}
`

export const InputText = styled.TextInput`
  ${({ theme }) => css`
    flex: 1;

    background-color: ${theme.colors.grayLight};
    color: ${theme.colors.black};
    font-family: ${theme.fonts.primary500};
    font-size: ${RFValue(16)}px;

    border-top-right-radius: ${theme.border.radius.lg};
    border-bottom-right-radius: ${theme.border.radius.md};

    padding-right: ${theme.spacings.medium};
  `}
`
