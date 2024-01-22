import { screen } from '@testing-library/react'
import Heading from '.'
import { renderTheme } from '../../Utils/render-theme'

describe('<Heading />', () => {
  it('should render', () => {
    renderTheme(
      <Heading dark={false} as="h2" size="huge" uppercase={true}>
        Título
      </Heading>
    )
    const heading = screen.getByRole('heading', { name: 'Título' })
    expect(heading).toBeInTheDocument()
    expect(heading.tagName).toBe('H2')
  })
  it('should render wish default data', () => {
    renderTheme(<Heading>Título</Heading>)
    const heading = screen.getByRole('heading', { name: 'Título' })
    expect(heading).toBeInTheDocument()
    expect(heading.tagName).toBe('H1')
    expect(heading).toHaveStyleRule('font-size', '4.8rem')
  })
  it('should match snapshot', () => {
    const { container } = renderTheme(<Heading>Título</Heading>)
    expect(container).toMatchSnapshot()
  })
})
