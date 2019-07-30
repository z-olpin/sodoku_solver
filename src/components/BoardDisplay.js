import React, { useState } from 'react'
import SolvedBoard from './SolvedBoard'
import InputBoard from "./InputBoard"
import solveBoard from './solver'

const BoardDisplay = () => {

  const [board, setBoard] = useState([...Array(81)])
  const [solvedBoard, setSolvedBoard] = useState([...Array(81)])

  const onInput = (id, value) => {
    document.getElementById(id).style.backgroundColor = 'lightgrey'
    document.getElementById(id+100).style.backgroundColor = 'lightgrey'
    document.getElementById(id+100).innerText = value
    const newBoard = [...board.slice(0, id), value, ...board.slice(id + 1)]
    setBoard(newBoard)
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