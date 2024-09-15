
import React from 'react';
import jsPDF from 'jspdf';

const CertificateTemplate = ({ certificate }) => {
  const { studentName, internshipDomain, startDate, endDate } = certificate;

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.text(`Certificate of Completion`, 20, 20);
    doc.text(`This is to certify that ${studentName}`, 20, 30);
    doc.text(`has successfully completed an internship in ${internshipDomain}`, 20, 40);
    doc.text(`from ${new Date(startDate).toLocaleDateString()} to ${new Date(endDate).toLocaleDateString()}.`, 20, 50);
    doc.save('certificate.pdf');
  };

  return (
    <div>
      <h3>Certificate Details</h3>
      <p>Student Name: {studentName}</p>
      <p>Internship Domain: {internshipDomain}</p>
      <p>Start Date: {new Date(startDate).toLocaleDateString()}</p>
      <p>End Date: {new Date(endDate).toLocaleDateString()}</p>
      <button onClick={handleDownload}>Download Certificate</button>
    </div>
  );
};

export default CertificateTemplate;
