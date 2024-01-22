'use client'
import styled from 'styled-components'
import theme from '../../Styles/theme'
import { MenuLinkContainer } from '../MenuLink/styles'
import { ThemeContainer } from '../Theme/styles'

import { Image } from '../Logo/styles'

export const MenuButton = styled.div`
  display: none;
  position: fixed;
  top: 12px;
  right: 12px;
  z-index: 2;

  .burger {
    position: relative;
    width: 40px;
    height: 25px;
    background: transparent;
    cursor: pointer;
    display: block;

    & input {
      display: none;
    }

    & span {
      display: block;
      position: absolute;
      height: 4px;
      width: 100%;
      border-radius: 9px;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      transition: 0.25s ease-in-out;
      background-color: ${({ theme }) => theme.colors.secondaryCyan};
    }

    & span:nth-of-type(1) {
      top: 0px;
      transform-origin: left center;
    }

    & span:nth-of-type(2) {
      top: 50%;
      transform: translateY(-50%);
      transform-origin: left center;
    }

    & span:nth-of-type(3) {
      top: 100%;
      transform-origin: left center;
      transform: translateY(-100%);
    }

    & input:checked ~ span:nth-of-type(1) {
      transform: rotate(45deg);
      top: 0px;
      left: 5px;
    }

    & input:checked ~ span:nth-of-type(2) {
      width: 0%;
      opacity: 0;
    }

    & input:checked ~ span:nth-of-type(3) {
      transform: rotate(-45deg);
      top: 28px;
      left: 5px;
    }
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  overflow: hidden;
`
export const MenuMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  height: 100%;
  position: fixed;
  z-index: 1;
  right: 0;
  top: 0;
  bottom: 0;
  width: 75%;
  justify-content: center;
  align-items: center;

  ${Image} {
    height: 7rem;
    width: 7rem;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  ${MenuLinkContainer} {
    color: ${({ theme }) => theme.colors.font};
  }

  ${ThemeContainer} {
    bottom: 64px;
    right: auto;
    top: auto;
    margin: 0;
  }
`
