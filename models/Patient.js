import mongoose from 'mongoose'

const Schema = mongoose.Schema

const patientSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Patient name is required'],
  },
  birthDate: {
    type: Date,
    required: [true, 'Patient birth date is required'],
  },
  email: {
    type: String,
    required: [true, 'Patient email is required'],
  },
  phone: {
    type: String,
    required: [true, 'Patient phone is required'],
    validate: {
      validator: function (v) {
        return /^\d{2} 9\d{4}-\d{4}/.test(v)
      },
      message: (props) =>
        `${props.value} is not a valid phone number! Use format (xx) 9xxx-xxxx.`,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Patient = mongoose.model('Patient', patientSchema)

export default Patient
