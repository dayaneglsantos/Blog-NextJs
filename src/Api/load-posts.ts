import request from 'graphql-request'
import { Post } from '../shared-types/post'
import { Settings } from '../shared-types/settings'
import { GRAPHQL_QUERY } from '../graphql/queries'
import { mapData } from './map-data'

export type LoadPostsVariables = {
  categorySlug?: string
  postSlug?: string
  postSearch?: string
  authorSlug?: string
  tagSlug?: string
  sort?: string
  start?: number
  limit?: number
}

export type PostAndSettings = {
  setting: Settings
  posts: Post[]
  variables?: LoadPostsVariables
}

export const defaultVariables: LoadPostsVariables = {
  sort: 'createdAt:desc',
  start: 0,
  limit: 6
}

const loadPosts = async (
  variables: LoadPostsVariables = { ...defaultVariables }
): Promise<PostAndSettings> => {
  let data = null

  try {
    data = await request(
      'https://blog-backend-s33l.onrender.com/graphql',
      GRAPHQL_QUERY,
      {
        ...defaultVariables,
        ...variables
      }
    ).then((res) => mapData(res))
  } catch (error) {
    data = null
  }

  return data as PostAndSettings
}
export default loadPosts
