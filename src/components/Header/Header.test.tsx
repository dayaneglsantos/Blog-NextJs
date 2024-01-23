import { fireEvent, screen } from '@testing-library/react'
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
    const heading = screen.queryByRole('heading', { name: 'Nome do blog' })
    const img = screen.getByRole('img', { name: 'Logo' })
    expect(heading).not.toBeInTheDocument()
    expect(img).toBeInTheDocument()

    const openDetails = screen.getByLabelText('open details')
    fireEvent.click(openDetails)

    const title = screen.getByRole('heading', { name: 'Nome do blog' })
    expect(title).toBeInTheDocument()

    const closeDetails = screen.getByLabelText('close details')
    fireEvent.click(closeDetails)
    expect(heading).not.toBeInTheDocument()
  })
})
