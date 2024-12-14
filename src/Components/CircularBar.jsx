import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PropTypes from "prop-types";
import "./CircularBar.css"; // Import file CSS

const CircularBar = ({
  title,
  value,
  unit,
  min,
  max,
  color,
  icon,
  description,
}) => {
  const percentage = max > min ? ((value - min) / (max - min)) * 100 : 0;

  return (
    <div className="circular-bar-container">
      <h4 className="circular-bar-title">{title}</h4>

      {/* Menampilkan icon jika ada */}
      {icon && <div className="circular-bar-icon">{icon}</div>}

      <CircularProgressbar
        value={percentage}
        text={`${value}${unit}`}
        styles={buildStyles({
          pathColor: color,
          textColor: "#fff",
          trailColor: "#d6d6d6",
        })}
      />

      <div className="circular-bar-footer">
        <span>{min}</span>
        <span>{max}</span>
      </div>

      <p className="circular-bar-description">{description}</p>
    </div>
  );
};

// Menambahkan validasi props
CircularBar.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.element,
  description: PropTypes.string,
};

export default CircularBar;
