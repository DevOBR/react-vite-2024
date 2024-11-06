import { useEffect, useState } from 'react'
import { getFactAsync } from '../service/fact.service'

export function useFactRefresh() {
  const [fact, setFact] = useState()

  async function refreshUrlAsync() {
    const { fact } = await getFactAsync()
    setFact(fact)
  }
  useEffect(() => {
    refreshUrlAsync()
  }, [])

  return { fact, refreshUrlAsync }
}
