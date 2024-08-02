import { useState } from 'react'
import confetti from "canvas-confetti"
import { Square } from './components/Square.jsx'
import { TURNS } from './constants'
import { checkWinner, checkEndGame } from './logic/board'
import { WinnerModal } from './components/WinnerModal.jsx'
import { saveGameStorage, resetGameStorage } from './logic/storage/index.js'

function App() {
  // Cada vez que se haga click en el tablero hay que renderizarlo
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    // Si hay algo en el local storage lo parseo, si no, creo un array de 9 posiciones con null
    return boardFromStorage ? JSON.parse(boardFromStorage) :
      Array(9).fill(null)
  })
  
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  // Null no hay ganador y false es empate
  const [winner, setWinner] = useState(null)

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
    // Guardar partida
    saveGameStorage({ board: newBoard, turn: newTurn })
    // Revisar si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
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

    resetGameStorage()
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
      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App