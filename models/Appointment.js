import mongoose from 'mongoose'
import Doctor from './Doctor.js'
import Patient from './Patient.js'

const Schema = mongoose.Schema

const appointmentSchema = new Schema({
  date: {
    type: Date,
    required: [true, 'Appointment date is required.'],
  },
  doctorId: {
    type: String,
    required: [true, 'DoctorId is required'],
    validate: {
      validator: async function (v) {
        const id = mongoose.Types.ObjectId(v) //Converte string em objeto ID para ser encontrado no banco.
        return Doctor.exists({ _id: id })
      },
      message: (props) => `Doctor with id ${props.value} does not exist.`,
    },
  },
  patientId: {
    type: String,
    required: [true, 'patientId is required'],
    validate: {
      validator: async function (v) {
        const id = mongoose.Types.ObjectId(v)
        return Patient.exists({ _id: id })
      },
      message: (props) => `Patient with id ${props.value} does not exist.`,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Appointment = mongoose.model('Appointment', appointmentSchema)

export default Appointment
