//TODOS:
//Prevent unsolvable boards ->
//Validate input. Invalidate on attempted entry
//Use css Flex-box or grid or whatever to properly layout
//Design
//Host

import React, { useState, useEffect } from 'react'
import solveBoard from './solver'
import styles from '../static/styles'


let Board = () => {
  return (
    <div className="Board" style={{margin: '2rem', width: '456px', display: 'flex', flexDirection: 'column', flexBasis: '1', border: '2px solid black'}}>
      <Row />
      <Row />
      <Row />
    </div>
  )
}

let Row = () => {
  return (
    <div className="row" style={{flex: '1', display: 'flex'}}>
      <Square /><Square /><Square />
    </div>
  )
}

let Square = () => {
  return (
    <div className="square" style={{flex: '1', border: '1px solid black', width: '150px'}}>
      <InputRow />
      <InputRow />
      <InputRow />
    </div>
  )
}

let InputRow = () => {
  return (
    <div className="inputRow" style={{flexDirection: 'row', display: 'flex', width: '150px'}}>
      {[...Array(3).keys()].map(n => <input type="text" maxLength={1} onChange={()=>{}} style={{width: '50px', height: '50px', border: '1px solid black'}}/>)}
    </div>
  )
}

let SolvedDisplay = (props) => {
  const [solvedBoard, setSolvedBoard] = useState([...Array(81)])

  let handleSolve = (e) => {
    e.preventDefault()
    let newBoard = solveBoard([...props.board])
    setSolvedBoard(newBoard)
  }

  const fromStartBoard = (row, n) => {
    return (props.board[row*9+n]) ? true : false
  }

  //TODO: Get rid of ternaries for style. Just pass whatever to a function that returns a style object

  return (
    <div>
        <p />
        <button style={styles.button} onClick={handleSolve}>SOLVE</button>
        <p />
        <div>{[...Array(9).keys()].map(n => <div style={{...styles.all, ...((n%3==0 && !(n%9==0)) ? styles.leftBorder : styles.regularBorder), ...((fromStartBoard(0, n)) ? styles.startColor : styles.otherColor)}}>{solvedBoard[0*9+n]}</div>)}</div>
        <div>{[...Array(9).keys()].map(n => <div style={{...styles.all, ...((n%3==0 && !(n%9==0)) ? styles.leftBorder : styles.regularBorder), ...((fromStartBoard(1, n)) ? styles.startColor : styles.otherColor)}}>{solvedBoard[1*9+n]}</div>)}</div>
        <div>{[...Array(9).keys()].map(n => <div style={{...styles.all, ...((n%3==0 && !(n%9==0)) ? styles.leftBorder : styles.regularBorder), ...((fromStartBoard(2, n)) ? styles.startColor : styles.otherColor), ...styles.bottomBorder}}>{solvedBoard[2*9+n]}</div>)}</div>
        <div>{[...Array(9).keys()].map(n => <div style={{...styles.all, ...((n%3==0 && !(n%9==0)) ? styles.leftBorder : styles.regularBorder), ...((fromStartBoard(3, n)) ? styles.startColor : styles.otherColor)}}>{solvedBoard[3*9+n]}</div>)}</div>
        <div>{[...Array(9).keys()].map(n => <div style={{...styles.all, ...((n%3==0 && !(n%9==0)) ? styles.leftBorder : styles.regularBorder), ...((fromStartBoard(4, n)) ? styles.startColor : styles.otherColor)}}>{solvedBoard[4*9+n]}</div>)}</div>
        <div>{[...Array(9).keys()].map(n => <div style={{...styles.all, ...((n%3==0 && !(n%9==0)) ? styles.leftBorder : styles.regularBorder), ...((fromStartBoard(5, n)) ? styles.startColor : styles.otherColor), ...styles.bottomBorder}}>{solvedBoard[5*9+n]}</div>)}</div>
        <div>{[...Array(9).keys()].map(n => <div style={{...styles.all, ...((n%3==0 && !(n%9==0)) ? styles.leftBorder : styles.regularBorder), ...((fromStartBoard(6, n)) ? styles.startColor : styles.otherColor)}}>{solvedBoard[6*9+n]}</div>)}</div>
        <div>{[...Array(9).keys()].map(n => <div style={{...styles.all, ...((n%3==0 && !(n%9==0)) ? styles.leftBorder : styles.regularBorder), ...((fromStartBoard(7, n)) ? styles.startColor : styles.otherColor)}}>{solvedBoard[7*9+n]}</div>)}</div>
        <div>{[...Array(9).keys()].map(n => <div style={{...styles.all, ...((n%3==0 && !(n%9==0)) ? styles.leftBorder : styles.regularBorder), ...((fromStartBoard(8, n)) ? styles.startColor : styles.otherColor)}}>{solvedBoard[8*9+n]}</div>)}</div>
    </div>
  )
}

let InputBoard = () => {
  const [board, setBoard] = useState([...Array(81)])
  
  let entry = (e) => {
    let newBoard = [...board]
    newBoard[e.target.id] = Number(e.target.value)
    setBoard(newBoard)
  }


  return (
    <div>
      <div>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}><Board /><Board /></div>
        <div>{[...Array(9).keys()].map(n => <input type="text" maxLength={1} onChange={entry} id={n+ 0} style={{...((n%3==0 && !(n%9==0)) ? styles.inputLeftBorder: styles.inputStyles)}} />)}</div>
        <div>{[...Array(9).keys()].map(n => <input type="text" maxLength={1} onChange={entry} id={n+ 9} style={{...((n%3==0 && !(n%9==0)) ? styles.inputLeftBorder : styles.inputStyles)}} />)}</div>
        <div>{[...Array(9).keys()].map(n => <input type="text" maxLength={1} onChange={entry} id={n+18} style={{...((n%3==0 && !(n%9==0)) ? styles.inputLeftBorder : styles.inputStyles), ...styles.inputBottomBorder}} />)}</div>
        <div>{[...Array(9).keys()].map(n => <input type="text" maxLength={1} onChange={entry} id={n+27} style={{...((n%3==0 && !(n%9==0)) ? styles.inputLeftBorder : styles.inputStyles)}} />)}</div>
        <div>{[...Array(9).keys()].map(n => <input type="text" maxLength={1} onChange={entry} id={n+36} style={{...((n%3==0 && !(n%9==0)) ? styles.inputLeftBorder : styles.inputStyles)}} />)}</div>
        <div>{[...Array(9).keys()].map(n => <input type="text" maxLength={1} onChange={entry} id={n+45} style={{...((n%3==0 && !(n%9==0)) ? styles.inputLeftBorder : styles.inputStyles), ...styles.inputBottomBorder}} />)}</div>
        <div>{[...Array(9).keys()].map(n => <input type="text" maxLength={1} onChange={entry} id={n+54} style={{...((n%3==0 && !(n%9==0)) ? styles.inputLeftBorder : styles.inputStyles)}} />)}</div>
        <div>{[...Array(9).keys()].map(n => <input type="text" maxLength={1} onChange={entry} id={n+63} style={{...((n%3==0 && !(n%9==0)) ? styles.inputLeftBorder : styles.inputStyles)}} />)}</div>
        <div>{[...Array(9).keys()].map(n => <input type="text" maxLength={1} onChange={entry} id={n+72} style={{...((n%3==0 && !(n%9==0)) ? styles.inputLeftBorder : styles.inputStyles)}} />)}</div>
      </div>
      <SolvedDisplay board={board} />
      <p />
    </div>
  )
}


const App = () => {
  return <InputBoard />
}

export default App