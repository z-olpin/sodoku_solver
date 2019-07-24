import React, { useState, useEffect } from 'react';


let InputBoard = () => {
  const [board, setBoard] = useState([...Array(81)])
  const [solvedBoard, setSolvedBoard] = useState([])

  let handleSolve = (e) => {
    e.preventDefault()
    let newBoard = solveBoard([...board])
    setSolvedBoard(newBoard)
  }

  let entry = (e) => {
    let newBoard = [...board]
    newBoard[e.target.id] = Number(e.target.value)
    setBoard(newBoard)
  }

  let getNeighbors = (idx) => {
    let row = Math.floor(idx/9)
    let col = idx % 9
    let square_idx = ((row % 3) * 3) + (idx % 3)
    let square_t_targets = {0: 10, 1: 9, 2: 8, 3: 1, 4: 0, 5: -1, 6: -8, 7: -9, 8: -10}
    let target_idx = square_t_targets[square_idx] + idx
    let square_neighbors = []
    for (let i=0; i<9; i++) {
        square_neighbors.push(target_idx + square_t_targets[i])
    }
    let col_neighbors = [0, 9, 18, 27, 36, 45, 54, 63, 72].map(n => n + col) 
    let row_neighbors = [...Array(9).keys()].map(n => n + idx-col)
    let all_neighbors = row_neighbors.concat(col_neighbors, square_neighbors)
    return all_neighbors
  }

  let difference = (setA, setB) => {
      let _difference = new Set(setA)
      for (let e of setB) {
          _difference.delete(e)
      }
      return _difference
  }

  let solveBoard = (b) => {
      for (let i=0; i < b.length; i++) {
          if (b[i]) {
              continue
          } 
          let neighbors = getNeighbors(i)
          let fullSet = new Set([...Array(9).keys()].map(n => n + 1))
          let currNeighbors = []
          for (let j=0; j< neighbors.length; j++) {
              currNeighbors.push(b[neighbors[j]])
          }
          let neighborSet = new Set(currNeighbors)
          let possible_nums = difference(fullSet, neighborSet)
          for (let e of possible_nums) {
              let try_board = [...b]
              try_board[i] = e
              let result = solveBoard(try_board)
              if (result) return result
              
          }
          return
      }
      return b
  }

  return(
    <div>
      <div>
        <div>{[...Array(9).keys()].map(n => <input type="text" maxLength={1} onChange={entry} id={n} style={{width: '3rem', height: '3rem', fontSize: '3rem'}} />)}</div>
        <div>{[...Array(9).keys()].map(n => <input type="text" maxLength={1} onChange={entry} id={n+9} style={{width: '3rem', height: '3rem', fontSize: '3rem'}} />)}</div>
        <div>{[...Array(9).keys()].map(n => <input type="text" maxLength={1} onChange={entry} id={n+18} style={{width: '3rem', height: '3rem', fontSize: '3rem'}} />)}</div>
        <div>{[...Array(9).keys()].map(n => <input type="text" maxLength={1} onChange={entry} id={n+27} style={{width: '3rem', height: '3rem', fontSize: '3rem'}} />)}</div>
        <div>{[...Array(9).keys()].map(n => <input type="text" maxLength={1} onChange={entry} id={n+36} style={{width: '3rem', height: '3rem', fontSize: '3rem'}} />)}</div>
        <div>{[...Array(9).keys()].map(n => <input type="text" maxLength={1} onChange={entry} id={n+45} style={{width: '3rem', height: '3rem', fontSize: '3rem'}} />)}</div>
        <div>{[...Array(9).keys()].map(n => <input type="text" maxLength={1} onChange={entry} id={n+54} style={{width: '3rem', height: '3rem', fontSize: '3rem'}} />)}</div>
        <div>{[...Array(9).keys()].map(n => <input type="text" maxLength={1} onChange={entry} id={n+63} style={{width: '3rem', height: '3rem', fontSize: '3rem'}} />)}</div>
        <div>{[...Array(9).keys()].map(n => <input type="text" maxLength={1} onChange={entry} id={n+72} style={{width: '3rem', height: '3rem', fontSize: '3rem'}} />)}</div>
      </div>
      <button onClick={handleSolve}>Solve Board</button>
      <div>{solvedBoard.slice(0,9).map(n => <div style={{fontSize: '3rem', display: 'inline-block', width: '3rem', height: '3rem'}}>{n}</div>)}</div>
      <div>{solvedBoard.slice(9,18).map(n => <div style={{fontSize: '3rem', display: 'inline-block', width: '3rem', height: '3rem'}}>{n}</div>)}</div>
      <div>{solvedBoard.slice(18,27).map(n => <div style={{fontSize: '3rem', display: 'inline-block', width: '3rem', height: '3rem'}}>{n}</div>)}</div>
      <div>{solvedBoard.slice(27,36).map(n => <div style={{fontSize: '3rem', display: 'inline-block', width: '3rem', height: '3rem'}}>{n}</div>)}</div>
      <div>{solvedBoard.slice(36,45).map(n => <div style={{fontSize: '3rem', display: 'inline-block', width: '3rem', height: '3rem'}}>{n}</div>)}</div>
      <div>{solvedBoard.slice(45,54).map(n => <div style={{fontSize: '3rem', display: 'inline-block', width: '3rem', height: '3rem'}}>{n}</div>)}</div>
      <div>{solvedBoard.slice(54,63).map(n => <div style={{fontSize: '3rem', display: 'inline-block', width: '3rem', height: '3rem'}}>{n}</div>)}</div>
      <div>{solvedBoard.slice(63,72).map(n => <div style={{fontSize: '3rem', display: 'inline-block', width: '3rem', height: '3rem'}}>{n}</div>)}</div>
      <div>{solvedBoard.slice(72,81).map(n => <div style={{fontSize: '3rem', display: 'inline-block', width: '3rem', height: '3rem'}}>{n}</div>)}</div>
    </div>
  )
}


const App = () => {
  return (
    <InputBoard />
  )
}

export default App