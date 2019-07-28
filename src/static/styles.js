const styles = {
    cell: {
      width: '50px',
      height: '50px',
      border: '1px solid black',
      font: '2em Helvetica',
      textAlign: 'center'
    },
    squareRow: {
      flexDirection: 'row',
      display: 'flex',
      width: '150px',
      height: '50px'
    },
    square: {
      flex: '1',
      border: '1px solid black',
      width: '150px',
      height: '150px'
    },
    row: {
      flex: '1',
      display: 'flex'
    },
    board: {
      margin: '2rem',
      width: '456px',
      display: 'flex',
      flexDirection: 'column',
      flexBasis: '1',
      border: '2px solid black'
    },
    boardContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignContent: 'space-evenly',
      alignItems: 'center'
      
    }
  }



  export default styles