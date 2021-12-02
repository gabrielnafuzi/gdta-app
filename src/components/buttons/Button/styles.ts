import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

type ContainerProps = {
  isDisabled?: boolean
}

const containerModifiers = {
  isDisabled: () => css`
    opacity: 0.5;
  `
}

export const Container = styled(RectButton)<ContainerProps>`
  ${({ theme, isDisabled }) => css`
    width: 100%;
    height: ${RFValue(56)}px;

    padding: 0 ${theme.spacings.medium};
    justify-content: center;
    align-items: center;
    border-radius: ${theme.border.radius.lg};
    background-color: ${theme.colors.green};

    ${isDisabled && containerModifiers.isDisabled()}
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary500};
    font-size: ${RFValue(16)}px;
    color: ${theme.colors.white};
  `}
`
