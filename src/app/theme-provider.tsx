'use client'
import { createContext, useEffect, useState } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import theme from '../Styles/theme'

export type ThemeContextValues = {
  theme: DefaultTheme
  setTheme: (mode: 'dark' | 'light') => void
}

export const ThemeContext = createContext<ThemeContextValues>({
  theme,
  setTheme: () => {}
})

const BlogThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState(theme)

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    if (!localTheme) return
    const newTheme = JSON.parse(localTheme)
    setCurrentTheme(newTheme)
  }, [])

  const changeTheme: ThemeContextValues['setTheme'] = (mode = 'light') => {
    if (mode === 'light') {
      setCurrentTheme(theme)
      localStorage.setItem('theme', JSON.stringify(theme))
    } else {
      const newTheme = {
        ...theme,
        themeName: 'dark',
        colors: {
          white: '#fff',
          black: '#000',
          blackAndWhite: '#fff',
          background: '#040D12',
          secondaryBackground: '#43766C',
          font: '#d3d6db',
          secondaryFont: '#607274',
          cyan: '#008b8b',
          secondaryCyan: '#00FFFF',
          gray: '#878787',
          dark: '#AAA492'
        }
      }
      setCurrentTheme(newTheme)
      localStorage.setItem('theme', JSON.stringify(newTheme))
    }
  }

  return (
    <ThemeContext.Provider
      value={{ theme: currentTheme, setTheme: changeTheme }}
    >
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default BlogThemeProvider
