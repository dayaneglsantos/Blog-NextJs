import { SearchContainer } from './styles'

const Search = () => {
  return (
    <SearchContainer>
      <form action="/search/" method="GET">
        <input type="search" name="query" placeholder="Digite sua busca..." />
        <button>Buscar</button>
      </form>
    </SearchContainer>
  )
}

export default Search
