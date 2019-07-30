import React from 'react'
import styles from '../static/styles'
import BoardDisplay from "./BoardDisplay";

const App = () => {
  return (
    <>
      <h1 style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Sodoku Solver</h1>
      <div style={styles.boardContainer}>
        
        <BoardDisplay />
      </div>
    </>
  )
}

export default App