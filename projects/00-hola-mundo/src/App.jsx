import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    // When you update the state of the parent component, the parent component propagates 
    // the change downstream to the child component
    // const [name, setName] = useState('sindresorhus')
    return (
        <section className='App'>
            {/* <TwitterFollowCard isFollowing userName={name}> */}
            {/* <TwitterFollowCard isFollowing userName="sindresorhus" initialIsFollowing={true}> */}
            <TwitterFollowCard userName="sindresorhus">
                Kutra
            </TwitterFollowCard>
            <TwitterFollowCard userName='suja'>
                Suja
            </TwitterFollowCard>
            {/* <button onClick={() => setName('Pedro') }>Change Name</button> */}
        </section>
    )
}