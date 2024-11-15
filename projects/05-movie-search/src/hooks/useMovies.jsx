import { useEffect, useState } from 'react'
import withData from '../mocks/withData'

export function useMovies({ search }) {
  const [movies, setMovies] = useState({
    response: 'False',
    error: 'Movie not found!'
  })
  function getMovies({ search }) {
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
    console.log('data', data)
    if (data?.length <= 0) {
      setMovies({ response: 'False', error: 'Movie not found!' })
      return
    }

    setMovies({ response: 'True', search: data })
  }

  useEffect(() => {
    if (search !== '') {
      getMovies({ search })
    }
  }, [search])

  return { movies, getMovies }
}
