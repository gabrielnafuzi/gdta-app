import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    align-items: center;
    padding: ${theme.spacings.small} ${theme.spacings.large};
  `}
`

export const Header = styled.View`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxlarge} 0;
    align-items: center;
  `}
`
