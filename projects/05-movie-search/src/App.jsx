// import withData from './mocks/withData'
import './App.css'
import { Movies } from './components/movie/movie.component'
import { Error } from './components/movie/error.component'
import { useSearch } from './hooks/useSearch'
import { useMovies } from './hooks/useMovies'
import { useLstErrors } from './hooks/useLstErrors'
import { useCallback, useState } from 'react'
import debounce from 'just-debounce-it'

export function App() {
  const { search, refreshSearch, errorSearch } = useSearch()
  const [isSort, setIsSort] = useState(false)
  const { movies, moviesError, refreshMoviesAsync, loading } = useMovies({
    search,
    errorSearch,
    isSort
  })
  const { errors } = useLstErrors({
    errorSearch,
    reesponseError: movies?.Errors,
    moviesError
  })

  const updateMovies = useCallback(
    debounce(async ({ search }) => {
      await refreshMoviesAsync({ search })
    }, 500),
    []
  )

  function handlingOnType(e) {
    const value = e?.target?.value
    if (value === ' ') return
    refreshSearch({ search: value })
    updateMovies({ search })
  }
  async function handlingOnSubmit(e) {
    e.preventDefault()
    const data = new window.FormData(e.target)
    const word = data.get('search')
    await refreshMoviesAsync({ search: word })
  }

  function handlingClear(e) {
    e.preventDefault()
    refreshSearch({ search: '' })
  }

  function handlingSort() {
    setIsSort(!isSort)
  }

  return (
    <main>
      <section>
        <form onSubmit={handlingOnSubmit}>
          <input
            name='search'
            type='text'
            value={search}
            onChange={handlingOnType}
            placeholder='Avengers, Matrix etc...'
          />
          <input type='checkbox' value={isSort} onChange={handlingSort} />
          <button>Search</button>
          <button type='submit' onClick={handlingClear}>
            Clear
          </button>
        </form>
      </section>
      <Error errors={errors} />
      <Movies movies={movies}>{!errors && 'Movie not found!'}</Movies>
      {loading && (
        <section>
          <h3>Loading information...</h3>
        </section>
      )}
    </main>
  )
}
