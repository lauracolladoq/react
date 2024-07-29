import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    { username: 'google', name: 'google', isFollowing: false },
    { username: 'paulwalker', name: 'Paul Walker', isFollowing: true },
    { username: 'emmawatson', name: 'Emma Watson', isFollowing: false }
]

export function App() {
    return (
        <section className='App' >
            {users.map(({ username, name, isFollowing }) => (
                <TwitterFollowCard key={username} username={username} initialIsFollowing={isFollowing}>
                    {name}
                </TwitterFollowCard>
            ))}
        </section>
    )
}      