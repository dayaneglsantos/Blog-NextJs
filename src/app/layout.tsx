import { ReactNode } from 'react'
import StyledComponentsRegistry from './registry'
import GlobalStyles from '../Styles/Global-styles'
import { Open_Sans } from 'next/font/google'
import BlogThemeProvider from './theme-provider'

export const revalidate = 3600

export const metadata = {
  title: 'Blog - Dayane Santos',
  description: 'Descrição do blog de Dayane Santos'
}

type RootLayoutTypes = {
  children: ReactNode
}

export const font = Open_Sans({ subsets: ['latin'] })

export default function RootLayout({ children }: RootLayoutTypes) {
  return (
    <html lang="pt-BR" className={font.className}>
      <head>
        <link
          rel="icon"
          href="https://www.svgrepo.com/show/477113/global-wi-fi.svg"
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <BlogThemeProvider>
            <GlobalStyles />
            {children}
          </BlogThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
