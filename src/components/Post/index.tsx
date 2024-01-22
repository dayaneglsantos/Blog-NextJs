import { Post } from '../../shared-types/post'
import ArticleHeader from '../ArticleHeader'
import Comments from '../Comments'
import HtmlContent from '../HtmlContent'

import PostContainer from '../PostContainer'
import PostTag from '../PostTag'

export type PostType = Post

const Post = ({
  title,
  excerpt,
  cover,
  author,
  categories,
  textContent,
  publishedAt,
  tags,
  id,
  allowComments,
  slug
}: PostType) => {
  return (
    <PostContainer>
      <ArticleHeader
        title={title}
        author={author}
        categories={categories}
        image={cover}
        excerpt={excerpt}
        publishedAt={publishedAt}
      />
      <HtmlContent html={textContent} />
      <PostTag tags={tags} />
      <Comments
        title={title}
        slug={slug}
        id={id}
        allowComments={allowComments}
      />
    </PostContainer>
  )
}

export default Post
