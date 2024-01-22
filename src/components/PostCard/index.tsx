import Heading from '../Heading'

import { Cover, PostCardContainer, PostCardContent } from './styles'

export type PostCardType = {
  slug: string
  cover: string
  excerpt: string
  title: string
  id: string
}

const PostCard = ({ title, excerpt, cover, slug, id }: PostCardType) => {
  return (
    <PostCardContainer id={id}>
      <a href={`/post/${slug}`}>
        <Cover src={cover} alt={title} />
      </a>
      <PostCardContent>
        <a href={`/post/${slug}`}>
          <Heading as="h2">{title}</Heading>
        </a>
        <p>{excerpt}</p>
      </PostCardContent>
    </PostCardContainer>
  )
}
export default PostCard
