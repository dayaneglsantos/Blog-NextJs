import { screen } from '@testing-library/react'
import ArticleHeader from '.'
import mock from './mock.json'
import { renderTheme } from '../../Utils/render-theme'

describe('<ArticleHeader />', () => {
  it('should render ArticleHeader', () => {
    renderTheme(<ArticleHeader {...mock} />)
    const title = screen.getByRole('heading', { name: 'Título da postagem' })
    const img = screen.getByRole('img', { name: 'Título da postagem' })

    expect(img).toBeInTheDocument()
    expect(title.tagName).toBe('H2')
  })

  it('should match snapshot', () => {
    const container = renderTheme(<ArticleHeader {...mock} />)

    expect(container).toMatchSnapshot()
  })
})
