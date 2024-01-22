'use client'
import { useState } from 'react'
import PostGrid from '../../components/PostGrid'

import { Settings } from '../../shared-types/settings'

import { PostCardType } from '../../components/PostCard'
import BaseTemplate from '../BaseTemplate'
import loadPosts, { LoadPostsVariables } from '../../Api/load-posts'
import Search from '../../components/Search'

export type PostsTemplateProps = {
  settings: Settings
  posts: PostCardType[]
  variables: LoadPostsVariables
  searchText?: string
}

const PostsTemplate = ({
  posts,
  settings,
  variables,
  searchText
}: PostsTemplateProps) => {
  const [statePosts, setStatePosts] = useState(posts)
  const [stateVariables, setStateVariables] = useState(variables)
  const [noMorePosts, setNoMorePosts] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(false)

  const loadMorePosts = async () => {
    setButtonDisabled(true)

    const newVariables = {
      ...stateVariables,
      start: stateVariables.start! + stateVariables.limit!,
      limit: stateVariables.limit
    }

    const newPosts = await loadPosts(newVariables)

    if (!newPosts || !newPosts.posts || !newPosts.posts.length) {
      setNoMorePosts(true)
      return
    }

    setButtonDisabled(false)
    setStateVariables(newVariables)
    setStatePosts((prev) => [...prev, ...newPosts.posts])
  }

  return (
    <BaseTemplate settings={settings}>
      <Search />
      <PostGrid
        posts={statePosts}
        disabled={buttonDisabled}
        onclick={loadMorePosts}
        noMorePosts={noMorePosts}
        searchText={searchText}
      />
    </BaseTemplate>
  )
}

export default PostsTemplate
