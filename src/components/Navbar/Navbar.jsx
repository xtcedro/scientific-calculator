// Navbar.jsx
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const links = [
    { href: "#calculator", label: "Calculator" },
    { href: "#graphing", label: "Graphing" },
    { href: "#history", label: "History" },
  ];

  return (
    <nav>
      <a href="#" className="logo">SciCalc</a>
      <ul className="nav-links">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;