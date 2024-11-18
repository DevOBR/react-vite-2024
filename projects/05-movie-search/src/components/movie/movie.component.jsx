import './movie.component.css'

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
  return (
    <section>
      <p>{children}</p>
    </section>
  )
}

export function Movies({ children, movies }) {
  if (movies && movies?.response) {
    return movies?.search?.length > 0
      ? DataMovies({ movies: movies.search })
      : NoMovies({ children })
  } else return NoMovies({ children })
}
