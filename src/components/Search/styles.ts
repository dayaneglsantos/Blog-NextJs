'use client'
import styled from 'styled-components'

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;

  input {
    padding: 4px;
    width: 240px;
    margin-right: 16px;

    &:focus {
      outline: olivedrab;
    }
  }

  button {
    padding: 6px;
    background-color: ${({ theme }) => theme.colors.secondaryBackground};
    border: none;
    color: ${({ theme }) => theme.colors.font};
    cursor: pointer;

    &:hover {
      filter: brightness(110%);
    }
  }
`
