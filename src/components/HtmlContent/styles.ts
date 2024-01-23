'use client'
import theme from '../../Styles/theme'
import styled from 'styled-components'

export const HtmlContainer = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 80%;
  }

  p {
    margin: 18px 0;
    text-align: justify;
  }

  img {
    width: 100%;
    object-fit: cover;
  }

  .image-style-side {
    width: 50%;
    float: right;
    margin: 12px 0 12px 24px;

    img {
      width: 100%;
    }

    @media (max-width: 768px) {
      width: 100%;
      float: none;
      margin: 0;
    }
  }

  figcaption {
    padding: 6px;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.secondaryFont};
    border-bottom: 1px solid ${theme.colors.gray};
  }

  pre {
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.background};
    padding: 18px;
    margin: 16px 0;
    overflow: auto;
  }

  ul,
  ol {
    margin: 24px 0;
  }

  blockquote p {
    border-left: 2px solid #06b6d4;
    padding: 12px 24px;
    color: ${theme.colors.gray};
    font-size: 14px;
    font-style: italic;
    margin: 14px 0;
  }

  .table {
    width: 100%;
    overflow: hidden;
    overflow-x: auto;

    table {
      width: 100%;
      border-collapse: collapse;

      td,
      th {
        border: 1px solid #eeeeee;
        padding: 4px;
      }
    }
  }
`
