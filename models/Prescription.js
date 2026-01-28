import mongoose from "mongoose";

const Schema = mongoose.Schema;

const prescriptionSchema = new Schema({
  date: {
    type: Date,
    required: [true, 'Prescription date is required']
  },
  appointmentId: {
    type: String,
    required: [true, 'AppointmentId is required']
  },
  medicine: {
    type: String,
    required: [true, 'Medicine is required']
  },
  dosage: {
    type: String,
    required: [true, 'Dosage is required']
  },
  instructions: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: date.now
  }
});

const Prescription = mongoose.model('Prescription', prescriptionSchema);

export default Prescription;