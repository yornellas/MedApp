import { express } from 'express';
import { DoctorService } from '../services/DoctorService.js';

let router = express.Router();

router.get('/doctors', async(req, res) => {
  try {
    const doctors = await DoctorService.getDoctors();
    res.send(doctors);
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
})

router.get('/getDoctor/:id', async(req, res) => {
  const { id } = req.params;

  try {
    const doctor = await DoctorService.getDoctorbyId(id);
    res.send(doctor);
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
})

router.post('/postDoctor', async(req, res) => {
  const { name, login, password, email, phone, medicalRegistration, medicalSpecialty } = req.body;

  try {
    const doctor = await DoctorService.postDoctor({ name, login, password, email, phone, medicalRegistration, medicalSpecialty });
    res.send(doctor);
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
})

router.put('/doctors/:id', async(req, res) => {
  const { id } = req.params;
  const { name, login, password, email, phone, medicalRegistration, medicalSpecialty } = req.body;

  try {
    const doctor = await DoctorService.updateDoctor(id, { name, login, password, email, phone, medicalRegistration, medicalSpecialty });
    res.send(doctor);
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
})

router.delete('/doctors/:id', async(req, res) => {
  const { id } = req.params;

  try {
    const doctor = await AppointmentService.updateAppointment(id);
    res.send(doctor);
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
})

export default router();