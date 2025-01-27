// History.jsx
import React, { useState } from "react";
import "./History.css";

const History = () => {
  const [history, setHistory] = useState([]);

  // Function to add an entry to the history
  const addHistoryEntry = (entry) => {
    setHistory((prevHistory) => [entry, ...prevHistory]);
  };

  // Function to clear the history
  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div id="history-container">
      <div className="history-header">Calculation History</div>
      <ul className="history-list">
        {history.length > 0 ? (
          history.map((item, index) => (
            <li key={index} className="history-item">
              <span>{item}</span>
            </li>
          ))
        ) : (
          <li className="history-item">No history available</li>
        )}
      </ul>
      <button
        className="clear-history-button"
        onClick={clearHistory}
        disabled={history.length === 0}
      >
        Clear History
      </button>
    </div>
  );
};

export default History;