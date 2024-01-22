import { Author } from './author'
import { Category } from './category'
import { Tag } from './tags'

export type Post = {
  id: string
  title: string
  slug: string
  altText: string
  cover: string
  excerpt: string
  textContent: string
  publishedAt: string
  tags: Tag[]
  categories: Category[]
  author: Author
  allowComments: boolean
}
