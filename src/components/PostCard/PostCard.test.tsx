import { screen } from '@testing-library/react'
import PostCard from '.'
import mock from './mock'
import { renderTheme } from '../../Utils/render-theme'

describe('<PostCard />', () => {
  it('should render PostCard', () => {
    renderTheme(<PostCard {...mock} cover="image.com" id="1" />)

    const title = screen.getByRole('heading', { name: mock.title })
    expect(title).toBeInTheDocument()

    const image = screen.getByRole('img', { name: mock.title })
    expect(image).toBeInTheDocument()

    const excerpt = screen.getByText(mock.excerpt)
    expect(excerpt).toBeInTheDocument()

    const link = screen.getAllByRole('link', { name: mock.title })[0]
    expect(link).toHaveAttribute('href', `/post/${mock.slug}`)
  })

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <PostCard {...mock} cover="image.com" id="1" />
    )
    expect(container).toMatchSnapshot()
  })
})
