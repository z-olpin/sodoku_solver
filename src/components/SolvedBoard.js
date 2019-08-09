import React from 'react'

const SolvedBoard = ({ solvedBoard }) => {
  return (
    solvedBoard.map(v => <div style={{display: 'inline-block'}} className="row">{v}</div>)
  )
  }

export default SolvedBoard