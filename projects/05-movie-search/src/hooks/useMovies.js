import { useMemo, useRef, useState } from 'react'
import { getMoviesAsync } from '../services/movies.service'

export function useMovies({ search, errorSearch, isSort }) {
  const [movies, setMovies] = useState({
    response: false,
    search: [],
    error: ''
  })
  const [moviesError, setMoviesError] = useState('')
  const [loading, setLoading] = useState(false)
  const prevSearch = useRef(search)

  const refreshMoviesAsync = useMemo(() => {
    return async ({ search }) => {
      try {
        if (prevSearch.current === search) return
        setTimeout(async () => {
          setLoading(true)
          const data = await getMoviesAsync({ search })
          setMovies(data)
          if (!data?.response) setLoading(false)
        }, 1000)
      } catch (e) {
        setMoviesError(e?.message || 'Unknow error')
      } finally {
        setLoading(false)
      }
    }
  }, [])

  const sortedMovies = useMemo(() => {
    return isSort
      ? {
          response: true,
          search: [...movies?.search].sort((a, b) =>
            a.title.localeCompare(b.title)
          )
        }
      : movies
  }, [isSort, movies])

  return {
    movies: sortedMovies,
    refreshMoviesAsync,
    moviesError,
    loading
  }
}
