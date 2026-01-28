import { Patient } from '../models/Patient.js';

const getPatients = async () => {
  return await Patient.find();
}

const getPatientById = async (id) => {
  try {
    return await Patient.findById(id); 
  } catch (error) {
    throw new Error(error);
  }
}

const savePatient = async ({ name, birthDate, email, phone }) => {
  try {
    const prescription = new Patient({ name, birthDate, email, phone });
    return await prescription.save();
  } catch (error) {
    throw new Error(error);
  }
}

const updatePatient = async (id, { name, birthDate, email, phone }) => {
    try {
    return await Patient.findByIdAndUpdate(id, { name, birthDate, email, phone }, { new: true }); 
  } catch (error) {
    throw new Error(error);
  }
}

const deletePatient = async (id) => {
    try {
    return await Patient.findByIdAndUpdate(id); 
  } catch (error) {
    throw new Error(error);
  }
}

const PatientRepository = {
  getPatients,
  getPatientById,
  savePatient,
  updatePatient,
  deletePatient
}

export default PatientRepository;