import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EnergyDashboard = () => {
  const [energyData, setEnergyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/energy-data');
        setEnergyData(response.data);
      } catch (error) {
        console.error('Error fetching energy data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <h1>Energy Consumption Dashboard</h1>
      <div className="data-table">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Thermostat ID</th>
              <th>Energy Consumption (kWh)</th>
            </tr>
          </thead>
          <tbody>
            {energyData.map((data, index) => (
              <tr key={index}>
                <td>{data.date}</td>
                <td>{data.time}</td>
                <td>{data.thermostatId}</td>
                <td>{data.energyConsumption}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnergyDashboard;