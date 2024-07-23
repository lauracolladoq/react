// Para reutilizar una función hay que parametrizarla
export function TwitterFollowCard({ username, name, isFollowing }) {
    return (
        // Añadir clases con className en lugar de class en JSX
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={`https://unavatar.io/${username}`} alt="avatar" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span>@{username}</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}