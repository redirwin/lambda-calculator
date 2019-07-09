import React from "react";

const OperatorButton = props => {
  return (
    <>
      {
        <button onClick={() => props.handleInput(props.operator)}>
          {props.char}
        </button>
      }
    </>
  );
};

export default OperatorButton;
