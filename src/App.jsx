import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MonitoringPage from "./pages/Monitoring";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route untuk Landing Page */}
          <Route path="/" element={<LandingPage />} />

          {/* Route untuk Monitoring Page */}
          <Route path="/monitoring" element={<MonitoringPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
