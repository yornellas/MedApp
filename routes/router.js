import express from 'express'
import appointmentController from './AppointmentController.js'
import doctorController from './DoctorController.js'
import patientController from './PatientController.js'
import prescriptionController from './PrescriptionController.js'
import DoctorService from '../services/DoctorService.js'
import jwt from 'jsonwebtoken'
import verifyToken from '../middleware/authMiddleware.js'

let router = express.Router()

router.get('/', function (req, res) {
  console.log('hi!')
  res.status(200).json({ messahe: 'hi!' })
})

router.post('/login', async function (req, res) {
  try {
    const { login, password } = req.body
    const doctor = await DoctorService.getDoctorbyLogin(login)
    if (!doctor)
      return req
        .res(401)
        .json({ error: 'Authentication failed! - wrong login' })

    const passwordMatch = await bcrypt.compare(password, doctor.password)
    if (!passwordMatch)
      return req
        .res(401)
        .json({ error: 'Authentication failed! - wrong password' })

    const token = jwt.sign({ doctorId: doctor._id }, 'your-secret-key', {
      expiresIn: '1h'
    })
    res.status(200).json({ token })
  } catch (error) {
    console.log(error)
    req.res.status(500).json({ error: 'Login failed!' })
  }
})

router.use(verifyToken, appointmentController)
router.use(verifyToken, doctorController)
router.use(verifyToken, patientController)
router.use(verifyToken, prescriptionController)

export default router
