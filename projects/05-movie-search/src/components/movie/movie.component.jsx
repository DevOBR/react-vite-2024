function DataMovies({ movies }) {
  return (
    <>
      <header>
        <h3>List of movies</h3>
      </header>
      <section className='movies'>
        {movies.map((movie) => {
          return (
            <ul className='movie' key={movie.id}>
              <li>{movie.title}</li>
              <li>{movie.year}</li>
              <li>
                <img src={movie.poster} />
              </li>
            </ul>
          )
        })}
      </section>
    </>
  )
}

function NoMovies({ children }) {
  return <span>{children}</span>
}

export function Movies({ children, movies }) {
  if (movies) {
    return movies?.length > 0 ? DataMovies({ movies }) : NoMovies({ children })
  } else return NoMovies({ children })
}
