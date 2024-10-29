// server/models/Application.js
const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  photo: { type: String },
  university: { type: String, required: true },
  collegeName: { type: String, required: true },
  rollNo: { type: String, required: true },
  address: { type: String, required: true },
  password: { type: String, required: true },
  department: { type: String, required: true },
  otherDepartment: { type: String },
  resume: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Application', applicationSchema);
