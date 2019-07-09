import React, { useState } from "react";

import { operators } from "../../../data";

const Operators = () => {
  const [operatorsList, setOperators] = useState(operators);
  console.log(operatorsList);

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Operators;
