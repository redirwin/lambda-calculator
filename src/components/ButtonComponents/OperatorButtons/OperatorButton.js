import React from "react";

const OperatorButton = props => {
  return (
    <>
      {
        <button
          className="operator-button"
          onClick={() => props.handleInput(props.operator)}
        >
          {props.char}
        </button>
      }
    </>
  );
};

export default OperatorButton;
