
import React from 'react';
import { CalendarIcon } from 'lucide-react';
import { useNurseContext } from '../../context/NurseContext';

const Appointments = () => {
  const { patients, appointments, handleScheduleAppointment } = useNurseContext();

  return (
    <div className="card">
      <h2 className="section-title">
        <CalendarIcon size={16} />
        Appointment Scheduling
      </h2>
      
      <div className="grid-container grid-two-columns">
        <div>
          <h3 className="section-title">Schedule New Appointment</h3>
          <div className="form-container">
            <form onSubmit={handleScheduleAppointment}>
              <div className="form-group">
                <label className="form-label">Patient</label>
                <select name="patient" className="form-select" required>
                  <option value="">Select patient</option>
                  {patients.map(patient => (
                    <option key={patient.id} value={patient.id.toString()}>
                      {patient.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Date</label>
                <input type="date" name="date" className="form-input" required />
              </div>
              
              <div className="form-group">
                <label className="form-label">Time</label>
                <input type="time" name="time" className="form-input" required />
              </div>
              
              <div className="form-group">
                <label className="form-label">Purpose</label>
                <input type="text" name="purpose" className="form-input" required />
              </div>
              
              <button
                type="submit"
                className="button button-primary"
                style={{ width: '100%' }}
              >
                Schedule Appointment
              </button>
            </form>
          </div>
        </div>
        
        <div>
          <h3 className="section-title">Upcoming Appointments</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Patient</th>
                <th>Date</th>
                <th>Time</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => {
                const patient = patients.find(p => p.id === appointment.patientId);
                return (
                  <tr key={appointment.id}>
                    <td><strong>{patient?.name || 'Unknown'}</strong></td>
                    <td>{appointment.date}</td>
                    <td>{appointment.time}</td>
                    <td>{appointment.purpose}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
