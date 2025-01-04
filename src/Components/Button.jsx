import React from "react";
import "./Button.css";

const Button = ({ text, onClick, color, textColor, style }) => {
  return (
    <button
      onClick={onClick}
      className="custom-button"
      style={{
        backgroundColor: color,
        color: textColor,
        ...style, // Tambahkan style tambahan jika diperlukan
      }}
    >
      {text}
    </button>
  );
};

export default Button;
