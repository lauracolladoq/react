import { useState } from 'react'
import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}


const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  const handleClick = () => {
    // Actualizar el tablero y le paso el indice para saber donde ha hecho click
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function App() {
  // Cada vez que se haga click en el tablero hay que renderizarlo
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  // Null no hay ganador y false es empate
  const [winner, setWinner] = useState(null)

  // Revisa las combinaciones ganadoras para ver si ganó X u O
  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        // Si a,b y c tienen el mismo contenido (X u O)
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
  }

  // Revisa si hay empate
  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
  }


  // Sirve para actualizar el turno
  const updateBoard = (index) => {
    // No se actualiza si esa posicion ya tiene algo o si ya hay un ganador
    if (board[index] || winner) return
    // Actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // Revisar si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  // Reiniciar el juego
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>
        Reset Game
      </button>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      {
        winner !== null && (
          <section className='winner'>
            <div className="text">
              <h2>
                {winner === false ? 'Tie' : 'Winner'}
              </h2>
              {
                winner !== false && (
                  <header className='win'>
                    {winner && <Square>{winner}</Square>}
                  </header>
                )
              }
              <footer>
                <button onClick={resetGame}>
                  Play Again
                </button>
              </footer>
            </div>
          </section>
        )
      }


    </main>
  )
}

export default App
