import { DoctorRepository } from '../repositories/DoctorRepository.js';

const getDoctors = async () => {
  return DoctorRepository.getDoctors();
}

const getDoctorById = async (id) => {
  return DoctorRepository.getDoctorById(id);
}

const saveDoctor = async ({ name, login, password, email, phone, medicalRegistration, medicalSpecialty }) => {
  return DoctorRepository.saveDoctor({ name, login, password, email, phone, medicalRegistration, medicalSpecialty });
}

const updateDoctor = async (id, { name, login, password, email, phone, medicalRegistration, medicalSpecialty }) => {
  return DoctorRepository.updateDoctor(id, { name, login, password, email, phone, medicalRegistration, medicalSpecialty });
}

const deleteDoctor = async (id) => {
  return DoctorRepository.deleteDoctor(id);
}

const DoctorService = {
  getDoctors,
  getDoctorById,
  saveDoctor,
  updateDoctor,
  deleteDoctor
}

export default DoctorService;