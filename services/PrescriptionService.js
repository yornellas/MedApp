import { PrescriptionRepository } from '../repositories/PrescriptionRepository';

const getPrescriptions = async () => {
  return PrescriptionRepository.getPrescriptions();
}

const getPrescriptionById = async (id) => {
  return PrescriptionRepository.getPrescriptionById(id);
}

const savePrescription = async ({ date, appointmentId, medicine, dosage, instructions }) => {
  return PrescriptionRepository.savePrescription({ date, appointmentId, medicine, dosage, instructions });
}

const updatePrescription = async (id, { date, appointmentId, medicine, dosage, instructions }) => {
  return PrescriptionRepository.updatePrescription(id, { date, appointmentId, medicine, dosage, instructions });
}

const deletePrescription = async (id) => {
  return PrescriptionRepository.deleteAppointment(id);
}

const PrescriptionService = {
  getPrescriptions,
  getPrescriptionById,
  savePrescription,
  updatePrescription,
  deletePrescription
}

export default PrescriptionService;