import { fireEvent, screen } from '@testing-library/react'
import PostGrid from '.'
import mock from './mock'
import { renderTheme } from '../../Utils/render-theme'

describe('<PostGrid />', () => {
  it('should render PostGrid with correct length', () => {
    renderTheme(
      <PostGrid
        posts={mock.posts}
        onclick={mock.onclick}
        disabled={mock.disabled}
        noMorePosts={mock.noMorePosts}
      />
    )

    const postTitle = screen.getAllByRole('heading')
    expect(postTitle).toHaveLength(6)

    const buttonLoadPosts = screen.getByRole('button', {
      name: 'Carregar mais posts'
    })
    fireEvent.click(buttonLoadPosts)
    expect(mock.onclick).toHaveBeenCalledTimes(1)
  })
  it('should render PostGrid with no more posts button', () => {
    renderTheme(
      <PostGrid
        posts={mock.posts}
        onclick={mock.onclick}
        disabled={mock.disabled}
        noMorePosts={true}
      />
    )

    const buttonLoadPosts = screen.getByRole('button', {
      name: 'Não há mais posts'
    })

    expect(buttonLoadPosts).toBeInTheDocument()
  })
  it('should render PostGrid with no posts', () => {
    renderTheme(
      <PostGrid
        onclick={mock.onclick}
        disabled={mock.disabled}
        noMorePosts={mock.noMorePosts}
      />
    )

    const text = screen.getByText('Nenhum post encontrado 😕')
    expect(text).toBeInTheDocument()
  })
  it('should match snapshot', () => {
    const { container } = renderTheme(
      <PostGrid
        onclick={mock.onclick}
        disabled={mock.disabled}
        noMorePosts={mock.noMorePosts}
      />
    )
    expect(container).toMatchSnapshot()
  })
})
