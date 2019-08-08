import React, { useState } from 'react'
import SolvedBoard from './SolvedBoard'
import InputBoard from "./InputBoard"
import solveBoard from './solver'



const BoardDisplay = () => {

  const [board, setBoard] = useState([...Array(81)])
  const [solvedBoard, setSolvedBoard] = useState([...Array(81)])

  const onInput = (id, value) => {

    // Gets neighbor indexes of input index. Violates DRY right now because extracting getNeighbors
    // function from solveBoard function in solver.js

    const getNeighbors = (idx) => {
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

    // Make array of values in currrent board that are neighbors of input index
    let neighbors = new Set(getNeighbors(id))
    neighbors = [...Array(...neighbors)]
    let neighborVals = neighbors.map(i=>board[i])

    // If value is not valid, set value to empty string and log ABORT
    if (neighborVals.includes(value)) {
      // TODO: invalid input, deny
      document.getElementById(id).value = ''
      console.log('ABORRRT')
    } 

    // Prevents from inputting existing values in neighbors (except missing cases sometimes.
    // Dont think the board state is actually updating, but it's still rendering.
    // Something to do with re-rendering or state change timing? Try using await on this.

    if (!neighborVals.includes(value)) {
      const newBoard = [...board.slice(0, id), value, ...board.slice(id + 1)]
      setBoard(newBoard)

      // TODO: this styling should be done in CSS
      document.getElementById(id).style.backgroundColor = 'lightgrey'
      document.getElementById(id+100).style.backgroundColor = 'lightgrey'
      document.getElementById(id+100).innerText = value
    }
  }

  const handleSolve = (e) => {
    e.preventDefault()
    const newBoard = solveBoard([...board])
    setSolvedBoard([...newBoard])
  }

  return (
    <>
      <InputBoard handleSolve={handleSolve} onInput={onInput} />
      <SolvedBoard solvedBoard={solvedBoard} oldBoard={board} />
    </>
  )
}

export default BoardDisplay