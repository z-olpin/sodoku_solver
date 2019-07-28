// TODOS:
// Extract components
// Prevent unsolvable boards ->
// Validate input. Invalidate on attempted entry
// Improve design
// Host

import React, { useState} from 'react'
import solveBoard from './solver'
import styles from '../static/styles'

const BoardDisplay = () => {

  const [board, setBoard] = useState([...Array(81)])

  const onInput = (id, value) => {
    const newBoard = [...board.slice(0,id), value, ...board.slice(id+1)]
    setBoard(newBoard)
    console.log(board, id, value )
  }

  return (
    <>
    <div className="board" style={styles.board}>
      <Row onInput={onInput} id={0} />
      <Row onInput={onInput} id={1} />
      <Row onInput={onInput} id={2} />
    </div>
    <SolvedBoard board={board} />
    </>
  )
}

const Row = ({id, onInput}) => {
  return (
    <div className="row" style={styles.row}>
      <Square onInput={onInput} id={id*3} />
      <Square onInput={onInput} id={id*3+1} />
      <Square onInput={onInput} id={id*3+2} />
    </div>
  )
}

const Square = ({id, onInput}) => {
  return (
    <div className="square" style={styles.square}>
      <InputRow onInput={onInput} id={id*3} />
      <InputRow onInput={onInput} id={id*3+1} />
      <InputRow onInput={onInput} id={id*3+2} />
    </div>
  )
}

const InputRow = ({id, onInput}) => {

  return (
    <div className="inputRow" style={styles.squareRow}>
      <input type="text" id={id*3} onChange={(e)=>onInput(Number(e.target.id), Number(e.target.value))} maxLength={1} style={styles.cell}/>
      <input type="text" id={id*3+1} onChange={(e)=>onInput(Number(e.target.id), Number(e.target.value))} maxLength={1} style={styles.cell}/>
      <input type="text" id={id*3+2} onChange={(e)=>onInput(Number(e.target.id), Number(e.target.value))} maxLength={1} style={styles.cell}/>
    </div>
  )
}

const SolvedBoard = ({board}) => {
    const [solvedBoard, setSolvedBoard] = useState([...Array(81)])

    const handleSolve = (e) => {
      e.preventDefault()
      const newBoard = solveBoard([...board])
      setSolvedBoard([...newBoard])
  }

  return (
    <>
    <button style={{fontSize: '1.5rem', backgroundColor: '#fff', border: '2px solid black'}} onClick={handleSolve}>SOLVE</button>
    <div className="board" style={styles.board}>
      <SolvedRow id={solvedBoard.slice(0,27)} />
      <SolvedRow id={solvedBoard.slice(27,54)} />
      <SolvedRow id={solvedBoard.slice(54)} />
    </div>
    </>
  )
}

const SolvedRow = ({id}) => {
  return (
    <div className="row" style={styles.row}>
      <SolvedSquare id={id.slice(0,9)} />
      <SolvedSquare id={id.slice(9,18)} />
      <SolvedSquare id={id.slice(18)} />
    </div>
  )
}

const SolvedSquare = ({id}) => {
  return (
    <div className="square" style={styles.square}>
      <SolvedInputRow id={id.slice(0,3)} />
      <SolvedInputRow id={id.slice(3,6)} />
      <SolvedInputRow id={id.slice(6)} />
    </div>
  )
}

const SolvedInputRow = ({id}) => {

  return (
    <div className="inputRow" style={styles.squareRow}>
      <div style={styles.cell}>
        {id[0]}
      </div>
      <div style={styles.cell}>
        {id[1]}
      </div>
      <div style={styles.cell}>
        {id[2]}
      </div>
    </div>
  )
}

const App = () => {
  return (
    <div style={styles.boardContainer}>
      <BoardDisplay />
    </div>
  )
}

export default App