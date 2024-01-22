import { RenderResult, render } from '@testing-library/react'
import { ReactNode } from 'react'
import BlogThemeProvider from '../app/theme-provider'

export const renderTheme = (children: ReactNode): RenderResult => {
  return render(<BlogThemeProvider>{children}</BlogThemeProvider>)
}
