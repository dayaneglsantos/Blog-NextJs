import Link from 'next/link'
import { formatDate } from '../../Utils/format-date'
import { Author } from '../../shared-types/author'
import { Category } from '../../shared-types/category'
import { ArticleMetaContainer } from './styles'

export type ArticleMetaType = {
  publishedAt: string
  author: Author
  categories?: Category[]
}

const ArticleMeta = ({
  author,
  publishedAt,
  categories = []
}: ArticleMetaType) => {
  return (
    <ArticleMetaContainer>
      <p>
        Por <Link href={`/author/${author.slug}`}>{author.displayName} </Link>
        em <span>{formatDate(publishedAt)}</span> |{' '}
        {categories.length > 0 && (
          <span>
            {categories.map((category) => {
              return (
                <Link
                  href={`/category/${category.slug}`}
                  key={category.slug}
                  className="after"
                >
                  {category.displayName}
                </Link>
              )
            })}
          </span>
        )}
      </p>
    </ArticleMetaContainer>
  )
}

export default ArticleMeta
