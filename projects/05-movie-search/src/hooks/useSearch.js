import { useRef, useState } from 'react'

export function useSearch() {
  const [errorSearch, setError] = useState('')
  const [search, setSearch] = useState('')
  const firstInput = useRef(true)

  function validateSearch({ search }) {
    if (firstInput.current) {
      firstInput.current = search === ''
      return
    }

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

    setError('')
  }

  function refreshSearch({ search }) {
    validateSearch({ search })
    setSearch(search)
  }

  return { search, refreshSearch, errorSearch }
}
