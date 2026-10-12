import { useState, useEffect } from "react";
import "../App.css";

import { NavLink } from "react-router-dom";


function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className="header">
      <div className="div-icon">
        <img
          width="70px"
          src="/assets/gradition-cap.svg"
          alt="TestCenter logo"
        />
        <h1>TestUz</h1>
      </div>

      <nav>
        <NavLink to="/">
          Bosh sahifa
        </NavLink>
        <NavLink to="/Subject">
          Fanlar
        </NavLink>
        <NavLink to="">
          Natijalar
        </NavLink>
        <NavLink to="">
          Projil
        </NavLink>
      </nav>

      <div>
        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

        <button className="Krish-btn">Kirish</button>
      </div>
    </div>
  );
}

export default Header;