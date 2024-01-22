import { Author } from '../../shared-types/author'
import { Category } from '../../shared-types/category'
import ArticleMeta from '../ArticleMeta'
import Heading from '../Heading'
import { HeaderContainer } from './styles'

import Image from 'next/image'

export type ArticleHeaderType = {
  title: string
  image: string
  excerpt: string
  publishedAt: string
  author: Author
  categories: Category[]
}

const ArticleHeader = ({
  title,
  image,
  excerpt,
  categories,
  author,
  publishedAt
}: ArticleHeaderType) => {
  return (
    <>
      <HeaderContainer>
        <Heading as="h2" size="medium">
          {title}
        </Heading>
        <p>{excerpt}</p>
        <Image src={image} alt={title} width={700} height={384} />
        <ArticleMeta
          author={author}
          publishedAt={publishedAt}
          categories={categories}
        />
      </HeaderContainer>
    </>
  )
}

export default ArticleHeader
