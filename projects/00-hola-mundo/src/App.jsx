import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    return (
        <section className='App'>
            <TwitterFollowCard isFollowing userName='sindresorhus'>
                Kutra
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing={false} userName='suja'>
                Suja
            </TwitterFollowCard>
        </section>
    )
}