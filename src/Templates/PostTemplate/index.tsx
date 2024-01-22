import Post, { PostType } from '../../components/Post'
import Search from '../../components/Search'
import { Settings } from '../../shared-types/settings'
import BaseTemplate from '../BaseTemplate'

export type PostTemplateProps = {
  settings: Settings
  post: PostType
}

const PostTemplete = ({ settings, post }: PostTemplateProps) => {
  return (
    <BaseTemplate settings={settings}>
      <Search />
      <Post {...post} />
    </BaseTemplate>
  )
}
export default PostTemplete
