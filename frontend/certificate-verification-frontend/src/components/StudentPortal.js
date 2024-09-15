
import React, { useState } from 'react';
import axios from 'axios';
import CertificateTemplate from './CertificateTemplate';

const StudentPortal = () => {
  const [certificateID, setCertificateID] = useState('');
  const [certificate, setCertificate] = useState(null);
  const [message, setMessage] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/certificates/${certificateID}`);
      setCertificate(response.data);
      setMessage('');
    } catch (error) {
      setMessage('Certificate not found');
      setCertificate(null);
    }
  };

  return (
    <div>
      <h2>Student Portal</h2>
      <input
        type="text"
        placeholder="Enter Certificate ID"
        value={certificateID}
        onChange={(e) => setCertificateID(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {message && <p>{message}</p>}
      {certificate && <CertificateTemplate certificate={certificate} />}
    </div>
  );
};

export default StudentPortal;
