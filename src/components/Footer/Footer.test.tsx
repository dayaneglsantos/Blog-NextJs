import { screen } from '@testing-library/react'
import Footer from '.'
import { renderTheme } from '../../Utils/render-theme'

describe('<Footer />', () => {
  it('should render Footer', () => {
    renderTheme(<Footer>Texto</Footer>)
    const footerText = screen.getByText('Texto')
    expect(footerText).toBeInTheDocument()
  })
})
