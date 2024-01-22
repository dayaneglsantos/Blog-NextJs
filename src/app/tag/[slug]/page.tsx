import loadPosts from '../../../Api/load-posts'
import PostsTemplete from '../../../Templates/PostsTemplate'
import { defaultVariables } from '../../../Api/load-posts'

const TagsPage = async ({ params }: any) => {
  const variables = { ...defaultVariables, tagSlug: params.slug }
  const posts = await loadPosts(variables)

  return (
    <PostsTemplete
      posts={posts.posts}
      settings={posts.setting}
      variables={variables}
    />
  )
}

export default TagsPage
