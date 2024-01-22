'use client'
import styled from 'styled-components'
import theme from '../../Styles/theme'

export const Container = styled.div`
  padding: 24px 0 48px;
  min-height: calc(100vh - (260px + 46px + 46px));
`

export const GridContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  padding: 0 32px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.2rem;
  margin: 0 auto;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    width: 90%;
    padding: 24px 0;
  }
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    width: 90%;
  }
`
export const NoPostFound = styled.p`
  font-size: 18px;
  text-align: center;
`
export const ButtonLoadPosts = styled.button`
  padding: 6px;
  background-color: ${({ theme }) => theme.colors.blackAndWhite};
  border: none;
  color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  display: block;
  margin: 0 auto;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    filter: brightness(85%);
  }

  &:disabled {
    background-color: ${theme.colors.gray};
  }
`

export const SearchText = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.font};
  margin-bottom: 24px;

  span {
    font-style: italic;
  }
`
