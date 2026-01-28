import { express } from 'express';
import { PrescriptionService } from '../services/PrescriptionService.js' ;

let router = express.Router();

router.get('/prescriptions', async(req, res) => {
  try {
    const prescriptions = await PrescriptionService.getprescriptions();
    res.send(prescriptions);
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
})

router.get('/getPrescription/:id', async(req, res) => {
  const { id } = req.params;

  try {
    const prescription = await PrescriptionService.getprescriptionById(id);
    res.send(prescription);
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
})

router.post('/postPrescription', async(req, res) => {
  const { date, appointmentId, medicine, dosage, instructions } = req.body;

  try {
    const prescription = await PrescriptionService.saveprescription({ date, appointmentId, medicine, dosage, instructions });
    res.send(prescription);
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
})

router.put('/prescriptions/:id', async(req, res) => {
  const { id } = req.params;
  const { date, appointmentId, medicine, dosage, instructions } = req.body;

  try {
    const prescription = await PrescriptionService.updateprescription(id, { date, appointmentId, medicine, dosage, instructions });
    res.send(prescription);
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
})

router.delete('/prescriptions/:id', async(req, res) => {
  const { id } = req.params;

  try {
    const prescription = await PrescriptionService.updateprescription(id);
    res.send(prescription);
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
})


export default router();