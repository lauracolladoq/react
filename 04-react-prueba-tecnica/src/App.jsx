import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './services/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${FirstWord}?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  // Recupera el fact al cargar la página
  useEffect(() => { getRandomFact().then(setFact) }, [])

  // Recupera un nuevo fact al hacer click en el botón
  const handleClick = async () => {
    getRandomFact().then(setFact)
    // const newFact = await getRandomFact()
    // setFact(newFact)
  }

  // Recupera la imagen cada vez que cambia el fact
  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ').slice(0, 3).join(' ')
    console.log(threeFirstWords)

    // url undefined porque la API no devuelve la url
    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`image extracted using the first word for ${fact}`} />
    </main>
  )
}
