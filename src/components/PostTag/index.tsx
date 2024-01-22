import Link from 'next/link'
import { Tag } from '../../shared-types/tags'
import { PostTagContainer } from './styles'

export type TagType = {
  tags?: Tag[]
}

const PostTag = ({ tags = [] }: TagType) => {
  if (!tags.length) {
    return null
  }

  return (
    <>
      <PostTagContainer>
        Tags:
        {tags.map((tag) => (
          <Link key={tag.slug} href={`/tag/${tag.slug}`}>
            {tag.displayName}
          </Link>
        ))}
      </PostTagContainer>
    </>
  )
}

export default PostTag
