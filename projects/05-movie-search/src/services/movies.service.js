const MOVIES_ENDPOINT = 'https://www.omdbapi.com/?apikey={API_KEY}&s={search}'
export async function getMoviesAsync({ search }) {
  try {
    const response = await fetch(MOVIES_ENDPOINT.replace('{search}', search))
    if (response.ok) {
      const data = await response.json()

      if (data.Response === 'True') {
        return {
          response: true,
          search: data?.Search?.map((movie) => {
            return {
              id: movie.imdbID,
              title: movie.Title,
              year: movie.Year,
              poster: movie.Poster
            }
          })
        }
      }

      return {
        response: false,
        error: data.Error
      }
    }

    throw new Error('Error getting movies')
  } catch (e) {
    throw new Error(e.message || 'Unkown error')
  }
}
