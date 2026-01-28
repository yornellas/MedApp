import { Doctor } from '../models/Doctor.js';

const getDoctors = async () => {
  return await Doctor.find();
}

const getDoctorById = async (id) => {
  try {
    return await Doctor.findById(id); 
  } catch (error) {
    throw new Error(error);
  }
}

const saveDoctor = async ({ name, login, password, email, phone, medicalRegistration, medicalSpecialty }) => {
  try {
    const prescription = new Doctor({ name, login, password, email, phone, medicalRegistration, medicalSpecialty });
    return await prescription.save();
  } catch (error) {
    throw new Error(error);
  }
}

const updateDoctor = async (id, { name, login, password, email, phone, medicalRegistration, medicalSpecialty }) => {
    try {
    return await Doctor.findByIdAndUpdate(id, { name, login, password, email, phone, medicalRegistration, medicalSpecialty }, { new: true }); 
  } catch (error) {
    throw new Error(error);
  }
}

const deleteDoctor = async (id) => {
    try {
    return await Doctor.findByIdAndUpdate(id); 
  } catch (error) {
    throw new Error(error);
  }
}

const DoctorRepository = {
  getDoctors,
  getDoctorById,
  saveDoctor,
  updateDoctor,
  deleteDoctor
}

export default DoctorRepository;