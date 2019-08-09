import React, { useState } from 'react'
import SolvedBoard from './SolvedBoard'
import InputBoard from "./InputBoard"
import { getNeighbors, solveBoard } from "./solver";



const BoardDisplay = () => {

  const [board, setBoard] = useState([...Array(81)])
  const [solvedBoard, setSolvedBoard] = useState([...Array(81)])

  const onInput = (id, value) => {

    // Gets neighbor indexes of input index. Violates DRY right now because extracting getNeighbors
    // function from solveBoard function in solver.js


    // Make array of values in currrent board that are neighbors of input index
    let neighbors = new Set(getNeighbors(id))
    neighbors = [...Array(...neighbors)]
    let neighborVals = neighbors.map(i=>board[i])

    // If value is not valid, set value to empty string and log ABORT
    if (neighborVals.includes(value)) {
      // TODO: invalid input, deny. Dont use getdocumentbyid method
      document.getElementById(id).value = ''
    } 

    // Prevents from inputting existing values in neighbors (except missing cases sometimes.
    // Dont think the board state is actually updating, but it's still rendering.
    // Something to do with re-rendering or state change timing? Try using await on this.

    if (!neighborVals.includes(value)) {
      const newBoard = [...board.slice(0, id), value, ...board.slice(id + 1)]
      setBoard(newBoard)
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