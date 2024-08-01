export const Square = ({ children, isSelected, updateBoard, index }) => {
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