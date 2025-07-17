import React from 'react';
import '../styles/filter.css';

const Filters = ({ filter = {}, setFilter }) => {
  const handleClear = () => {
    setFilter({ droneId: '', date: '', type: '' });
  };

  return (
    <div className="filters-container">
      {['droneId', 'date', 'type'].map((field) => (
        <input
          key={field}
          type={field === 'date' ? 'date' : 'text'}
          placeholder={`Filter by ${field}`}
          value={filter[field] || ''}
          onChange={(e) => setFilter({ ...filter, [field]: e.target.value })}
        />
      ))}
      <button className="clear-btn" onClick={handleClear}>Clear</button>
    </div>
  );
};

export default Filters;
