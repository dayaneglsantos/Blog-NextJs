'use client'
import styled from 'styled-components'

export const ArticleMetaContainer = styled.div`
  font-style: italic;
  margin-top: 12px;

  p {
    color: ${({ theme }) => theme.colors.secondaryFont};
  }
  .after::after {
    content: ', ';
  }

  .after:last-child::after {
    content: '';
  }
`
