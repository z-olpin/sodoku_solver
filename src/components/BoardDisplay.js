import React, { useState } from 'react'
import SolvedBoard from './SolvedBoard'
import InputBoard from "./InputBoard"
//import { getNeighbors, solveBoard } from "./solver";



const BoardDisplay = () => {

  const [board, setBoard] = useState([...Array(81).fill(0)])
  const [solvedBoard, setSolvedBoard] = useState([...Array(81).fill(0)])
  const [midBoard, setMidBoard] = useState([...Array(81).fill(0)])

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

  const handleSolve = (e) => {
  
  const solveBoard = (b) => {
    setTimeout(() => {
      let difference = (setA, setB) => {
          let _difference = new Set(setA)
          for (let e of setB) {
              _difference.delete(e)
          }
          return _difference
      }
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
              setMidBoard(try_board)
              let result = solveBoard(try_board)

              if (result) return result
              
          }
          return
      }
      return b
    }, 0)
    }


    e.preventDefault()
    const newBoard = solveBoard([...board])
    setSolvedBoard([...newBoard])
  }

  return (
    <>
      <InputBoard handleSolve={handleSolve} onInput={onInput} />
      {//<SolvedBoard solvedBoard={solvedBoard} oldBoard={board} />
      }
      <div>{midBoard}</div>
    </>
  )
}

export default BoardDisplay