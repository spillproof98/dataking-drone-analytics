import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UploadForm from '../components/UploadForm';
import Filters from '../components/Filters';
import KPISection from '../components/KPISection';
import ChartsSection from '../components/ChartsSection';
import MapSection from '../components/MapSection';
import TableSection from '../components/TableSection';
import '../styles/dashboard.css';

const Dashboard = () => {
  const [filter, setFilter] = useState({ droneId: '', date: '', type: '' });
  const [violations, setViolations] = useState([]);
  const [kpis, setKpis] = useState([]);
  const [pieData, setPieData] = useState({});
  const [timeData, setTimeData] = useState({});
  const columns = ['id', 'drone_id', 'type', 'timestamp', 'latitude', 'longitude'];

  useEffect(() => {
    axios.get('http://localhost:8000/api/violations')
      .then(res => {
        const data = res.data;
        setViolations(data.violations || []);
        setKpis(data.kpis || []);
        setPieData(data.pieData || {});
        setTimeData(data.timeData || {});
      })
      .catch(err => {
        console.error("Error fetching violations:", err);
      });
  }, []);

  const handleUpload = (data) => {
    setViolations(data.violations || []);
    setKpis(data.kpis || []);
    setPieData(data.pieData || {});
    setTimeData(data.timeData || {});
  };

  const filteredViolations = violations.filter((v) => {
    const matchesDrone = !filter.droneId || v.drone_id.toLowerCase().includes(filter.droneId.toLowerCase());
    const matchesType = !filter.type || v.type.toLowerCase().includes(filter.type.toLowerCase());
    const matchesDate = !filter.date || v.timestamp.startsWith(filter.date);
    return matchesDrone && matchesType && matchesDate;
  });

  const getPieData = (list) => {
    return list.reduce((acc, cur) => {
      acc[cur.type] = (acc[cur.type] || 0) + 1;
      return acc;
    }, {});
  };

  const getTimeData = (list) => {
    return list.reduce((acc, cur) => {
      const day = cur.timestamp.split('T')[0];
      acc[day] = (acc[day] || 0) + 1;
      return acc;
    }, {});
  };

  return (
    <div className="dashboard">
      <div className="top-bar">
        <UploadForm onUploadSuccess={handleUpload} />
        <Filters filter={filter} setFilter={setFilter} />
      </div>
      <KPISection kpis={kpis} />
      <ChartsSection
        pieData={getPieData(filteredViolations)}
        timeData={getTimeData(filteredViolations)}
      />
      <MapSection violations={filteredViolations} />
      <TableSection columns={columns} data={filteredViolations} />
    </div>
  );
};

export default Dashboard;
