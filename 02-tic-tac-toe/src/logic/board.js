import { WINNER_COMBOS } from '../constants'

// Revisa las combinaciones ganadoras para ver si ganó X u O
export const checkWinner = (boardToCheck) => {
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
export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
}