import React, { useState } from "react";

import { numbers } from "../../../data";
import NumberButton from "./NumberButton";

const Numbers = props => {
  const [numbersList, setNumber] = useState(numbers);

  return (
    <div>
      {numbersList.map(number => (
        <NumberButton
          key={number}
          number={number}
          handleInput={props.handleInput}
        />
      ))}
    </div>
  );
};

export default Numbers;
