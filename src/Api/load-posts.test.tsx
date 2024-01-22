import request from 'graphql-request'
import loadPosts, { defaultVariables } from './load-posts'

jest.mock('graphql-request')

jest.mock('../graphql/queries', () => {
  return {
    GRAPHQL_QUERY: 'A_QUERY'
  }
})

describe('<PostGrid />', () => {
  it('should call request with default variables', async () => {
    await loadPosts()
    expect(request).toHaveBeenCalledWith(
      'http://localhost:1337/graphql',
      'A_QUERY',
      defaultVariables
    )
  })
  it('should call request with custom variables', async () => {
    await loadPosts({ authorSlug: 'dayane' })
    expect(request).toHaveBeenCalledWith(
      'http://localhost:1337/graphql',
      'A_QUERY',
      { ...defaultVariables, authorSlug: 'dayane' }
    )
  })
})
