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
      case "C":
        updateDisplay("");
        break;

      case "+/-":
        if (!display) {
          updateDisplay(display);
        } else {
          let newDisplay = "";
          display.slice(0, 1) !== "-"
            ? (newDisplay = `-${display}`)
            : (newDisplay = display.slice(1, display.length));
          updateDisplay(newDisplay);
        }
        break;

      case "%":
      case "+":
      case "-":
      case "*":
      case "/":
        updateDisplay(display.concat(input));

        break;

      case "=":
        updateDisplay(eval(display).toString());

        break;

      default:
        updateDisplay(display.concat(input));
    }
  }

  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display display={display} />
        <div className="button-container">
          <div className="col-left">
            <Specials handleInput={handleInput} />
            <Numbers handleInput={handleInput} />
          </div>
          <div className="col-right">
            <Operators handleInput={handleInput} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
