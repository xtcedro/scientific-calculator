// App.jsx
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Calculator from "./components/Calculator/Calculator";
import Graph from "./components/Graph/Graph";
import History from "./components/History/History";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

const App = () => {
  return (
    <div className="app">
      <header>
        <Navbar />
        <ThemeToggle />
      </header>
      <main>
        <div id="calculator">
          <Calculator />
        </div>
        <div id="graphing">
          <Graph />
        </div>
        <div id="history">
          <History />
        </div>
      </main>
      <footer>
        <p>Built with ❤️ in Oklahoma City 🌆</p>
        <p>&copy; 2025 Scientific Graphing Calculator. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;