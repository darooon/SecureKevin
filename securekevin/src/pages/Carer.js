import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../styles/carer.css';

const localizer = momentLocalizer(moment);

const Carer = () => {
  const [activeTab, setActiveTab] = useState('patient-records');
  
  // Patients data
  const [patients, setPatients] = useState([
    { 
      id: 1, 
      name: 'Margaret Thompson', 
      age: 68, 
      room: '101',
      condition: 'Post-operative recovery',
      admissionDate: '2025-04-15',
      doctor: 'Dr. Sarah Wilson'
    },
    { 
      id: 2, 
      name: 'Stephen Paul', 
      age: 72, 
      room: '102',
      condition: 'Chronic heart condition',
      admissionDate: '2025-04-20',
      doctor: 'Dr. Michael Chen'
    },
    { 
      id: 3, 
      name: 'Dorothy Miller', 
      age: 65, 
      room: '103',
      condition: 'Diabetes management',
      admissionDate: '2025-04-18',
      doctor: 'Dr. Sarah Wilson'
    },
  ]);

  const [selectedPatient, setSelectedPatient] = useState(null);
  
  // Medical records data
  const medicalRecords = {
    1: {
      details: {
        bloodType: 'O+',
        allergies: ['Penicillin', 'Shellfish'],
        emergencyContact: 'John Thompson (Son) - (555) 234-5678',
        insurance: 'Medicare Primary',
        weight: '145 lbs',
        height: '5\'4"'
      },
      history: [
        { date: '2025-04-25', condition: 'Hip replacement surgery', notes: 'Successful procedure, good recovery progress' },
        { date: '2025-04-20', condition: 'Pre-operative assessment', notes: 'Cleared for surgery, all vitals stable' },
        { date: '2025-03-15', condition: 'Arthritis consultation', notes: 'Recommended surgery due to mobility issues' },
      ],
      prescriptions: [
        { medication: 'Acetaminophen 500mg', dosage: 'Twice daily with meals', prescribedBy: 'Dr. Sarah Wilson', startDate: '2025-04-25' },
        { medication: 'Physical therapy', dosage: 'Daily sessions', prescribedBy: 'Dr. Sarah Wilson', startDate: '2025-04-26' },
        { medication: 'Calcium supplement', dosage: 'Once daily', prescribedBy: 'Dr. Sarah Wilson', startDate: '2025-04-15' },
      ]
    },
    2: {
      details: {
        bloodType: 'A-',
        allergies: ['Aspirin'],
        emergencyContact: 'Mary Paul (Wife) - (555) 345-6789',
        insurance: 'Blue Cross Blue Shield',
        weight: '180 lbs',
        height: '5\'10"'
      },
      history: [
        { date: '2025-04-27', condition: 'Heart rhythm monitoring', notes: 'Stable rhythm, medication working effectively' },
        { date: '2025-04-15', condition: 'Cardiac consultation', notes: 'Adjusted medication dosage' },
        { date: '2025-03-20', condition: 'Emergency admission', notes: 'Chest pain episode, stabilized with medication' },
      ],
      prescriptions: [
        { medication: 'Metoprolol 50mg', dosage: 'Twice daily', prescribedBy: 'Dr. Michael Chen', startDate: '2025-04-15' },
        { medication: 'Atorvastatin 20mg', dosage: 'Once daily at bedtime', prescribedBy: 'Dr. Michael Chen', startDate: '2025-04-15' },
        { medication: 'Low sodium diet', dosage: 'Ongoing', prescribedBy: 'Dr. Michael Chen', startDate: '2025-04-20' },
      ]
    },
    3: {
      details: {
        bloodType: 'B+',
        allergies: ['None known'],
        emergencyContact: 'Robert Miller (Husband) - (555) 456-7890',
        insurance: 'Medicare + Supplemental',
        weight: '155 lbs',
        height: '5\'6"'
      },
      history: [
        { date: '2025-04-26', condition: 'Blood glucose monitoring', notes: 'Levels stabilizing with new medication regimen' },
        { date: '2025-04-18', condition: 'Diabetic foot examination', notes: 'No signs of complications, good circulation' },
        { date: '2025-04-10', condition: 'Endocrinology consultation', notes: 'Medication adjustment recommended' },
      ],
      prescriptions: [
        { medication: 'Metformin 500mg', dosage: 'Three times daily with meals', prescribedBy: 'Dr. Sarah Wilson', startDate: '2025-04-18' },
        { medication: 'Insulin (Lantus)', dosage: '20 units at bedtime', prescribedBy: 'Dr. Sarah Wilson', startDate: '2025-04-18' },
        { medication: 'Diabetic foot care', dosage: 'Daily inspection and care', prescribedBy: 'Dr. Sarah Wilson', startDate: '2025-04-18' },
      ]
    }
  };

  // Care activities
  const [careActivities, setCareActivities] = useState([
    { id: 1, patientId: 1, date: '2025-04-28', activity: 'Mobility assistance', notes: 'Helped with walking, good progress', carer: 'Current User' },
    { id: 2, patientId: 1, date: '2025-04-27', activity: 'Medication administration', notes: 'Pain medication given as prescribed', carer: 'Current User' },
    { id: 3, patientId: 2, date: '2025-04-28', activity: 'Vital signs check', notes: 'BP: 135/80, Heart rate: 72 bpm', carer: 'Current User' },
    { id: 4, patientId: 3, date: '2025-04-28', activity: 'Blood glucose test', notes: 'Glucose level: 145 mg/dL after meal', carer: 'Current User' },
  ]);

  const [newActivity, setNewActivity] = useState({
    activity: '',
    notes: '',
    date: new Date().toISOString().split('T')[0],
  });

  // Appointments
  const [appointments, setAppointments] = useState([
    { id: 1, patientId: 1, date: '2025-05-05', time: '10:00', purpose: 'Physical therapy session', status: 'upcoming', type: 'therapy' },
    { id: 2, patientId: 2, date: '2025-05-06', time: '14:30', purpose: 'Cardiology follow-up', status: 'upcoming', type: 'medical' },
    { id: 3, patientId: 3, date: '2025-05-07', time: '09:15', purpose: 'Diabetes management', status: 'upcoming', type: 'medical' },
    { id: 4, patientId: 1, date: '2025-04-25', time: '11:00', purpose: 'Post-surgery check', status: 'completed', type: 'medical' },
    { id: 5, patientId: 2, date: '2025-04-20', time: '16:00', purpose: 'Medication review', status: 'completed', type: 'medical' },
    { id: 6, patientId: 3, date: '2025-04-22', time: '13:30', purpose: 'Nutritionist consultation', status: 'completed', type: 'consultation' },
  ]);

  const [newAppointment, setNewAppointment] = useState({
    patientId: 0, // Change from empty string to 0
    date: '',
    time: '',
    purpose: '',
    type: 'medical'
  });

  // Calendar events for appointments
  const calendarEvents = appointments
    .filter(apt => apt.status === 'upcoming')
    .map(apt => {
      const patient = patients.find(p => p.id === apt.patientId);
      return {
        id: apt.id,
        title: `${patient?.name}: ${apt.purpose}`,
        start: new Date(`${apt.date}T${apt.time}`),
        end: new Date(`${apt.date}T${apt.time}`),
        resource: apt
      };
    });

  // Styles object
  const styles = {
    sectionContainer: "bg-white shadow-md rounded-lg p-6 mb-6",
    sectionTitle: "text-xl font-semibold mb-4 text-gray-800 border-b pb-2",
    subsectionTitle: "text-lg font-medium mb-3 text-gray-700",
    card: "border rounded-lg p-4 hover:shadow-md transition-shadow duration-200 cursor-pointer",
    activeCard: "border-2 border-blue-500 bg-blue-50 rounded-lg p-4 shadow-md",
    inputField: "border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
    button: "bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center",
    secondaryButton: "bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors duration-200",
    table: "min-w-full divide-y divide-gray-200 border-collapse",
    tableHeader: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
    tableCell: "px-6 py-4 whitespace-nowrap",
    navTab: "px-6 py-3 font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200",
    activeNavTab: "px-6 py-3 font-medium text-blue-600 border-b-2 border-blue-600",
    navContainer: "flex border-b overflow-x-auto hide-scrollbar",
  };

  // Handle adding new care activity
  const handleAddActivity = () => {
    if (selectedPatient && newActivity.activity && newActivity.date) {
      const activity = {
        id: careActivities.length + 1,
        patientId: selectedPatient.id,
        ...newActivity,
        carer: 'Current User'
      };
      setCareActivities([activity, ...careActivities]);
      setNewActivity({ activity: '', notes: '', date: new Date().toISOString().split('T')[0] });
      alert(`Care activity recorded for ${selectedPatient.name}`);
    }
  };

  // Handle scheduling appointment - now using number type for patientId
  const handleScheduleAppointment = (e) => {
    e.preventDefault();
    const appointment = {
      id: appointments.length + 1,
      ...newAppointment,
      status: 'upcoming'
    };
    setAppointments([...appointments, appointment]);
    setNewAppointment({
      patientId: 0, // Reset to 0 instead of empty string
      date: '',
      time: '',
      purpose: '',
      type: 'medical'
    });
    alert('Appointment scheduled successfully!');
  };

  // Render patient medical records
  const renderPatientRecords = () => (
    <div className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>Patient Medical Records</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div>
          <h3 className={styles.subsectionTitle}>Select Patient</h3>
          <div className="space-y-3">
            {patients.map(patient => (
              <div 
                key={patient.id}
                className={selectedPatient?.id === patient.id ? styles.activeCard : styles.card}
                onClick={() => setSelectedPatient(patient)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium text-gray-800">{patient.name}</div>
                    <div className="text-sm text-gray-600">Age: {patient.age} | Room: {patient.room}</div>
                    <div className="text-xs text-gray-500 mt-1">{patient.condition}</div>
                  </div>
                  <div className="text-xs text-gray-400">
                    {patient.doctor}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-2">
          {selectedPatient ? (
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">{selectedPatient.name}</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div><span className="font-medium">Room:</span> {selectedPatient.room}</div>
                  <div><span className="font-medium">Age:</span> {selectedPatient.age}</div>
                  <div><span className="font-medium">Condition:</span> {selectedPatient.condition}</div>
                  <div><span className="font-medium">Admitted:</span> {selectedPatient.admissionDate}</div>
                </div>
              </div>
              
              {/* Patient Details */}
              <div>
                <h4 className="font-medium text-gray-800 mb-3">Patient Details</h4>
                <div className="bg-gray-50 p-4 rounded-lg border">
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div><span className="font-medium">Blood Type:</span> {medicalRecords[selectedPatient.id]?.details.bloodType}</div>
                    <div><span className="font-medium">Weight:</span> {medicalRecords[selectedPatient.id]?.details.weight}</div>
                    <div><span className="font-medium">Height:</span> {medicalRecords[selectedPatient.id]?.details.height}</div>
                    <div><span className="font-medium">Insurance:</span> {medicalRecords[selectedPatient.id]?.details.insurance}</div>
                    <div className="col-span-2"><span className="font-medium">Allergies:</span> {medicalRecords[selectedPatient.id]?.details.allergies.join(', ')}</div>
                    <div className="col-span-2"><span className="font-medium">Emergency Contact:</span> {medicalRecords[selectedPatient.id]?.details.emergencyContact}</div>
                  </div>
                </div>
              </div>
              
              {/* Medical History */}
              <div>
                <h4 className="font-medium text-gray-800 mb-3">Medical History</h4>
                <div className="border rounded-lg overflow-hidden">
                  <table className={styles.table}>
                    <thead className="bg-gray-50">
                      <tr>
                        <th className={styles.tableHeader}>Date</th>
                        <th className={styles.tableHeader}>Condition</th>
                        <th className={styles.tableHeader}>Notes</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {medicalRecords[selectedPatient.id]?.history.map((record, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className={styles.tableCell}>{record.date}</td>
                          <td className={styles.tableCell}>{record.condition}</td>
                          <td className={styles.tableCell}>{record.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              {/* Current Prescriptions */}
              <div>
                <h4 className="font-medium text-gray-800 mb-3">Current Prescriptions & Care Plans</h4>
                <div className="space-y-3">
                  {medicalRecords[selectedPatient.id]?.prescriptions.map((prescription, index) => (
                    <div key={index} className="border rounded-lg p-4 bg-green-50 border-green-100">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-medium text-gray-800">{prescription.medication}</div>
                          <div className="text-sm text-gray-600">{prescription.dosage}</div>
                          <div className="text-xs text-gray-500 mt-1">Prescribed by: {prescription.prescribedBy}</div>
                        </div>
                        <div className="text-xs text-gray-400">
                          Since {prescription.startDate}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
              <div className="text-center">
                <div className="text-gray-400 text-4xl mb-3">👈</div>
                <p className="text-gray-500 font-medium">Select a patient to view their medical records</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // Render patient activities
  const renderPatientActivities = () => (
    <div className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>Patient Care Activities</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className={styles.subsectionTitle}>Record New Activity</h3>
          {selectedPatient ? (
            <div className="bg-gray-50 p-4 rounded-lg border">
              <div className="mb-4 bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-blue-800">
                  Recording activity for: <span className="font-semibold">{selectedPatient.name}</span>
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Activity Type</label>
                  <select 
                    className={styles.inputField}
                    value={newActivity.activity}
                    onChange={(e) => setNewActivity({...newActivity, activity: e.target.value})}
                  >
                    <option value="">Select activity</option>
                    <option value="Personal hygiene assistance">Personal hygiene assistance</option>
                    <option value="Mobility assistance">Mobility assistance</option>
                    <option value="Meal assistance">Meal assistance</option>
                    <option value="Medication administration">Medication administration</option>
                    <option value="Vital signs check">Vital signs check</option>
                    <option value="Comfort care">Comfort care</option>
                    <option value="Social interaction">Social interaction</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input 
                    type="date" 
                    className={styles.inputField}
                    value={newActivity.date}
                    onChange={(e) => setNewActivity({...newActivity, date: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                  <textarea 
                    className={styles.inputField + " h-24 resize-none"}
                    rows="3"
                    placeholder="Enter detailed notes about the care activity..."
                    value={newActivity.notes}
                    onChange={(e) => setNewActivity({...newActivity, notes: e.target.value})}
                  ></textarea>
                </div>
                
                <button
                  onClick={handleAddActivity}
                  className={styles.button}
                  disabled={!newActivity.activity || !newActivity.date}
                >
                  Record Activity
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 p-6 rounded-lg border text-center">
              <div className="text-gray-400 text-4xl mb-3">👆</div>
              <p className="text-gray-500">Please select a patient from the Medical Records tab first</p>
            </div>
          )}
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-3">
            <h3 className={styles.subsectionTitle}>Recent Activities</h3>
            <select className="text-sm border rounded px-2 py-1">
              <option value="all">All Patients</option>
              {patients.map(patient => (
                <option key={patient.id} value={patient.id}>{patient.name}</option>
              ))}
            </select>
          </div>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {careActivities
              .filter(activity => !selectedPatient || activity.patientId === selectedPatient.id)
              .map(activity => {
                const patient = patients.find(p => p.id === activity.patientId);
                return (
                  <div key={activity.id} className="border rounded-lg p-4 bg-white">
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-medium text-gray-800">{activity.activity}</div>
                      <div className="text-xs text-gray-400">{activity.date}</div>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">Patient: {patient?.name}</div>
                    <div className="text-sm text-gray-700">{activity.notes}</div>
                    <div className="text-xs text-gray-500 mt-2">Recorded by: {activity.carer}</div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );

  // Render appointments
  const renderAppointments = () => (
    <div className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>Appointment Management</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className={styles.subsectionTitle}>Schedule New Appointment</h3>
          <div className="bg-gray-50 p-4 rounded-lg border">
            <form onSubmit={handleScheduleAppointment} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Patient</label>
                <select 
                  className={styles.inputField}
                  value={newAppointment.patientId}
                  onChange={(e) => setNewAppointment({...newAppointment, patientId: e.target.value})}
                  required
                >
                  <option value="">Select patient</option>
                  {patients.map(patient => (
                    <option key={patient.id} value={patient.id}>{patient.name}</option>
                  ))}
                </select>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input 
                    type="date" 
                    className={styles.inputField}
                    value={newAppointment.date}
                    onChange={(e) => setNewAppointment({...newAppointment, date: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                  <input 
                    type="time" 
                    className={styles.inputField}
                    value={newAppointment.time}
                    onChange={(e) => setNewAppointment({...newAppointment, time: e.target.value})}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                <select 
                  className={styles.inputField}
                  value={newAppointment.type}
                  onChange={(e) => setNewAppointment({...newAppointment, type: e.target.value})}
                >
                  <option value="medical">Medical</option>
                  <option value="therapy">Therapy</option>
                  <option value="consultation">Consultation</option>
                  <option value="followup">Follow-up</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Purpose</label>
                <input 
                  type="text" 
                  className={styles.inputField}
                  placeholder="Brief description"
                  value={newAppointment.purpose}
                  onChange={(e) => setNewAppointment({...newAppointment, purpose: e.target.value})}
                  required
                />
              </div>
              
              <button type="submit" className={styles.button}>
                Schedule Appointment
              </button>
            </form>
          </div>
        </div>
        
        <div>
          <h3 className={styles.subsectionTitle}>Upcoming Appointments</h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {appointments
              .filter(apt => apt.status === 'upcoming')
              .map(appointment => {
                const patient = patients.find(p => p.id === appointment.patientId);
                return (
                  <div key={appointment.id} className="border rounded-lg p-4 bg-blue-50 border-blue-100">
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-medium text-gray-800">{patient?.name}</div>
                      <div className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded">
                        {appointment.type}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 mb-1">{appointment.purpose}</div>
                    <div className="text-sm text-gray-700">
                      📅 {appointment.date} at {appointment.time}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      
      {/* Weekly Calendar View */}
      <div className="mb-6">
        <h3 className={styles.subsectionTitle}>Weekly Calendar</h3>
        <div className="bg-white border rounded-lg overflow-hidden" style={{ height: 400 }}>
          <Calendar
            localizer={localizer}
            events={calendarEvents}
            startAccessor="start"
            endAccessor="end"
            defaultView="week"
            views={['week', 'day']}
            className="calendar-override"
          />
        </div>
      </div>
      
      {/* Previous Appointments */}
      <div>
        <h3 className={styles.subsectionTitle}>Previous Appointments</h3>
        <div className="border rounded-lg overflow-hidden">
          <table className={styles.table}>
            <thead className="bg-gray-50">
              <tr>
                <th className={styles.tableHeader}>Patient</th>
                <th className={styles.tableHeader}>Date</th>
                <th className={styles.tableHeader}>Time</th>
                <th className={styles.tableHeader}>Purpose</th>
                <th className={styles.tableHeader}>Type</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {appointments
                .filter(apt => apt.status === 'completed')
                .map(appointment => {
                  const patient = patients.find(p => p.id === appointment.patientId);
                  return (
                    <tr key={appointment.id} className="hover:bg-gray-50">
                      <td className={styles.tableCell}>{patient?.name}</td>
                      <td className={styles.tableCell}>{appointment.date}</td>
                      <td className={styles.tableCell}>{appointment.time}</td>
                      <td className={styles.tableCell}>{appointment.purpose}</td>
                      <td className={styles.tableCell}>
                        <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">
                          {appointment.type}
                        </span>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-6">
        <header className="mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Carer Dashboard</h1>
              <p className="text-gray-600 mt-1">Welcome back, Carer Name</p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm">
                <div className="mr-3">
                  <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                </div>
                <div>
                  <div className="text-sm font-medium">On Duty</div>
                  <div className="text-xs text-gray-500">Until 6:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        <div className="mb-6 bg-white shadow-md rounded-lg overflow-hidden">
          <div className={styles.navContainer}>
            <button 
              className={activeTab === 'patient-records' ? styles.activeNavTab : styles.navTab}
              onClick={() => setActiveTab('patient-records')}
            >
              Patient Records
            </button>
            <button 
              className={activeTab === 'patient-activities' ? styles.activeNavTab : styles.navTab}
              onClick={() => setActiveTab('patient-activities')}
            >
              Care Activities
            </button>
            <button 
              className={activeTab === 'appointments' ? styles.activeNavTab : styles.navTab}
              onClick={() => setActiveTab('appointments')}
            >
              Appointments
            </button>
          </div>
        </div>
        
        {activeTab === 'patient-records' && renderPatientRecords()}
        {activeTab === 'patient-activities' && renderPatientActivities()}
        {activeTab === 'appointments' && renderAppointments()}
      </div>
    </div>
  );
};

export default Carer;
