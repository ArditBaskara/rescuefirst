import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 50px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#000",
        }}
      >
        <span style={{ color: "red" }}>Rescue</span>First
      </div>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "30px",
          margin: "0",
          padding: "0",
        }}
      >
        <li>
          <a href="#about" style={{ textDecoration: "none", color: "#000" }}>
            About
          </a>
        </li>
        <li>
          <a href="#tour" style={{ textDecoration: "none", color: "#000" }}>
            Tour
          </a>
        </li>
        <li>
          <a href="#package" style={{ textDecoration: "none", color: "#000" }}>
            Package
          </a>
        </li>
        <li>
          <a href="#contact" style={{ textDecoration: "none", color: "#000" }}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
