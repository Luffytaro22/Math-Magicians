export default function Calculator() {
  return (
    <div id="calculator-container">
      <div id="result" />
      <div id="operations-container">
        <button type="button" className="operations">AC</button>
        <button type="button" className="operations">+/-</button>
        <button type="button" className="operations">%</button>
        <button type="button" className="operations">÷</button>
        <button type="button" className="operations">7</button>
        <button type="button" className="operations">8</button>
        <button type="button" className="operations">9</button>
        <button type="button" className="operations">X</button>
        <button type="button" className="operations">4</button>
        <button type="button" className="operations">5</button>
        <button type="button" className="operations">6</button>
        <button type="button" className="operations">-</button>
        <button type="button" className="operations">1</button>
        <button type="button" className="operations">2</button>
        <button type="button" className="operations">3</button>
        <button type="button" className="operations">+</button>
        <button type="button" className="operations">0</button>
        <button type="button" className="operations">.</button>
        <button type="button" className="operations">=</button>
      </div>
    </div>
  );
}
