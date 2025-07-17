import React, { useState } from 'react';
import axios from 'axios';
import '../styles/upload.css';

const UploadForm = ({ onUploadSuccess }) => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert('Please select a file');
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('http://localhost:8000/api/upload-report', formData);
      console.log("✅ File Upload response:", res.data);
      alert('Uploaded successfully');
      onUploadSuccess?.(res.data);
    } catch (err) {
      console.error("❌ File upload error:", err);
      alert('Upload failed');
    }
  };

  return (
    <div className="upload-container">
      <input type="file" accept=".json" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload Report</button>
    </div>
  );
};

export default UploadForm;
