import { screen } from '@testing-library/react'
import MenuLink from '.'
import { renderTheme } from '../../Utils/render-theme'

describe('<MenuLink/>', () => {
  it('should render MenuLink', () => {
    renderTheme(<MenuLink link="link.com" newTab={true} text="Link 1" />)
    const link = screen.getByRole('link', { name: 'Link 1' })

    expect(link).toBeInTheDocument()
  })
  it('should render MenuLink', () => {
    const { container } = renderTheme(
      <MenuLink link="link.com" text="Link 1" />
    )

    expect(container).toMatchSnapshot()
  })
})
