/* eslint-disable @typescript-eslint/no-explicit-any */
import loadPosts from '../../Api/load-posts'
import PostsTemplete from '../../Templates/PostsTemplate'
import { defaultVariables } from '../../Api/load-posts'

export const SearchPage = async ({ searchParams }: any) => {
  const variables = {
    ...defaultVariables,
    postSearch: searchParams.query
  }
  const posts = await loadPosts(variables)

  const searchText = searchParams.query

  return (
    <>
      <PostsTemplete
        posts={posts.posts}
        settings={posts.setting}
        variables={variables}
        searchText={searchText}
      />
    </>
  )
}

export default SearchPage
