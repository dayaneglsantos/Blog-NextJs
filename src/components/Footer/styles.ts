'use client'
import theme from '../../Styles/theme'
import styled from 'styled-components'

export const FooterContainer = styled.footer`
  text-align: center;
  border-top: 1px solid ${theme.colors.gray};
  padding: 14px 0;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  color: ${({ theme }) => theme.colors.dark};
  font-size: 12px;
`
