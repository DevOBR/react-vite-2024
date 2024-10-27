import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    id: 1,
    userName: 'sindresorhus',
    name: 'Sindresorhus Tra',
    isFollowing: true
  },
  {
    id: 2,
    userName: 'suja',
    name: 'Suja Kin',
    isFollowing: false
  },
  {
    id: 3,
    userName: 'peterSls',
    name: 'Peter Salad',
    isFollowing: true
  },
  {
    id: 4,
    userName: 'kalarGel1',
    name: 'Kalar Geli',
    isFollowing: false
  }
]

// * When you create a component, the definition needs to be set in pascal case.this because react needs to be detect if the element
// is a component or html.
export function App() {
  // When you update the state of the parent component, the parent component propagates
  // the change downstream to the child component
  // const [name, setName] = useState('sindresorhus')
  return (
    <section className='App'>
      {/* <TwitterFollowCard isFollowing userName={name}> */}
      {/* <TwitterFollowCard isFollowing userName="sindresorhus" initialIsFollowing={true}> */}
      {/* <TwitterFollowCard userName="sindresorhus"> */}
      {/* Kutra */}
      {/* </TwitterFollowCard> */}
      {/* <TwitterFollowCard userName='suja'> */}
      {/* Suja */}
      {/* </TwitterFollowCard> */}
      {/* <button onClick={() => setName('Pedro') }>Change Name</button> */}

      {users.map(({ id, userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={id}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  )
}
