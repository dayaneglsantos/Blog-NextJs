import loadPosts from '../../../Api/load-posts'
import PostTemplete from '../../../Templates/PostTemplate'

const PostPage = async ({ params }: any) => {
  const variables = { postSlug: params.slug }
  const post = await loadPosts(variables)

  return <PostTemplete post={post.posts[0]} settings={post.setting} />
}

export default PostPage
