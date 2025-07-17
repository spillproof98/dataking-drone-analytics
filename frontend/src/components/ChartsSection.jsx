import React from 'react';
import { Pie, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';
import '../styles/chart.css';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title
);

const ChartsSection = ({ pieData = {}, timeData = {} }) => {
  const pieChartData = {
    labels: Object.keys(pieData),
    datasets: [
      {
        data: Object.values(pieData),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#9C27B0'],
      },
    ],
  };

  const lineChartData = {
    labels: Object.keys(timeData),
    datasets: [
      {
        label: 'Violations',
        data: Object.values(timeData),
        borderColor: '#36A2EB',
        fill: false,
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="charts-section">
      <div className="chart-card">
        <h3>Violation Type Distribution</h3>
        <Pie data={pieChartData} />
      </div>
      <div className="chart-card">
        <h3>Violations Over Time</h3>
        <Line data={lineChartData} />
      </div>
    </div>
  );
};

export default ChartsSection;
