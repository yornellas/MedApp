import { AppointmentRepository } from '../repositories/AppointmentRepository.js';

const getAppointments = async () => {
  return AppointmentRepository.getAppointments();
}

const getAppointmentById = async (id) => {
  return AppointmentRepository.getAppointmentById(id);
}

const saveAppointment = async ({ date, doctorId, patientId }) => {
  return AppointmentRepository.saveAppointment({ date, doctorId, patientId });
}

const updateAppointment = async (id, { date, doctorId, patientId }) => {
  return AppointmentRepository.updateAppointment(id, { date, doctorId, patientId });
}

const deleteAppointment = async (id) => {
  return AppointmentRepository.deleteAppointment(id);
}

const AppointmentService = {
  getAppointments,
  getAppointmentById,
  saveAppointment,
  updateAppointment,
  deleteAppointment
}

export default AppointmentService;