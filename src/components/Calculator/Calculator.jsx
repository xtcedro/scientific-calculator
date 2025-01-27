// Calculator.jsx
import React, { useState } from "react";
import "./Calculator.css";
import {
  calculate,
  scientificOperation,
  storeMemory,
  recallMemory,
  clearMemory,
} from "./utils/calculatorFunctions";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [currentOperator, setCurrentOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);

  const handleButtonClick = (value) => {
    if (!isNaN(value)) {
      setDisplayValue((prev) => (prev === "0" ? value : prev + value));
    } else if (value === "C") {
      setDisplayValue("0");
      setPreviousValue(null);
      setCurrentOperator(null);
    } else if (value === "=") {
      if (currentOperator && previousValue !== null) {
        const result = calculate(
          parseFloat(previousValue),
          parseFloat(displayValue),
          currentOperator
        );
        setDisplayValue(result.toString());
        setPreviousValue(null);
        setCurrentOperator(null);
      }
    } else if (value === "M+") {
      storeMemory(parseFloat(displayValue));
    } else if (value === "MR") {
      setDisplayValue(recallMemory().toString());
    } else if (value === "MC") {
      clearMemory();
    } else {
      setCurrentOperator(value);
      setPreviousValue(displayValue);
      setDisplayValue("0");
    }
  };

  const handleScientificOperation = (operation) => {
    try {
      const result = scientificOperation(operation, parseFloat(displayValue));
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue("Error");
    }
  };

  const renderButton = (label, className = "") => (
    <button
      className={`calculator-button ${className}`.trim()}
      onClick={() => handleButtonClick(label)}
    >
      {label}
    </button>
  );

  return (
    <div id="calculator-container">
      <div className="calculator-display">{displayValue}</div>
      <div className="calculator-buttons">
        {["7", "8", "9", "/"].map((btn) => renderButton(btn))}
        {["4", "5", "6", "*"].map((btn) => renderButton(btn))}
        {["1", "2", "3", "-"].map((btn) => renderButton(btn))}
        {["0", ".", "=", "+"].map((btn) => renderButton(btn, btn === "=" ? "button-equal" : ""))}
        {renderButton("C", "button-clear")}
        {["sin", "cos", "tan", "log", "ln", "sqrt", "exp", "factorial"].map((op) => (
          <button
            key={op}
            className="calculator-button"
            onClick={() => handleScientificOperation(op)}
          >
            {op}
          </button>
        ))}
        {renderButton("M+", "button-memory")}
        {renderButton("MR", "button-memory")}
        {renderButton("MC", "button-memory")}
      </div>
    </div>
  );
};

export default Calculator;