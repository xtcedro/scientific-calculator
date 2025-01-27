// ThemeToggle.jsx
import React, { useState } from "react";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.className = isDarkMode ? "light-theme" : "dark-theme";
  };

  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      <span>{isDarkMode ? "Dark Mode" : "Light Mode"}</span>
      <div className={`theme-switch ${isDarkMode ? "active" : ""}`}></div>
    </div>
  );
};

export default ThemeToggle;