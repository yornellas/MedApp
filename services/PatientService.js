import { PatientRepository } from '../repositories/PatientRepository';

const getPatients = async () => {
  return PatientRepository.getPatients();
}

const getPatientById = async (id) => {
  return PatientRepository.getPatientById(id);
}

const savePatient = async ({ name, birthDate, email, phone }) => {
  return PatientRepository.savePatient({ name, birthDate, email, phone });
}

const updatePatient = async (id, { name, birthDate, email, phone }) => {
  return PatientRepository.updatePatient(id, { name, birthDate, email, phone });
}

const deletePatient = async (id) => {
  return PatientRepository.deletePatient(id);
}

const PatientService = {
  getPatients,
  getPatientById,
  savePatient,
  updatePatient,
  deletePatient
}

export default PatientService;