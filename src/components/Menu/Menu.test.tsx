import { fireEvent, screen } from '@testing-library/react'
import Menu from '.'
import mock from './mock'
import { renderTheme } from '../../Utils/render-theme'

describe('<Menu />', () => {
  it('should render menu correctly', () => {
    renderTheme(<Menu {...mock} />)

    const links = screen.getAllByRole('listitem')
    expect(links).toHaveLength(5)

    const btnDark = screen.getByRole('img', { name: 'Dark Theme' })
    fireEvent.click(btnDark)

    const nav = screen.getByRole('navigation')
    expect(nav).toHaveStyleRule('background-color', '#43766C')

    const btnLight = screen.getByRole('img', { name: 'Light Theme' })
    fireEvent.click(btnLight)

    expect(nav).toHaveStyleRule('background-color', '#AAD9BB')
  })
  it('should match snapshot', () => {
    const { container } = renderTheme(<Menu {...mock} />)
    expect(container).toMatchSnapshot()
  })
})
