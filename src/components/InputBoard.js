import React from "react";

const InputBoard = ({ onInput, handleSolve }) => {
  return (
    <>
      {[...Array(81)].map((v, i) => (
        <input type="text" className="cells" id={i} onChange={(e) => onInput(Number(e.target.id), Number(e.target.value))} />
      ))}
      <button onClick={handleSolve}>SOLVE</button>
    </>
  );
};

export default InputBoard;
