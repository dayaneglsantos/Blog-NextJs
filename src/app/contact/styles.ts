'use client'
import styled from 'styled-components'

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  align-items: center;
  min-height: calc(100vh - (215px + 46px + 46px));
  max-width: 940px;
  text-align: justify;

  h3 {
    margin-bottom: 12px;
  }

  div {
    margin-top: 32px;
    text-align: center;

    a {
      margin-right: 8px;
      text-decoration: none;

      svg {
        color: ${({ theme }) => theme.colors.blackAndWhite};
        font-size: 20px;
      }
    }
  }
`
