import mongoose from 'mongoose'

const Schema = mongoose.Schema

const doctorSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Doctor name is required'],
  },
  login: {
    type: String,
    required: [true, 'Doctor login is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Doctor password is required'],
  },
  email: {
    type: String,
    required: [true, 'Doctor email is required'],
  },
  phone: {
    type: String,
    required: [true, 'Doctor phone is required'],
    validate: {
      validator: function (v) {
        return /^\d{2} 9\d{4}-\d{4}/.test(v)
      },
      message: (props) =>
        `${props.value} is not a valid phone number! Use format (xx) 9xxx-xxxx.`,
    },
  },
  medicalRegistration: {
    type: String,
    required: [true, 'Medical registration is required'],
    unique: true,
  },
  medicalSpecialty: {
    type: String,
    required: [true, 'Medical specialty is required'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Doctor = mongoose.model('Doctor', doctorSchema)

export default Doctor
