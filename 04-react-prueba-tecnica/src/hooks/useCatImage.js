import { useState, useEffect } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

// Custom hook para obtener la imagen de un gato
export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

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

  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}
