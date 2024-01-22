'use client'
import styled from 'styled-components'
import { HeadingProps } from '.'
import theme from '../../Styles/theme'

export const Title = styled.h1<HeadingProps>`
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};
  text-align: center;
  color: ${({ theme }) => theme.colors.cyan};
  font-size: ${(props) =>
    props.size === 'small'
      ? theme.sizes.small
      : props.size === 'medium'
        ? theme.sizes.medium
        : props.size === 'big'
          ? theme.sizes.big
          : props.size === 'huge'
            ? theme.sizes.huge
            : ''};
`
