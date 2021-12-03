import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const BodyContainer = styled.View`
  ${({ theme }) => css`
    flex: 1;
    width: 100%;
    padding: 0 ${theme.spacings.large};
  `}
`
