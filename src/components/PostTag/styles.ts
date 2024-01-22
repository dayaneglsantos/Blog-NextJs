'use client'
import styled from 'styled-components'

export const PostTagContainer = styled.div`
  margin: 16px auto;
  max-width: 600px;
  width: 100%;
  color: ${({ theme }) => theme.colors.secondaryFont};

  a::after {
    content: ', ';
  }
  a::before {
    content: ' ';
  }
  a:last-child::after {
    content: '';
  }
`
