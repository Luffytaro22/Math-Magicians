/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import calculate from '../logic/calculate';

// Child component
function CalculatorButton({
  className, text, id, obj, setObj,
}) {
  const handleClick = (event) => {
    const operation = calculate(obj, event.target.textContent);

    setObj((oldObj) => ({
      ...oldObj,
      ...operation,
    }));

    const result = document.getElementById('result');
    // If there's a zero, update the content.
    if (result.textContent === '0') {
      result.textContent = '';
    }
    // Concat the operations.
    result.textContent += event.target.textContent;
    // If the user press equal, display the result.
    if (event.target.textContent === '=') {
      result.textContent = '';
      result.textContent = operation.total || '0';
    } else if (event.target.textContent === 'AC') {
      result.textContent = '0';
    }
  };

  return (
    <button type="button" className={className} id={id} onClick={handleClick}>
      {text}
    </button>
  );
}

// Main calculator component
export default function Calculator() {
  const [obj, setObj] = useState({ total: null, next: null, operation: null });

  return (
    <div id="calculator-container">
      <div id="result">0</div>
      <div id="operations-container">
        <CalculatorButton className="operations" text="AC" obj={obj} setObj={setObj} />
        <CalculatorButton className="operations" text="+/-" obj={obj} setObj={setObj} />
        <CalculatorButton className="operations" text="%" obj={obj} setObj={setObj} />
        <CalculatorButton className="operations right-operations" text="÷" obj={obj} setObj={setObj} />
        <CalculatorButton className="operations" text="7" obj={obj} setObj={setObj} />
        <CalculatorButton className="operations" text="8" obj={obj} setObj={setObj} />
        <CalculatorButton className="operations" text="9" obj={obj} setObj={setObj} />
        <CalculatorButton className="operations right-operations" text="x" obj={obj} setObj={setObj} />
        <CalculatorButton className="operations" text="4" obj={obj} setObj={setObj} />
        <CalculatorButton className="operations" text="5" obj={obj} setObj={setObj} />
        <CalculatorButton className="operations" text="6" obj={obj} setObj={setObj} />
        <CalculatorButton className="operations right-operations" text="-" obj={obj} setObj={setObj} />
        <CalculatorButton className="operations" text="1" obj={obj} setObj={setObj} />
        <CalculatorButton className="operations" text="2" obj={obj} setObj={setObj} />
        <CalculatorButton className="operations" text="3" obj={obj} setObj={setObj} />
        <CalculatorButton className="operations right-operations" text="+" obj={obj} setObj={setObj} />
        <CalculatorButton className="operations" id="zero-button" text="0" obj={obj} setObj={setObj} />
        <CalculatorButton className="operations" text="." obj={obj} setObj={setObj} />
        <CalculatorButton className="operations right-operations" text="=" obj={obj} setObj={setObj} />
      </div>
    </div>
  );
}
