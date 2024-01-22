'use client'
import styled from 'styled-components'

export const MenuLinkContainer = styled.a`
  font-weight: bold;
  padding: 8px 12px;
  transition: all 0.3s ease-in-out;
  position: relative;
  cursor: pointer;
  filter: blur(0.5px);
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondaryCyan};

  &:hover {
    filter: brightness(1);
    filter: blur(0);
  }

  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.font};
    transition: transform 0.3s ease-out;
  }

  &::before {
    top: 50%;
    right: 0;
    transform: scaleX(0);
    transform-origin: right;
  }

  &::after {
    bottom: 50%;
    left: 0;
    transform: scaleX(0);
    transform-origin: left;
  }

  & > span::before,
  & > span::after {
    content: '';
    position: absolute;
    width: 1px;
    height: 8px;
    background-color: ${({ theme }) => theme.colors.font};
    transition: transform 0.3s ease-out;
  }

  & > span::before {
    left: 50%;
    bottom: 0;
    transform: scaleY(0);
    transform-origin: bottom;
  }
  & > span::after {
    right: 50%;
    top: 0;
    transform: scaleY(0);
    transform-origin: top;
  }

  &:hover::after,
  &:hover::before,
  &:hover > span::after,
  &:hover > span::before {
    transform: scaleX(1) scaleY(1);
  }
`
