import React, { useState } from "react";

import { numbers } from "../../../data";
import NumberButton from "./NumberButton";

const Numbers = props => {
  const [numbersList, setNumber] = useState(numbers);

  return (
    <div>
      {numbersList.map(number => (
        <NumberButton
          number={number}
          handleInput={props.handleInput}
          key={number}
        />
      ))}
    </div>
  );
};

export default Numbers;
