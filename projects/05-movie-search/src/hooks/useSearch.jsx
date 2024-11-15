import { useEffect, useState } from 'react'

export function useSearch() {
  const [errorSearch, setError] = useState('')
  const [search, setSearch] = useState('')

  function validateSearch({ word }) {
    if (!word) {
      setError('You should enter a Movie Title')
      return
    }

    if (word?.length < 3) {
      setError('You should enter more than 3 characters')
      return
    }

    if (/\d/.test(word)) {
      setError("Title shouldn't have any number in it")
      return
    }

    setError('')
    setSearch(word)
  }

  useEffect(() => {
    validateSearch({ word: search })
  }, [search])

  return { search, setSearch, validateSearch, errorSearch }
}
