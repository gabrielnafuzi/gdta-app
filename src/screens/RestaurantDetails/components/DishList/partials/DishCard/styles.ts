import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css, DefaultTheme } from 'styled-components/native'

import { DishCardProps } from '.'

type ContainerProps = Pick<DishCardProps, 'isLastItem'>

const containerModifiers = {
  isLastItem: (theme: DefaultTheme) => css`
    border-bottom-width: 1px;
    border-bottom-color: ${theme.colors.grayLight};
  `
}

export const Container = styled.View<ContainerProps>`
  ${({ theme, isLastItem }) => css`
    width: 100%;
    border-top-width: 1px;
    border-top-color: ${theme.colors.grayLight};

    padding: ${theme.spacings.medium} 0;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    ${isLastItem && containerModifiers.isLastItem(theme)}
  `}
`

export const Content = styled.View`
  max-width: 74%;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(16)}px;
    font-family: ${theme.fonts.primary400};
    color: ${theme.colors.black};
  `}
`

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(12)}px;
    font-family: ${theme.fonts.primary400};
    color: ${theme.colors.gray};
  `}
`

export const Price = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(14)}px;
    font-family: ${theme.fonts.primary400};
    color: ${theme.colors.black};

    margin-top: ${theme.spacings.xsmall};
  `}
`

export const Image = styled.Image`
  width: ${RFValue(90)}px;
  height: ${RFValue(90)}px;
  border-radius: ${RFValue(4)}px;
`
