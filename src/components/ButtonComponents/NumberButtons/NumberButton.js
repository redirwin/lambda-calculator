import React from "react";

const NumberButton = props => {
  return (
    <>
      {
        <button onClick={() => props.handleInput(props.number)}>
          {props.number}
        </button>
      }
    </>
  );
};

export default NumberButton;
