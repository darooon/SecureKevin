
import React from 'react';
import { Users } from 'lucide-react';
import { useNurseContext } from '../../context/NurseContext';

const PatientActivity = () => {
  const { 
    patients, 
    selectedPatient, 
    setSelectedPatient, 
    medicalActivity, 
    setMedicalActivity, 
    handleAddMedicalActivity, 
    medicalRecords 
  } = useNurseContext();

  return (
    <div className="card">
      <h2 className="section-title">
        <Users size={16} />
        Patient Medical Activity
      </h2>
      
      <div className="grid-container grid-two-columns">
        <div>
          <h3 className="section-title">Select Patient</h3>
          <div>
            {patients.map(patient => (
              <div 
                key={patient.id}
                className={`patient-card ${selectedPatient?.id === patient.id ? 'selected' : ''}`}
                onClick={() => setSelectedPatient(patient)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div className="avatar">
                    {patient.name.split(' ')[0][0]}{patient.name.split(' ')[1] ? patient.name.split(' ')[1][0] : ''}
                  </div>
                  <div>
                    <p><strong>{patient.name}</strong></p>
                    <p>Age: {patient.age} | Room: {patient.room}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="section-title">Add Medical Activity</h3>
          {selectedPatient ? (
            <div className="form-container">
              <div className="form-group">
                <label className="form-label">Activity Type</label>
                <select
                  className="form-select"
                  value={medicalActivity.activity}
                  onChange={(e) => setMedicalActivity({...medicalActivity, activity: e.target.value})}
                >
                  <option value="">Select activity</option>
                  <option value="Vital Signs Check">Vital Signs Check</option>
                  <option value="Medication Administration">Medication Administration</option>
                  <option value="Wound Care">Wound Care</option>
                  <option value="Mobility Assistance">Mobility Assistance</option>
                  <option value="Hygiene Assistance">Hygiene Assistance</option>
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Date</label>
                <input 
                  type="date" 
                  className="form-input"
                  value={medicalActivity.date}
                  onChange={(e) => setMedicalActivity({...medicalActivity, date: e.target.value})}
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Notes</label>
                <textarea 
                  className="form-textarea"
                  rows={3}
                  value={medicalActivity.notes}
                  onChange={(e) => setMedicalActivity({...medicalActivity, notes: e.target.value})}
                ></textarea>
              </div>
              
              <button
                onClick={handleAddMedicalActivity}
                className="button button-primary"
                style={{ width: '100%' }}
              >
                Record Activity
              </button>
            </div>
          ) : (
            <div className="activity-placeholder">
              <p>Please select a patient first</p>
            </div>
          )}
        </div>
      </div>
      
      {selectedPatient && (
        <div style={{ marginTop: '2rem' }}>
          <h3 className="section-title">Medical Records for {selectedPatient.name}</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Activity</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {medicalRecords[selectedPatient.id]?.map((record, index) => (
                <tr key={index}>
                  <td>{record.date}</td>
                  <td>{record.activity}</td>
                  <td>{record.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PatientActivity;
