
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const uri = process.env.MONGO_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Routes
const certificatesRouter = require('./routes/certificates');
app.use('/api/certificates', certificatesRouter);

// Root endpoint
app.get('/', (req, res) => {
  res.send('Certificate Verification System Backend');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
