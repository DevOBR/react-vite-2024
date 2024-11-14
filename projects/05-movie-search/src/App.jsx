import { useEffect, useState } from 'react'
import withData from './mocks/withData'
import './App.css'
import { Movies } from './components/movie/movie.component'
export function App() {
  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    if (!search) {
      setError('You should enter a Movie Title')
      return
    }

    if (search?.length < 3) {
      setError('You should enter more than 3 characters')
      return
    }

    if (/\d/.test(search)) {
      setError("Title shouldn't have any number in it")
      return
    }

    function getMovies() {
      const data = withData.Search.filter((movie) =>
        movie.Title.toLowerCase().includes(search.toLocaleLowerCase())
      )?.map((movie) => {
        return {
          id: movie.imdbID,
          title: movie.Title,
          year: movie.Year,
          poster: movie.Poster
        }
      })

      if (data?.length < 0) {
        return { Response: 'False', Error: 'Movie not found!' }
      }

      return { Response: 'True', Search: data }
    }

    const result = getMovies()

    if (result?.Response === 'False') setError(result.Error)

    setMovies(result.Search)
    setError('')
  }, [search])

  function handlingSearch(e) {
    setSearch(e.target.value)
  }

  function handlingOnSubmit(e) {
    e.preventDefault()
    const data = new window.FormData(e.target)
    const fSearch = data.get('search')
    setSearch(fSearch)
  }

  function handlingClear(e) {
    e.preventDefault()
    setMovies([])
    setSearch('')
  }

  return (
    <main>
      <section>
        <form onSubmit={handlingOnSubmit}>
          <input
            name='search'
            type='text'
            value={search || ''}
            onChange={handlingSearch}
            placeholder='Avengers, Matrix etc...'
          />
          <button>Search</button>
          <button type='submit' onClick={handlingClear}>
            Clear
          </button>
        </form>
      </section>

      {error && (
        <section>
          <p>{error}</p>
        </section>
      )}

      <Movies movies={movies}>No movies found</Movies>
    </main>
  )
}
