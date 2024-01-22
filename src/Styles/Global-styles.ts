'use client'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  body{
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.background}

  }


a {
  text-decoration: none;
  color: ${({ theme }) => theme.colors.cyan}
}

a:hover {
    filter: brightness(0.5);
  }


h1, h2, h3, h4, h5, h6 {
  color: ${({ theme }) => theme.colors.cyan}
}


    p,
    ol,
    ul,
    div {
      color: ${({ theme }) => theme.colors.font}
    }

    .figcaption {
      background-color: ${({ theme }) => theme.colors.font};
    }




`

export default GlobalStyles
