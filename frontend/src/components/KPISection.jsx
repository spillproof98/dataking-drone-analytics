import React from 'react';
import '../styles/kpi.css';

const KPISection = ({ kpis }) => (
  <div className="kpi-grid">
    {kpis.map((kpi, i) => (
      <div key={i} className="kpi-card">
        <p>{kpi.label}</p>
        <h2>{kpi.value}</h2>
      </div>
    ))}
  </div>
);

export default KPISection;
