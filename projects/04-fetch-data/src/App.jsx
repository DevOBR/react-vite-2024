import { useEffect, useState } from 'react'
import './App.scss'

const URL_FACT_PREFIX = 'https://catfact.ninja/fact'
const URL_CAT_IMG_PREFIX =
  'https://cataas.com/cat/gif/says/{firstWord}?fontColor=white'

export function App() {
  const [text, setText] = useState()
  const [url, setUrl] = useState()
  useEffect(() => {
    async function getFirstWordAsync() {
      setUrl(undefined)
      const { fact } = await (await fetch(URL_FACT_PREFIX)).json()
      setText(fact)
    }

    getFirstWordAsync()
  }, [])

  useEffect(() => {
    if (!text) return
    setUrl(URL_CAT_IMG_PREFIX.replace('{firstWord}', text.split(' ')[0]))
  }, [text])

  return (
    <main>
      <section>
        <h1>Cats</h1>
        <p>{text}</p>
      </section>
      <section>{url && <img src={url} alt="Cat's images from api" />}</section>
    </main>
  )
}
