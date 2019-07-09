import React, { useState } from "react";

import { specials } from "../../../data";

const Specials = () => {
  const [specialsList, setSpecials] = useState(specials);
  console.log(specialsList);

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Specials;
