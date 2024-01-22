'use client'
import theme from '../../Styles/theme'
import styled from 'styled-components'

export const MenuContainer = styled.nav`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  padding: 14px 150px;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(0, 139, 139, 1)
    );
  }
  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`

export const MenuLinks = styled.ul`
  display: flex;
  justify-content: center;
  gap: 48px;
  list-style: none;
`
