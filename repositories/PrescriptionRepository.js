import { Prescription } from '../models/Prescription';

const getPrescriptions = async () => {
  return await Prescription.find();
}

const getPrescriptionById = async (id) => {
  try {
    return await Prescription.findById(id); 
  } catch (error) {
    throw new Error(error);
  }
}

const savePrescription = async ({ date, appointmentId, medicine, dosage, instructions }) => {
  try {
    const prescription = new Prescription({ date, appointmentId, medicine, dosage, instructions });
    return await prescription.save();
  } catch (error) {
    throw new Error(error);
  }
}

const updatePrescription = async (id, { date, appointmentId, medicine, dosage, instructions }) => {
    try {
    return await Prescription.findByIdAndUpdate(id, { date, appointmentId, medicine, dosage, instructions }, { new: true }); 
  } catch (error) {
    throw new Error(error);
  }
}

const deletePrescription = async (id) => {
    try {
    return await Prescription.findByIdAndUpdate(id); 
  } catch (error) {
    throw new Error(error);
  }
}

const PrescriptionRepository = {
  getPrescriptions,
  getPrescriptionById,
  savePrescription,
  updatePrescription,
  deletePrescription
}

export default PrescriptionRepository;