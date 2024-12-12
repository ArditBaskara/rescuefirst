import React from "react";
import "./Card.css";

const Card = ({ 
  title, 
  value, 
  unit, 
  subtitle, 
  min, 
  max, 
  color, 
  icon, 
  description 
}) => {
  return (
    <div className="card" style={{ borderColor: color }}>
      <div className="card-header">
        <div className="card-icon" style={{ backgroundColor: color }}>
          {icon}
        </div>
        <h4 className="card-title">{title}</h4>
      </div>
      <div className="card-value">
        <span style={{ color }}>{value}</span>
        <span>{unit}</span>
      </div>
      <p className="card-subtitle">{subtitle}</p>
      <div className="card-description">
        <p>{description}</p>
        <p>
          {min} - {max}
        </p>
      </div>
    </div>
  );
};

export default Card;
