import './App.css'
import responseMovies from './mocks/with-results.json'
import { Movies } from './components/Movies'

function App() {
  const movies = responseMovies.Search
  console.log(responseMovies)
  return (
    <div>
      <header>
        <h1>Movie finder</h1>
        <form action="" className='form'>
          <input type="text" placeholder='Avengers, Star Wars, The Matrix...' />
          <button type="submit">Search</button>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App