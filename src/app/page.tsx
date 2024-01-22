import loadPosts, { defaultVariables } from '../Api/load-posts'
import PostsTemplate from '../Templates/PostsTemplate'

export default async function Home() {
  const variables = { ...defaultVariables }
  const data = await loadPosts()

  return (
    <>
      <PostsTemplate
        posts={data.posts}
        settings={data.setting}
        variables={variables}
      />
    </>
  )
}
