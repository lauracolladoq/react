import { useCatImage } from '../hooks/useCatImage'

export function Otro () {
  const { imageUrl } = useCatImage({ fact: 'Random fact' })
  return (
    <img src={imageUrl} alt='Random fact' />
  )
}
