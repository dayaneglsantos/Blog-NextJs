import { render, screen } from '@testing-library/react'
import LogoLink from '.'

describe('<LogoLink />', () => {
  it('should render', () => {
    render(<LogoLink url="local" altText="text" />)
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('alt', 'text')
  })
  it('should match snapshot', () => {
    const { container } = render(<LogoLink srcImg="local" altText="text" />)
    expect(container).toMatchSnapshot()
  })
})
