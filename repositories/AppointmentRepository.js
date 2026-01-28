import { Appointment } from '../models/Appointment.js';

const getAppointments = async () => {
  return await Appointment.find();
}

const getAppointmentById = async (id) => {
  try {
    return await Appointment.findById(id); 
  } catch (error) {
    throw new Error(error);
  }
}

const saveAppointment = async ({ date, doctorId, patientId }) => {
  try {
    const prescription = new Appointment({ date, doctorId, patientId });
    return await prescription.save();
  } catch (error) {
    throw new Error(error);
  }
}

const updateAppointment = async (id, { date, doctorId, patientId }) => {
    try {
    return await Appointment.findByIdAndUpdate(id, { date, doctorId, patientId }, { new: true }); 
  } catch (error) {
    throw new Error(error);
  }
}

const deleteAppointment = async (id) => {
    try {
    return await Appointment.findByIdAndUpdate(id); 
  } catch (error) {
    throw new Error(error);
  }
}

const AppointmentRepository = {
  getAppointments,
  getAppointmentById,
  saveAppointment,
  updateAppointment,
  deleteAppointment
}

export default AppointmentRepository;