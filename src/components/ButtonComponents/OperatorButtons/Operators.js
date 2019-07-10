import React, { useState } from "react";

import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";

const Operators = props => {
  const [operatorsList, setOperators] = useState(operators);

  return (
    <div className="operators-container">
      {operatorsList.map(operator => (
        <OperatorButton
          key={operator.char}
          char={operator.char}
          operator={operator.value}
          handleInput={props.handleInput}
        />
      ))}
    </div>
  );
};

export default Operators;
