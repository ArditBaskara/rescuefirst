import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../Firebase/Firebase";
import CircularBar from "../Components/CircularBar";
import WeatherCard from "../Components/WeatherCard";
import "./Monitoring.css";

const MonitoringPage = () => {
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [rainStatus, setRainStatus] = useState(false);
  const [analogValue, setAnalogValue] = useState(0);

  useEffect(() => {
    const temperatureRef = ref(database, "data/Temperature");
    const humidityRef = ref(database, "data/Humidity");
    const raindropRef = ref(database, "data/Raindrop");

    onValue(temperatureRef, (snapshot) => {
      const data = snapshot.val();
      setTemperature(data);
    });

    onValue(humidityRef, (snapshot) => {
      const data = snapshot.val();
      setHumidity(data);
    });

    onValue(raindropRef, (snapshot) => {
      const data = snapshot.val();
      setAnalogValue(data.analogValue);
      setRainStatus(data.rainStatus);
    });
  }, []);

  // Logika untuk menentukan warna
  const getTemperatureColor = (value) => {
    if (value < 20) return "#87CEFA";
    if (value > 25) return "#db1514";
    return "#ff8c00";
  };

  const getHumidityColor = (value) => {
    if (value < 40) return "#D2B48C";
    if (value > 60) return "#00008B";
    return "#007bff";
  };

  const getRaindropColor = (value) => {
    return value ? "#0000FF" : "#808080"; // Blue if raining, gray if not
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        padding: "20px",
      }}
    >
      <h1 style={{ color: "#fff", marginBottom: "20px" }}>Monitoring Page</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "100px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <WeatherCard />
        </div>
        <CircularBar
          title="Temperature"
          value={temperature !== null ? temperature : 0}
          unit="°C"
          min={0}
          max={100}
          color={getTemperatureColor(temperature)}
          icon={<i className="fas fa-thermometer-half"></i>}
          description="Ideal range: 20 - 25°C"
        />
        <CircularBar
          title="Humidity"
          value={humidity !== null ? humidity : 0}
          unit="%"
          min={0}
          max={100}
          color={getHumidityColor(humidity)}
          icon={<i className="fas fa-tint"></i>}
          description="Ideal range: 40 - 60%"
        />
        <CircularBar
          title="Raindrop"
          value={rainStatus ? "ujan" : "ga ujan"}
          unit=""
          min={0}
          max={1}
          color={getRaindropColor(rainStatus)}
          icon={<i className="fas fa-cloud-rain"></i>}
          description={`Analog Value: ${analogValue}`}
        />
      </div>
    </div>
  );
};

export default MonitoringPage;
