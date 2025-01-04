import React, { useRef } from "react";
import rescueFirstImg from "../assets/rescueFirst.png";
import backgroundImg from "../assets/Background.png";
import Button from "../Components/Button";
import kebakaran from "../assets/kebakaran.png";
import korban from "../assets/korban.png";
import banjir from "../assets/banjir.png";
import MonitoringPage from "./Monitoring";
import "./LandingPage.css";

const LandingPage = () => {
  const monitoringRef = useRef(null);

  const handleClick = () => {
    monitoringRef.current.scrollIntoView({ behavior: "smooth" });
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
          <Button text="Check it!" onClick={handleClick} />
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
    </div>
  );
};

export default LandingPage;
