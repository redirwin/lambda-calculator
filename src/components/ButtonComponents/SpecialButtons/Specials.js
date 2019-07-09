import React, { useState } from "react";

import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";

const Specials = () => {
  const [specialsList, setSpecials] = useState(specials);

  return (
    <div>
      {specialsList.map(special => (
        <SpecialButton key={special} special={special} />
      ))}
    </div>
  );
};

export default Specials;
