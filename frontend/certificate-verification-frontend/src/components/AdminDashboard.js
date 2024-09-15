
import React, { useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('/api/certificates/upload', formData);
      setMessage(response.data);
    } catch (error) {
      setMessage('Error uploading file');
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AdminDashboard;
