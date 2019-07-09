import React, { useState } from "react";
import "./normalize.scss";
import "./App.scss";

import Numbers from "../src/components/ButtonComponents/NumberButtons/Numbers";
import Operators from "../src/components/ButtonComponents/OperatorButtons/Operators";
import Specials from "../src/components/ButtonComponents/SpecialButtons/Specials";
import Display from "../src/components/DisplayComponents/Display";
import Logo from "./components/DisplayComponents/Logo";

function App() {
  const [display, updateDisplay] = useState("");

  function handleInput(input) {
    switch (input) {
      case "=":
        evaluate(display);
        break;
      case "C":
        updateDisplay("");
        break;

      default:
        updateDisplay(display.concat(input));
    }
  }

  function evaluate(display) {
    console.log("Evaluate this: ", display);
    updateDisplay(eval(display));
  }

  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display display={display} />
        <Specials handleInput={handleInput} />
        <Numbers handleInput={handleInput} />
        <Operators handleInput={handleInput} />
      </div>
    </div>
  );
}

export default App;
