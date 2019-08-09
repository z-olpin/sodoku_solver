import React from "react";
import BoardDisplay from "./BoardDisplay";

const App = () => {
  return (
    <>
      <h1 style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
        Sodoku Solver
      </h1>
      <BoardDisplay />
    </>
  );
};

export default App;
