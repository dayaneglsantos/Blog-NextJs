import { screen } from '@testing-library/react'
import PostTag from '.'
import mock from './mock'
import { renderTheme } from '../../Utils/render-theme'

describe('<PostTag />', () => {
  it('should render the correct number of links', () => {
    renderTheme(<PostTag tags={mock} />)

    const link = screen.getAllByRole('link')
    expect(link).toHaveLength(2)

    const linkJest = screen.getByRole('link', { name: 'Jest' })
    expect(linkJest).toBeInTheDocument()
  })
  it('should render with no tags', () => {
    renderTheme(<PostTag />)

    const link = screen.queryByRole('link')
    expect(link).not.toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = renderTheme(<PostTag tags={mock} />)

    expect(container).toMatchSnapshot()
  })
})
