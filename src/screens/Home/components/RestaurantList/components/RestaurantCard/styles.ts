import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 100%;
    flex-direction: row;
    align-items: center;
    margin-bottom: ${theme.spacings.large};
  `}
`

export const Image = styled.Image`
  width: ${RFValue(62)}px;
  height: ${RFValue(62)}px;
  border-radius: ${RFValue(31)}px;
`

export const Content = styled.View`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.small};
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(14)}px;
    font-family: ${theme.fonts.primary500};
    color: ${theme.colors.black};
    line-height: 18px;
  `}
`

export const DetailsContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

type DetailTextProps = {
  color?: 'gray' | 'green'
}

export const DetailText = styled.Text<DetailTextProps>`
  ${({ theme, color = 'gray' }) => css`
    text-align: center;
    font-size: ${RFValue(12)}px;
    font-family: ${theme.fonts.primary400};
    color: ${theme.colors[color]};
  `}
`

export const DotSeparator = styled.View`
  ${({ theme }) => css`
    width: ${RFValue(4)}px;
    height: ${RFValue(4)}px;
    border-radius: ${RFValue(2)}px;

    margin: 0 ${theme.spacings.small}

    background-color: ${theme.colors.gray};
  `}
`
