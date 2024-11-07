import './App.scss'
import { useFactRefresh } from './hooks/useFactRefresh'
import { useCatImg } from './hooks/useCatImg'

export function App() {
  const { fact, refreshUrlAsync } = useFactRefresh()
  const { imgUrl } = useCatImg({ fact })

  function handleRefresh() {
    refreshUrlAsync()
  }

  return (
    <main>
      <section>
        <h1>Cats</h1>
        <button onClick={() => handleRefresh()}>Refresh</button>
        <p>{fact}</p>
      </section>
      <section>
        {imgUrl && <img src={imgUrl} alt="Cat's images from api" />}
      </section>
      <section>
        <pre>{imgUrl}</pre>
      </section>
    </main>
  )
}
