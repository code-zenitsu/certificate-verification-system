
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const certificateSchema = new Schema({
  certificateID: { type: String, required: true, unique: true },
  studentName: { type: String, required: true },
  internshipDomain: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
}, {
  timestamps: true,
});

const Certificate = mongoose.model('Certificate', certificateSchema);

module.exports = Certificate;
