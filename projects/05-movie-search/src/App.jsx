// import withData from './mocks/withData'
import './App.css'
import { Movies } from './components/movie/movie.component'
import { Error } from './components/movie/error.component'
import { useSearch } from './hooks/useSearch'
import { useMovies } from './hooks/useMovies'
import { useEffect, useState } from 'react'

export function App() {
  const { search, setSearch, validateSearch, errorSearch } = useSearch()
  const { movies } = useMovies({ search })
  const [errors, setErrors] = useState([])

  useEffect(() => {
    const lstErros = []
    if (errorSearch) lstErros.push(errorSearch)
    if (movies?.error) lstErros.push(movies?.error)
    console.log({ errorSearch, movies })
    setErrors(lstErros)
  }, [errorSearch, movies])

  function handlingOnType(e) {
    const word = e.target.value
    setSearch(word)
  }
  function handlingOnSubmit(e) {
    e.preventDefault()
    const data = new window.FormData(e.target)
    const word = data.get('search')
    validateSearch({ word })
  }

  function handlingClear(e) {
    e.preventDefault()
    setSearch('')
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
          <button>Search</button>
          <button type='submit' onClick={handlingClear}>
            Clear
          </button>
        </form>
      </section>
      <Error errors={errors} />
      <Movies movies={movies}>{!errors && 'Movie not found!'}</Movies>
    </main>
  )
}
