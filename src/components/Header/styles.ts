'use client'
import styled, { keyframes } from 'styled-components'
import theme from '../../Styles/theme'
import { Title } from '../Heading/styles'

type Props = {
  showText: boolean
}

const showDetails = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%)
  }
  to {
    opacity: 1;
    transform: translateX(0)
    }
`

export const HeaderContainer = styled.div`
  color: ${({ theme }) => theme.colors.font};
  padding: 26px 0 28px;
  display: flex;
  flex-direction: column;
  gap: 18px;

  ${Title} {
    color: ${({ theme }) => theme.colors.cyan};
  }
`
export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 24px;
  max-width: 42rem;
  margin: 0 auto;
  overflow: hidden;
  transition: all 0.5s ease-in-out;

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    padding: 0 24px;
  }

  p {
    margin-top: 8px;
    font-size: 14px;
  }

  svg {
    font-size: 18px;
    cursor: pointer;
    margin-left: -18px;
  }
`

export const Details = styled.header<Props>`
  display: ${(props) => (props.showText ? 'flex' : 'none')};
  flex-direction: column;
  animation: ${showDetails} 0.5s;
`
