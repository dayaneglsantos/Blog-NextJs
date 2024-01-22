import { fireEvent, screen } from '@testing-library/react'
import MenuMobile from '.'
import { renderTheme } from '../../Utils/render-theme'
import mock from './mock'

describe('<MenuMobile />', () => {
  it('should render MenuMobile', () => {
    renderTheme(<MenuMobile {...mock} />)

    const menuButton = screen.getByLabelText('Menu burger')
    fireEvent.click(menuButton)

    const links = screen.getAllByRole('listitem')
    expect(links).toHaveLength(5)

    const darkTheme = screen.getByAltText('Dark Theme')
    fireEvent.click(darkTheme)

    const menu = screen.getByTestId('menu')
    expect(menu).toHaveStyleRule('background-color', '#43766C')

    const overlay = screen.getByLabelText('overlay')
    fireEvent.click(overlay)

    expect(menu).not.toBeInTheDocument()
  })
})
