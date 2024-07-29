import { useState } from "react"

// Para reutilizar una función hay que parametrizarla
export function TwitterFollowCard({ username='unknown ', children, initialIsFollowing}) {
    // El estado inicial es isFollowing y se actualiza con setIsFollowing
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Following' : 'Follow'
    const buttonClass = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    // Cambia el estado de isFollowing al contrario del actual
    const handleFollow = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        // Añadir clases con className en lugar de class en JSX
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={`https://unavatar.io/${username}`} alt="avatar" />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span>@{username}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClass} onClick={handleFollow}>
                    <span className="tw-followCard-text">
                        {text}
                    </span>
                    <span className="tw-followCard-stopFollow">
                        Stop following
                    </span>
                </button>
            </aside>
        </article>
    )
}