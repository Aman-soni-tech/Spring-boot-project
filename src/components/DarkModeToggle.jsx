import React, { useState, useEffect } from "react";
import "./booklist/DarkModeToggle.css"; // ✅ CSS File

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;