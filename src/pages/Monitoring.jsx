import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../Firebase/Firebase"; 
import Card from "../Components/Card";
import "./Monitoring.css";

const MonitoringPage = () => {
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);

  useEffect(() => {
    // Referensi ke node "data/Temperature" di Realtime Database
    const temperatureRef = ref(database, "data/Temperature");
    const humidityRef = ref(database, "data/Humidity");

    // Mendapatkan data Temperature dari Firebase
    onValue(temperatureRef, (snapshot) => {
      const data = snapshot.val();
      setTemperature(data);
    });

    // Mendapatkan data Humidity dari Firebase
    onValue(humidityRef, (snapshot) => {
      const data = snapshot.val();
      setHumidity(data);
    });
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", padding: "20px" }}>
      <h1 style={{ color: "#fff", marginBottom: "20px" }}>Monitoring Page</h1>
      <Card
        title="Temperature"
        value={temperature !== null ? temperature : "--"}
        unit="°C"
        subtitle="Current Temperature"
        min="0"
        max="50°C"
        color="#ff8c00"
        icon={<i className="fas fa-thermometer-half"></i>}
        description="Ideal range: 20 - 25°C"
      />
      <Card
        title="Humidity"
        value={humidity !== null ? humidity : "--"}
        unit="%"
        subtitle="Current Humidity"
        min="0"
        max="100%"
        color="#007bff"
        icon={<i className="fas fa-tint"></i>}
        description="Ideal range: 40 - 60%"
      />
    </div>
  );
};

export default MonitoringPage;
