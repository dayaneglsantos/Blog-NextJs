import { screen } from '@testing-library/react'
import HtmlContent from '.'
import { renderTheme } from '../../Utils/render-theme'

describe('<HtmlContent/>', () => {
  it('should render HtmlContent', () => {
    renderTheme(<HtmlContent html="<strong>Texto</strong/>" />)
    const content = screen.getByText('Texto')

    expect(content).toBeInTheDocument()
  })
})
