import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    padding: 0 ${theme.spacings.large};
    background: rgba(0, 0, 0, 0.7);
  `}
`
export const Content = styled.View`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
  `}
`
export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary500};
    font-size: ${RFValue(22)}px;
    color: ${theme.colors.white};
  `}
`

export const Category = styled.Text`
  ${({ theme }) => css`
    background: ${theme.colors.grayOpacity};
    color: ${theme.colors.white};
    border-radius: ${theme.border.radius.md};

    font-family: ${theme.fonts.primary500};
    font-size: ${RFValue(12)}px;

    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
    align-self: flex-start;
    margin-top: ${theme.spacings.small};
  `}
`

export const DetailsContainer = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    margin-top: ${theme.spacings.medium};
  `}
`
