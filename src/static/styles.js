const styles = {
  cell: {
    width: "50px",
    height: "50px",
    border: "1px solid black",
    font: "2em Helvetica",
    textAlign: "center"
  },
  squareRow: {
    flexDirection: "row",
    display: "flex",
    width: "150px",
    height: "50px"
  },
  square: {
    flex: "1",
    border: "1px solid black",
    width: "150px",
    height: "150px"
  },
  row: {
    flex: "1",
    display: "flex"
  },
  board: {
    margin: "2rem",
    width: "456px",
    display: "flex",
    flexDirection: "column",
    flexBasis: "1",
    border: "2px solid black"
  },
  boardContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "space-evenly",
    alignItems: "flex-start"
  },
  button: {
    padding: "15px",
    backgroundColor: "#CCDDDD",
    fontSize: "3rem",
    fontFamily: "helvetica",
    fontWeight: "bold",
    color: "#555555",
    border: "2px solid black",
    letterSpacing: "4"
  }
};

export default styles;
