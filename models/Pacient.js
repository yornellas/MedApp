import mongoose from "mongoose";

const Schema = mongoose.Schema;

const patientSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Patient name is required']
  },
  birthDate: {
    type: Date,
    required: [true, 'Patient birth date is required']
  },
  email: {
    type: String,
    required: [true, 'Patient email is required']
  },
  phone: {
    type: String,
    required: [true, 'Patient phone is required']
  },
  createdAt: {
    type: Date,
    default: date.now
  }
});

const appointment = mongoose.model('Patient', patientSchema);

export default patient;