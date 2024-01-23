'use client'
import { DiscussionEmbed } from 'disqus-react'
import { CommentsContainer, NoCommentsAllowed } from './styles'

export type CommentsProps = {
  slug: string
  id: string
  title: string
  allowComments: boolean
}

const Comments = ({ slug, allowComments, id, title }: CommentsProps) => {
  if (!allowComments) {
    return (
      <NoCommentsAllowed>
        Comentários foram desativados para este post
      </NoCommentsAllowed>
    )
  }

  return (
    <CommentsContainer>
      <DiscussionEmbed
        shortname="dayane-santos"
        config={{
          url: `https://blog-dayane.vercel.app/post/${slug}`,
          identifier: id,
          title,
          language: 'pt_BR'
        }}
      />
    </CommentsContainer>
  )
}

export default Comments
