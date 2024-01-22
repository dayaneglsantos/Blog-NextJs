import { screen } from '@testing-library/react'
import Header from '.'
import { renderTheme } from '../../Utils/render-theme'

const logoMock = {
  alternativeText: 'Logo',
  url: 'url.com'
}

describe('<Header/>', () => {
  it('should render Header', () => {
    renderTheme(
      <Header
        blogName="Nome do blog"
        blogDescription="Descrição"
        url={logoMock.url}
        altText={logoMock.alternativeText}
      />
    )
    const img = screen.getByRole('img', { name: 'Logo' })
    const heading = screen.getByRole('heading', { name: 'Nome do blog' })
    expect(img).toBeInTheDocument()
    expect(heading).toBeInTheDocument()
  })
})
