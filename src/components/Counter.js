import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCounter from "../hooks/useCounter";
import React from 'react'

export default function Counter() {
  const history = useNavigate();
  const { count, increment, decrement, reset, setValue } = useCounter();
  const [customValue, setCustomValue] = useState("");
   // State for custom value

  const handleSetCustomValue = () => {
    // Check if the input is a valid number
    const numericValue = parseFloat(customValue);
    if (!isNaN(numericValue)) {
      setValue(numericValue);
      setCustomValue(""); // Clear the input field
    }
  };

  const triggerError = () => {
    try {
      // this is me trying to access a property of undefined
      let someUndefinedVariable;
      const undefinedVariable = someUndefinedVariable.property;
      return undefinedVariable;
    } catch (error) {
      // when an error occurs, i navigate to the error page
      history("/error");
    }
  };

  return (
    <div className="container">
      <h1>My Counter App</h1>
      <div className='display-value'> {count}</div>

      <button title= 'Decrement counter by 1' className="counter-button btn1" onClick={decrement}>
        -
      </button>

      <button  title='Initialize counter' className="counter-button btn2" onClick={reset}>
        Reset
      </button>

      <button title='Increment counter by 1' className="counter-button btn3" onClick={increment}>
        +
      </button>
      <div className="custom-value-container btn4">
        <input
          type="number"
          placeholder="Enter a value of choice"
          value={customValue}
          onChange={(e) => setCustomValue(e.target.value)}
        />
        <button className="customValue-button" onClick={handleSetCustomValue}>
          Enter
        </button>
      </div>

      <button onClick={triggerError} className="trigger-button">
        {" "}
        Click Me To Trigger an Error
      </button>
      
    </div>
  );
}