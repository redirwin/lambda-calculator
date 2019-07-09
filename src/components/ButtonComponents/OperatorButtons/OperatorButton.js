import React from "react";

const OperatorButton = props => {
  return (
    <>
      {
        <button onClick={() => props.handleInput(props.char)}>
          {props.char}
        </button>
      }
    </>
  );
};

export default OperatorButton;
