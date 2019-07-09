import React, { useState } from "react";

import { numbers } from "../../../data";

const Numbers = () => {
  const [numbersList, setNumber] = useState(numbers);
  console.log(numbersList);

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Numbers;
