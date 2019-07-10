import React, { useState } from "react";

import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";

const Specials = props => {
  const [specialsList, setSpecials] = useState(specials);

  return (
    <div>
      {specialsList.map(special => (
        <SpecialButton
          key={special}
          special={special}
          handleInput={props.handleInput}
        />
      ))}
    </div>
  );
};

export default Specials;
