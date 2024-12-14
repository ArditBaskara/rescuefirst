import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../Firebase/Firebase";

const WeatherCard = () => {
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [weatherStatus, setWeatherStatus] = useState("Cerah"); // Default status
  const [icon, setIcon] = useState("fas fa-sun"); // Default icon

  useEffect(() => {
    const temperatureRef = ref(database, "data/Temperature");
    const humidityRef = ref(database, "data/Humidity");
    const weatherStatusRef = ref(database, "data/WeatherStatus");

    // Mengambil data suhu
    onValue(temperatureRef, (snapshot) => {
      const data = snapshot.val();
      setTemperature(data);
      updateWeather(data, humidity);
    });

    // Mengambil data kelembapan
    onValue(humidityRef, (snapshot) => {
      const data = snapshot.val();
      setHumidity(data);
      updateWeather(temperature, data);
    });

    // Mengambil status cuaca (misalnya 'rain' atau 'clear')
    onValue(weatherStatusRef, (snapshot) => {
      const data = snapshot.val();
      setWeatherStatus(data);
      updateWeather(temperature, humidity, data);
    });
  }, []);

  const updateWeather = (temp, hum, status) => {
    // Menyesuaikan icon dan warna berdasarkan suhu dan kelembapan
    if (status === "rain") {
      setIcon("fas fa-cloud-showers-heavy");
      setWeatherStatus("Hujan");
    } else if (temp > 30) {
      setIcon("fas fa-sun");
      setWeatherStatus("Panas");
    } else if (temp < 20) {
      setIcon("fas fa-cloud-sun");
      setWeatherStatus("Dingin");
    } else {
      setIcon("fas fa-sun");
      setWeatherStatus("Cerah");
    }
  };

  return (
    <div className="weather-card" style={styles.card}>
      <h2 style={{ color: "#fff" }}>Status Cuaca</h2>
      <div style={styles.iconWrapper}>
        <i className={icon} style={styles.icon}></i>
      </div>
      <h3 style={styles.status}>{weatherStatus}</h3>
      <p style={{ color: "#fff" }}>
        <strong>Suhu:</strong> {temperature}°C
      </p>
      <p style={{ color: "#fff" }}>
        <strong>Kelembapan:</strong> {humidity}%
      </p>
      <div style={styles.footer}>
        <p style={styles.description}>
          Ideal range suhu: 20-25°C | Kelembapan: 40-60%
        </p>
      </div>
    </div>
  );
};

// Styling untuk komponen WeatherCard
const styles = {
  card: {
    backgroundColor: "#2c3e50",
    borderRadius: "10px",
    padding: "20px",
    width: "300px",
    textAlign: "center",
  },
  iconWrapper: {
    marginBottom: "10px",
  },
  icon: {
    fontSize: "40px",
    color: "#fff",
  },
  status: {
    color: "#fff",
    marginBottom: "10px",
  },
  footer: {
    marginTop: "20px",
  },
  description: {
    fontSize: "12px",
    color: "#bdc3c7",
  },
};

export default WeatherCard;
