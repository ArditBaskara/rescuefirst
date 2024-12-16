import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../Firebase/Firebase';
import './Raindrop.css';

const Raindrop = () => {
  const [rainStatus, setRainStatus] = useState(false);
  const [analogValue, setAnalogValue] = useState(0);

  useEffect(() => {
    const raindropRef = ref(database, 'data/Raindrop');

    onValue(raindropRef, (snapshot) => {
      const data = snapshot.val();
      setAnalogValue(data.analogValue);
      setRainStatus(data.rainStatus);
    });
  }, []);

  const statusColor = rainStatus ? '#ff0000' : '#00ff00';

  return (
    <div className="raindrop-sensor">
      <h1>Raindrop Sensor</h1>
      <div className="sensor-status">
        <p style={{ color: statusColor }}>Status: {rainStatus ? 'ujan' : 'nga ujan'}</p>
        <p>Analog Value: {analogValue}</p>
      </div>
    </div>
  );
};

export default Raindrop;
