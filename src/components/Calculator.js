import React, { useState } from 'react';
import CalculatorButton from './calculatorButton';

// Main calculator component
export default function Calculator() {
  const [obj, setObj] = useState({ total: null, next: null, operation: null });

  return (
    <div id="calculator-container">
      <div id="result">0</div>
      <div id="operations-container">
        <CalculatorButton className="operations" text="AC" obj={obj} setObj={setObj} id="AC" />
        <CalculatorButton className="operations" text="+/-" obj={obj} setObj={setObj} id="+/-" />
        <CalculatorButton className="operations" text="%" obj={obj} setObj={setObj} id="%" />
        <CalculatorButton className="operations right-operations" text="÷" obj={obj} setObj={setObj} id="÷" />
        <CalculatorButton className="operations" text="7" obj={obj} setObj={setObj} id="7" />
        <CalculatorButton className="operations" text="8" obj={obj} setObj={setObj} id="8" />
        <CalculatorButton className="operations" text="9" obj={obj} setObj={setObj} id="9" />
        <CalculatorButton className="operations right-operations" text="x" obj={obj} setObj={setObj} id="x" />
        <CalculatorButton className="operations" text="4" obj={obj} setObj={setObj} id="4" />
        <CalculatorButton className="operations" text="5" obj={obj} setObj={setObj} id="5" />
        <CalculatorButton className="operations" text="6" obj={obj} setObj={setObj} id="6" />
        <CalculatorButton className="operations right-operations" text="-" obj={obj} setObj={setObj} id="-" />
        <CalculatorButton className="operations" text="1" obj={obj} setObj={setObj} id="1" />
        <CalculatorButton className="operations" text="2" obj={obj} setObj={setObj} id="2" />
        <CalculatorButton className="operations" text="3" obj={obj} setObj={setObj} id="3" />
        <CalculatorButton className="operations right-operations" text="+" obj={obj} setObj={setObj} id="+" />
        <CalculatorButton className="operations" id="zero-button" text="0" obj={obj} setObj={setObj} />
        <CalculatorButton className="operations" text="." obj={obj} setObj={setObj} id="." />
        <CalculatorButton className="operations right-operations" text="=" obj={obj} setObj={setObj} id="=" />
      </div>
    </div>
  );
}
