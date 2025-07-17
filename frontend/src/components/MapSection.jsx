
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/map.css';

import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapSection = ({ violations = [] }) => {
  if (!violations.length) {
    return (
      <div className="map-container">
        <h3>Violation Map</h3>
        <div className="map-placeholder">No data to display on map.</div>
      </div>
    );
  }

  const center = [violations[0].latitude, violations[0].longitude];

  return (
    <div className="map-container">
      <h3>Violation Map</h3>
      <MapContainer center={center} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; OpenStreetMap'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {violations.map((v) => (
          <Marker key={v.id} position={[v.latitude, v.longitude]}>
            <Popup>
              <strong>{v.type}</strong><br />
              Drone ID: {v.drone_id}<br />
              Time: {new Date(v.timestamp).toLocaleString()}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapSection;
