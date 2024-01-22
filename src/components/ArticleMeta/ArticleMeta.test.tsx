import { screen } from '@testing-library/react'
import ArticleMeta from '.'
import mock from './mock.json'
import { renderTheme } from '../../Utils/render-theme'

describe('<ArticleMeta/>', () => {
  it('should render ArticleMeta', () => {
    renderTheme(<ArticleMeta {...mock} />)
    const author = screen.getByRole('link', { name: 'Dayane Santos' })
    expect(author).toBeInTheDocument()

    const category = screen.getByRole('link', { name: 'React' })
    expect(category).toHaveAttribute('href', '/category/react')
  })
  it('should render ArticleMeta without categories', () => {
    renderTheme(<ArticleMeta {...mock} categories={undefined} />)

    const category = screen.queryByRole('link', { name: 'React' })
    expect(category).not.toBeInTheDocument()
  })
  it('should match snapshot', () => {
    const container = renderTheme(<ArticleMeta {...mock} />)
    expect(container).toMatchSnapshot()
  })
})
