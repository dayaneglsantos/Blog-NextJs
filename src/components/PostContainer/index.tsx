import { Container } from './styles'

export type PostContainerType = {
  children: React.ReactNode
}

const PostContainer = ({ children }: PostContainerType) => {
  return <Container>{children}</Container>
}

export default PostContainer
