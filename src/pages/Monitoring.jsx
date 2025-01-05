import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../Firebase/Firebase";
import CircularBar from "../Components/CircularBar";
import "./Monitoring.css";

const MonitoringPage = () => {
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [rainStatus, setRainStatus] = useState("No Rain"); // Default value should be 'No Rain'
  const [analogValue, setAnalogValue] = useState(0);

  useEffect(() => {
    const temperatureRef = ref(database, "data/Temperature");
    const humidityRef = ref(database, "data/Humidity");
    const raindropRef = ref(database, "data/RainStatus"); // Use the correct Firebase node path

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
      if (data) {
        // Only update rain status if the data is valid
        setRainStatus(data); // Store the raw rain status string
      }
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

  const getRaindropColor = (status) => {
    return status === "Rain" ? "#0000FF" : "#808080"; // Blue if raining, gray if not
  };

  return (
    <div
      style={{
        height: "100vh", // Kontainer utama memenuhi tinggi layar
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#282c34", // Tambahkan warna background jika diperlukan
      }}
    >
      <h1
        style={{
          color: "#fff",
          margin: "0 0 50px 0",
          textAlign: "center",
        }}
      >
        Monitoring Bencana Gd.Keselamatan
      </h1>
      <div
  className="card-wrapper">
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
          value={rainStatus === "Rain" ? 1 : 0} // Convert string status to number
          unit=""
          min={0}
          max={1}
          color={getRaindropColor(rainStatus)}
          icon={<i className="fas fa-cloud-rain"></i>}
          description={`Status: ${
            rainStatus === "Rain" ? "Hujan" : "Tidak Hujan"
          }`}
        />
      </div>

    </div>
  );
};

export default MonitoringPage;
