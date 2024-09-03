import React, { useState } from 'react';
import { evaluate, sin, cos, tan, log, sqrt, pow } from 'mathjs';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [calculations, setCalculations] = useState([]);

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleEqual = () => {
    try {
      const result = evaluate(input);
      const newCalculation = `${input} = ${result}`;
      setInput(result.toString());

      setCalculations((prevCalculations) => {
        const updatedCalculations = [newCalculation, ...prevCalculations];
        return updatedCalculations.slice(0, 50); // Keep only the last 50 calculations
      });
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  const handlePercentage = () => {
    try {
      const result = evaluate(input) / 100;
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleUsePastCalculation = (calc) => {
    setInput(calc.split(' = ')[0]);
  };

  return (
    <div className="calculator-container">
      <h1>Scientific Calculator</h1>
      <input
        type="text"
        value={input}
        readOnly
        className="calculator-display"
      />
      <div className="button-grid">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={handlePercentage}>%</button>
        <button onClick={handleEqual}>=</button>
        <button onClick={handleClear}>C</button>
      </div>
      <div className="scientific-functions">
        <button onClick={() => handleClick('sin(')}>sin</button>
        <button onClick={() => handleClick('cos(')}>cos</button>
        <button onClick={() => handleClick('tan(')}>tan</button>
        <button onClick={() => handleClick('log(')}>log</button>
         <button onClick={() => handleClick('sqrt(')}>√</button>
        <button onClick={() => handleClick('cbrt(')}>3√</button>
        <button onClick={() => handleClick('(')}>(</button>
        <button onClick={() => handleClick(')')}>)</button>
        <button onClick={() => handleClick('^')}>^</button>
      </div>
      <h2>Past Calculations</h2>
      <ul className="past-calculations">
        {calculations.map((calc, index) => (
          <li key={index} onClick={() => handleUsePastCalculation(calc)}>
            {calc}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
