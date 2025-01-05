import React, { useRef } from "react";
import Swal from "sweetalert2";
import rescueFirstImg from "../assets/rescueFirst.png";
import backgroundImg from "../assets/Background.png";
import Button from "../Components/Button";
import kebakaran from "../assets/kebakaran.png";
import korban from "../assets/korban.png";
import banjir from "../assets/banjir.png";
import MonitoringPage from "./Monitoring";
import ResponsePage from "./ResponsePage";
import { database, ref, set } from "../Firebase/Firebase";
import "./LandingPage.css";

const LandingPage = () => {
  const monitoringRef = useRef(null);
  const responseRef = useRef(null);

  const handleGuideClick = () => {
    responseRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleEmergencyClick = () => {
    const emergencyRef = ref(database, "data/emergencyStatus");
    set(emergencyRef, 1)
      .then(() => {
        Swal.fire({
          title: "Bantuan telah kami kirim!",
          text: "Sekarang tunggu dan baca panduan penanganan pertama.",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Terjadi kesalahan",
          text: `Gagal mengirimkan data darurat: ${error.message}`,
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <div
      className="landing-page"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="landing-section">
        <div className="landing-text">
          <h1>
            <span className="red-text">Rescue</span>First
          </h1>
          <p>
            RescueFirst adalah solusi inovatif dalam manajemen bencana,
            dirancang untuk memberikan respons cepat terhadap situasi darurat.
            Dengan teknologi otonom yang canggih, kendaraan ini mampu mendeteksi
            kondisi darurat seperti kebakaran, banjir, dan menemukan korban
            dengan akurasi tinggi. Dengan RescueFirst, keselamatan Anda adalah
            prioritas utama kami.
          </p>
          <div className="button-container">
            <Button
              text="Guide"
              onClick={handleGuideClick}
              style={{ backgroundColor: "white", color: "black" }}
            />
            <Button
              text="Emergency!!"
              onClick={handleEmergencyClick}
              style={{ backgroundColor: "red", color: "white" }}
            />
          </div>
        </div>

        <div className="landing-image">
          <img src={rescueFirstImg} alt="Rescue First" />
          <div className="detect-section">
            <h4>Dapat Mendeteksi</h4>
            <ul className="animated-list">
              <li>
                <img src={kebakaran} alt="Kebakaran" />
                <p>Kebakaran</p>
              </li>
              <li>
                <img src={banjir} alt="Banjir" />
                <p>Banjir</p>
              </li>
              <li>
                <img src={korban} alt="Korban" />
                <p>Korban</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div ref={monitoringRef}>
        <MonitoringPage />
      </div>

      <div ref={responseRef} style={{ backgroundColor: "white" }}>
        <ResponsePage />
      </div>
    </div>
  );
};

export default LandingPage;
