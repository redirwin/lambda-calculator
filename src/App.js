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
  const [expression, updateExpression] = useState();

  function handleInput(input) {
    switch (input) {
      case "C":
        updateDisplay("");
        updateExpression();
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
        updateDisplay();
        updateExpression();
        break;

      case "=":
        let answer = eval(expression);
        updateDisplay(answer);
        updateExpression();

        break;

      default:
        updateDisplay(display.concat(input));
    }
  }

  // function togglePositive() {
  //   let newDisplay = "";
  //   display.slice(0, 1) !== "-"
  //     ? (newDisplay = `-${display}`)
  //     : (newDisplay = display.slice(1, display.length));
  //   updateDisplay(newDisplay);
  // }

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
