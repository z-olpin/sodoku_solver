import React from 'react'
import styles from '../static/styles'

const SolvedBoard = ({ solvedBoard }) => {

  return (
    <>
      <div className="board" style={styles.board}>
        <SolvedRow id={0} vals={solvedBoard.slice(0, 27)} />
        <SolvedRow id={1} vals={solvedBoard.slice(27, 54)} />
        <SolvedRow id={2} vals={solvedBoard.slice(54)} />
      </div>
    </>
  )
}

const SolvedRow = ({ vals, id }) => {
  return (
    <div className="row" style={styles.row}>
      <SolvedSquare id={id * 3} vals={vals.slice(0, 9)} />
      <SolvedSquare id={id * 3 + 1} vals={vals.slice(9, 18)} />
      <SolvedSquare id={id * 3 + 2} vals={vals.slice(18)} />
    </div>
  )
}

const SolvedSquare = ({ vals, id }) => {
  return (
    <div className="square" style={styles.square}>
      <SolvedInputRow id={id * 3} vals={vals.slice(0, 3)} />
      <SolvedInputRow id={id * 3 + 1} vals={vals.slice(3, 6)} />
      <SolvedInputRow id={id * 3 + 2} vals={vals.slice(6)} />
    </div>
  )
}

const SolvedInputRow = ({ vals, id }) => {


  return (
    <div className="inputRow" style={styles.squareRow}>
      <div id={id*3+100} style={styles.cell}>
        {vals[0]}
      </div>
      <div id={id*3+101} style={styles.cell}>
        {vals[1]}
      </div>
      <div id={id*3+102} style={styles.cell}>
        {vals[2]}
      </div>
    </div>
  )
}

export default SolvedBoard