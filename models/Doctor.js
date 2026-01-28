import mongoose from "mongoose";

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  doctorId: {
    type: String,
    required: [true, 'DoctorId is required']
  },
  name: {
    type: String,
    required: [true, 'Doctor name is required']
  },
  login: {
    type: String,
    required: [true, 'Doctor login is required'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Doctor password is required']
  },
  email: {
    type: String,
    required: [true, 'Doctor email is required']
  },
  phone: {
    type: String,
    required: [true, 'Doctor phone is required']
  },
  medicalRegistration: {
    type: String,
    required: [true, 'Medical registration is required'],
    unique: true
  },
  medicalSpecialty: {
    type: String,
    required: [true, 'Medical specialty is required']
  },
  createdAt: {
    type: Date,
    default: date.now
  }
});

const Doctor = mongoose.model('Doctor', doctorSchema);

export default Doctor;