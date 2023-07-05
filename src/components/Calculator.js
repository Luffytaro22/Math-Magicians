/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import calculate from '../logic/calculate';

// Child component
function CalculatorButton({
  className, text, id, handleClick,
}) {
  return (
    <button type="button" className={className} id={id} onClick={handleClick}>
      {text}
    </button>
  );
}

// Main calculator component
export default function Calculator() {
  const obj = useState({ total: '', next: '', operation: '' });

  const handleClick = (event) => {
    console.log(event.target);
    const operationResult = calculate(obj, event.target.value).total;
    const result = document.getElementById('result');
    result.textContent = operationResult;
  };

  return (
    <div id="calculator-container">
      <div id="result">0</div>
      <div id="operations-container">
        <CalculatorButton className="operations" text="AC" onClick={handleClick} />
        <CalculatorButton className="operations" text="+/-" onClick={handleClick} />
        <CalculatorButton className="operations" text="%" onClick={handleClick} />
        <CalculatorButton className="operations right-operations" text="÷" onClick={handleClick} />
        <CalculatorButton className="operations" text="7" onClick={handleClick} />
        <CalculatorButton className="operations" text="8" onClick={handleClick} />
        <CalculatorButton className="operations" text="9" onClick={handleClick} />
        <CalculatorButton className="operations right-operations" text="x" onClick={handleClick} />
        <CalculatorButton className="operations" text="4" onClick={handleClick} />
        <CalculatorButton className="operations" text="5" onClick={handleClick} />
        <CalculatorButton className="operations" text="6" onClick={handleClick} />
        <CalculatorButton className="operations right-operations" text="-" onClick={handleClick} />
        <CalculatorButton className="operations" text="1" onClick={handleClick} />
        <CalculatorButton className="operations" text="2" onClick={handleClick} />
        <CalculatorButton className="operations" text="3" onClick={handleClick} />
        <CalculatorButton className="operations right-operations" text="+" onClick={handleClick} />
        <CalculatorButton className="operations" id="zero-button" text="0" onClick={handleClick} />
        <CalculatorButton className="operations" text="." onClick={handleClick} />
        <CalculatorButton className="operations right-operations" text="=" onClick={handleClick} />
      </div>
    </div>
  );
}
