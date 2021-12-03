import { BorderlessButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

export const Container = styled(BorderlessButton)`
  ${({ theme }) => css`
    width: ${RFValue(42)}px;
    height: ${RFValue(42)}px;
    border-radius: ${RFValue(21)}px;
    justify-content: center;
    align-items: center;

    background-color: ${theme.colors.white};
  `}
`
