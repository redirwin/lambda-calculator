import React, { useState } from "react";

import { numbers } from "../../../data";
import NumberButton from "./NumberButton";

const Numbers = () => {
  const [numbersList, setNumber] = useState(numbers);

  return (
    <div>
      {numbersList.map(number => (
        <NumberButton number={number} key={number} />
      ))}
    </div>
  );
};

export default Numbers;
