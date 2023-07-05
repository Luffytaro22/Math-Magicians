/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import calculate from '../logic/calculate';

// Child component
function CalculatorButton({ className, text, id }) {
  const [obj, setObj] = useState({ total: null, next: null, operation: null });

  const handleClick = (event) => {
    const operation = calculate(obj, event.target.textContent);

    setObj({
      total: operation.total,
      next: operation.next,
      operation: operation.operation,
    });

    console.log(operation);
    console.log(obj);
    const result = document.getElementById('result');
    result.textContent += event.target.textContent;
  };

  return (
    <button type="button" className={className} id={id} onClick={handleClick}>
      {text}
    </button>
  );
}

// Main calculator component
export default function Calculator() {
  return (
    <div id="calculator-container">
      <div id="result">0</div>
      <div id="operations-container">
        <CalculatorButton className="operations" text="AC" />
        <CalculatorButton className="operations" text="+/-" />
        <CalculatorButton className="operations" text="%" />
        <CalculatorButton className="operations right-operations" text="÷" />
        <CalculatorButton className="operations" text="7" />
        <CalculatorButton className="operations" text="8" />
        <CalculatorButton className="operations" text="9" />
        <CalculatorButton className="operations right-operations" text="x" />
        <CalculatorButton className="operations" text="4" />
        <CalculatorButton className="operations" text="5" />
        <CalculatorButton className="operations" text="6" />
        <CalculatorButton className="operations right-operations" text="-" />
        <CalculatorButton className="operations" text="1" />
        <CalculatorButton className="operations" text="2" />
        <CalculatorButton className="operations" text="3" />
        <CalculatorButton className="operations right-operations" text="+" />
        <CalculatorButton className="operations" id="zero-button" text="0" />
        <CalculatorButton className="operations" text="." />
        <CalculatorButton className="operations right-operations" text="=" />
      </div>
    </div>
  );
}
