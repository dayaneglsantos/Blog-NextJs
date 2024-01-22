import { gql } from 'graphql-request'
import { GRAPHQL_FRAGMENTS } from './fragments'

export const GRAPHQL_QUERY = gql`
  ${GRAPHQL_FRAGMENTS}

  query GET_POSTS(
    $categorySlug: String
    $postSlug: String
    $postSearch: String
    $authorSlug: String
    $tagSlug: String
    $sort: [String] = "createdAt:desc"
    $start: Int = 0
    $limit: Int = 10
  ) {
    setting {
      ...settings
    }
    posts(
      sort: $sort
      pagination: { start: $start, limit: $limit }
      filters: {
        slug: { eq: $postSlug }
        tags: { slug: { eq: $tagSlug } }
        author: { slug: { eq: $authorSlug } }
        categories: { slug: { eq: $categorySlug } }
        title: { contains: $postSearch }
      }
    ) {
      data {
        ...post
      }
    }
  }
`
