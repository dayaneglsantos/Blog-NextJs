import PostCard, { PostCardType } from '../PostCard'
import {
  ButtonLoadPosts,
  Container,
  GridContainer,
  NoPostFound,
  SearchText
} from './styles'

export type PostGridType = {
  posts?: PostCardType[]
  disabled: boolean
  onclick: React.MouseEventHandler<HTMLButtonElement>
  noMorePosts: boolean
  searchText?: string
}

const PostGrid = ({
  posts = [],
  disabled,
  onclick,
  noMorePosts,
  searchText
}: PostGridType) => {
  return (
    <Container>
      {!posts.length && <NoPostFound>Nenhum post encontrado 😕</NoPostFound>}
      {!!posts.length && (
        <>
          {searchText && (
            <SearchText>
              Resultados para o termo: <span>{searchText}</span>
            </SearchText>
          )}

          <GridContainer>
            {posts.map((post) => (
              <PostCard {...post} key={post.id} />
            ))}
          </GridContainer>
          <ButtonLoadPosts disabled={disabled} onClick={onclick}>
            {noMorePosts ? 'Não há mais posts' : 'Carregar mais posts'}
          </ButtonLoadPosts>
        </>
      )}
    </Container>
  )
}

export default PostGrid
