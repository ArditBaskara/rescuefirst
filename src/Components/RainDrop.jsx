import React, { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../Firebase/Firebase"; // Pastikan ini sesuai dengan konfigurasi Firebase Anda
import CircularBar from "../Components/CircularBar"; // Komponen yang menampilkan data
import "./Raindrop.css";

const Raindrop = () => {
  const [rainStatus, setRainStatus] = useState(false);
  const [analogValue, setAnalogValue] = useState(0);
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);

  useEffect(() => {
    const raindropRef = ref(database, "data");

    // Membaca data dari Firebase
    onValue(raindropRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setTemperature(data.Temperature);
        setHumidity(data.Humidity);
        setRainStatus(data.RainStatus === "Rain"); // Mengonversi RainStatus menjadi boolean
      }
    });
  }, []);

  // Menentukan warna berdasarkan status hujan
  const getRaindropColor = (status) => {
    return status ? "#0000FF" : "#808080"; // Biru jika hujan, abu-abu jika tidak
  };

  return (
    <div className="raindrop-container">
      <h2>Raindrop Sensor</h2>
      {rainStatus !== null && temperature !== null && humidity !== null ? (
        <div>
          <CircularBar
            title="Raindrop"
            value={rainStatus ? 1 : 0} // Konversi ke angka (1 untuk hujan, 0 untuk tidak hujan)
            unit=""
            min={0}
            max={1}
            color={getRaindropColor(rainStatus)} // Tentukan warna berdasarkan status hujan
            icon={<i className="fas fa-cloud-rain"></i>}
            description={`Status: ${rainStatus ? "Hujan" : "Tidak Hujan"}, Analog Value: ${analogValue}`}
          />
          <div>
            <p>Temperature: {temperature}°C</p>
            <p>Humidity: {humidity}%</p>
          </div>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Raindrop;
