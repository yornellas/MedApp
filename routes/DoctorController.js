import express from 'express'
import DoctorService from '../services/DoctorService.js'
import bcrypt from 'bcrypt'

let router = express.Router()

router.get('/doctors', async (req, res) => {
  try {
    const doctors = await DoctorService.getDoctors()
    res.send(doctors)
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
})

router.get('/getDoctor/:id', async (req, res) => {
  const { id } = req.params

  try {
    const doctor = await DoctorService.getDoctorById(id)
    res.send(doctor)
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
})

router.post('/postDoctor', async (req, res) => {
  const {
    name,
    login,
    password,
    email,
    phone,
    medicalRegistration,
    medicalSpecialty,
  } = req.body

  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    const doctor = await DoctorService.saveDoctor({
      name,
      login,
      password: hashedPassword,
      email,
      phone,
      medicalRegistration,
      medicalSpecialty,
    })
    res.send(doctor)
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
})

router.put('/doctors/:id', async (req, res) => {
  const { id } = req.params
  const {
    name,
    login,
    password,
    email,
    phone,
    medicalRegistration,
    medicalSpecialty,
  } = req.body

  try {
    const updated = {
      name,
      login,
      email,
      phone,
      medicalRegistration,
      medicalSpecialty,
    }
    if (password) {
      const hashed = await bcrypt.hash(password, 10)
      updated.password = hashed
    }

    const doctor = await DoctorService.updateDoctor(id, updated)
    res.send(doctor)
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
})

router.delete('/doctors/:id', async (req, res) => {
  const { id } = req.params

  try {
    const doctor = await DoctorService.deleteDoctor(id)
    res.send(doctor)
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
})

export default router
