
const express = require('express');
const multer = require('multer');
const xlsx = require('xlsx');
const Certificate = require('../models/certificate.model');

const router = express.Router();

// Multer setup for file upload
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Upload Excel file and process data
router.post('/upload', upload.single('file'), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send('No file uploaded.');
  }

  const workbook = xlsx.read(file.buffer, { type: 'buffer' });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = xlsx.utils.sheet_to_json(sheet);

  // Validate and store data in MongoDB
  data.forEach(async (row) => {
    const { certificateID, studentName, internshipDomain, startDate, endDate } = row;
    if (certificateID && studentName && internshipDomain && startDate && endDate) {
      const certificate = new Certificate({
        certificateID,
        studentName,
        internshipDomain,
        startDate,
        endDate,
      });
      await certificate.save();
    }
  });

  res.send('File uploaded and data processed successfully.');
});

// Retrieve certificate details by ID
router.get('/:id', async (req, res) => {
  const certificateID = req.params.id;
  const certificate = await Certificate.findOne({ certificateID });
  if (!certificate) {
    return res.status(404).send('Certificate not found.');
  }
  res.json(certificate);
});

module.exports = router;
