import { useEffect, useState } from 'react'
import { getCatImg } from '../service/cataas.service'

export function useCatImg({ fact }) {
  const [imgUrl, setImgUrl] = useState()

  useEffect(() => {
    if (!fact) return
    setImgUrl(getCatImg({ fact }))
  }, [fact])

  return { imgUrl }
}
