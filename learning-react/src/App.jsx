import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    return (
        <section className='App' >
            {/* Los parámetros booleanos se pasan sin comillas para no ser considerados strings. Si es false no se incluye y si es true, se pasa solo el nombre del parámetro */}
            <TwitterFollowCard username="google" name="Google" isFollowing/>
            <TwitterFollowCard username="paulwalker" name="Paul Walker" isFollowing/>
            <TwitterFollowCard username="facebook" name="Facebook"/>
            <TwitterFollowCard username="emmawatson" name="Emma Watson" isFollowing/>
        </section>
    )
}