import React, { useState } from "react";

import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";

const Operators = () => {
  const [operatorsList, setOperators] = useState(operators);

  return (
    <div>
      {operatorsList.map(operator => (
        <OperatorButton key={operator.char} char={operator.char} />
      ))}
    </div>
  );
};

export default Operators;
