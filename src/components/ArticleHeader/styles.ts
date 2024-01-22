'use client'
import styled from 'styled-components'
import theme from '../../Styles/theme'

export const HeaderContainer = styled.header`
  color: ${({ theme }) => theme.colors.font};
  margin: 32px auto;
  padding-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  max-width: 700px;
  width: 100%;

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 80%;
  }

  > p {
    margin: 24px 0;
    text-align: center;
  }

  img {
    height: 384px;
    width: 100%;
    object-fit: cover;

    @media (max-width: ${theme.breakpoints.tablet}) {
      height: 280px;
    }
  }
`
