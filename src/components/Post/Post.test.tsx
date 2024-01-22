import { screen } from '@testing-library/react'
import Post from '.'
import mock from './mock.json'
import { renderTheme } from '../../Utils/render-theme'

describe('<Post />', () => {
  it('should render Post', () => {
    renderTheme(<Post {...mock} />)
    expect(screen.getByRole('heading', { name: 'Post 2' })).toBeInTheDocument()
  })
})
