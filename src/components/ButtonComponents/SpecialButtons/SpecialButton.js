import React from "react";

const SpecialButton = props => {
  return (
    <>
      {
        <button onClick={() => props.handleInput(props.special)}>
          {props.special}
        </button>
      }
    </>
  );
};

export default SpecialButton;
