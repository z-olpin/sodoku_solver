import React from 'react'
import styles from '../static/styles'

const InputBoard = ({ onInput, handleSolve }) => {

  return (
    <>
      <div className="board" style={styles.board}>
        <Row onInput={onInput} id={0} />
        <Row onInput={onInput} id={1} />
        <Row onInput={onInput} id={2} />
        <button style={styles.button} onClick={handleSolve}>SOLVE</button>
      </div>

    </>
  )
}

const Row = ({ id, onInput }) => {
  return (
    <div className="row" style={styles.row}>
      <Square onInput={onInput} id={id * 3} />
      <Square onInput={onInput} id={id * 3 + 1} />
      <Square onInput={onInput} id={id * 3 + 2} />
    </div>
  )
}

const Square = ({ id, onInput }) => {
  return (
    <div className="square" style={styles.square}>
      <InputRow onInput={onInput} id={id * 3} />
      <InputRow onInput={onInput} id={id * 3 + 1} />
      <InputRow onInput={onInput} id={id * 3 + 2} />
    </div>
  )
}

const InputRow = ({ id, onInput }) => {

  return (
    <div className="inputRow" style={styles.squareRow}>
      <input type="text" id={id * 3} onChange={(e) => onInput(Number(e.target.id), Number(e.target.value))} maxLength={1} style={styles.cell} />
      <input type="text" id={id * 3 + 1} onChange={(e) => onInput(Number(e.target.id), Number(e.target.value))} maxLength={1} style={styles.cell} />
      <input type="text" id={id * 3 + 2} onChange={(e) => onInput(Number(e.target.id), Number(e.target.value))} maxLength={1} style={styles.cell} />
    </div>
  )
}

export default InputBoard