import { useEffect, useState } from 'react'

export function useLstErrors({ errorSearch, reesponseError, moviesError }) {
  const [errors, setErrors] = useState([])
  useEffect(() => {
    const lstErros = []
    if (errorSearch) lstErros.push(errorSearch)
    if (reesponseError) lstErros.push(reesponseError)
    if (moviesError) lstErros.push(moviesError)

    setErrors(lstErros)
  }, [errorSearch, reesponseError, moviesError])

  return { errors }
}
