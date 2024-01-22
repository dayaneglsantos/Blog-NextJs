'use client'
import styled from 'styled-components'
import { Title } from '../Heading/styles'

export const PostCardContainer = styled.div`
  max-width: 32rem;
  width: 100%;
  height: 440px;

  &:hover {
    ${Title} {
      filter: brightness(1);
    }
    & a:nth-child(1) {
      filter: brightness(0.5);
    }
  }

  ${Title} {
    font-size: 1.2rem;
    margin-bottom: 8px;
    text-align: start;

    &:hover {
      filter: brightness(1);
    }
  }

  p {
    font-size: 0.9rem;
    text-align: justify;
  }

  & a:nth-child(1) {
    &:hover {
      filter: brightness(0.5);
    }
  }
`

export const PostCardContent = styled.div`
  padding: 8px 12px;
`

export const Cover = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`
