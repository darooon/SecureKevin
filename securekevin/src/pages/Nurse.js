// src/pages/Nurse.js
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../styles/main.css';

const localizer = momentLocalizer(moment);

const Nurse = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Bandages', quantity: 50, threshold: 20 },
    { id: 2, name: 'Painkillers', quantity: 30, threshold: 15 },
    { id: 3, name: 'Gloves', quantity: 100, threshold: 30 },
    { id: 4, name: 'Thermometers', quantity: 15, threshold: 5 },
    { id: 5, name: 'Blood Pressure Monitors', quantity: 8, threshold: 3 },
  ]);

  const [newInventoryItem, setNewInventoryItem] = useState({
    name: '',
    quantity: 0,
    threshold: 0
  });

  const [availability, setAvailability] = useState([
    {
      title: 'Available',
      start: new Date(2025, 4, 3, 9, 0), // May 3, 2025, 9:00 AM
      end: new Date(2025, 4, 3, 17, 0),  // May 3, 2025, 5:00 PM
      allDay: false,
    },
    {
      title: 'Available',
      start: new Date(2025, 4, 4, 9, 0), // May 4, 2025, 9:00 AM
      end: new Date(2025, 4, 4, 17, 0),  // May 4, 2025, 5:00 PM
      allDay: false,
    },
  ]);

  const [patients, setPatients] = useState([
    { id: 1, name: 'John Doe', age: 68, room: '101' },
    { id: 2, name: 'Jane Smith', age: 72, room: '102' },
    { id: 3, name: 'Robert Johnson', age: 65, room: '103' },
  ]);

  const [selectedPatient, setSelectedPatient] = useState(null);
  const [medicalActivity, setMedicalActivity] = useState({
    activity: '',
    notes: '',
    date: '',
  });

  // Mock appointments data
  const [appointments, setAppointments] = useState([
    { id: 1, patientId: 1, date: '2025-05-05', time: '10:00', purpose: 'Blood pressure check' },
    { id: 2, patientId: 2, date: '2025-05-06', time: '14:30', purpose: 'Medication review' },
    { id: 3, patientId: 3, date: '2025-05-07', time: '09:15', purpose: 'Post-op checkup' },
  ]);

  // Mock medical records
  const medicalRecords = {
    1: [
      { date: '2025-04-25', activity: 'Blood pressure reading', notes: '140/90, slightly elevated' },
      { date: '2025-04-20', activity: 'Medication administration', notes: 'Given daily heart medication' },
    ],
    2: [
      { date: '2025-04-27', activity: 'Temperature check', notes: '37.2°C, normal' },
      { date: '2025-04-22', activity: 'Assisted with physical therapy', notes: 'Good mobility improvement' },
    ],
    3: [
      { date: '2025-04-26', activity: 'Wound dressing change', notes: 'Healing well, no signs of infection' },
      { date: '2025-04-21', activity: 'Pain assessment', notes: 'Reported pain level 3/10' },
    ],
  };

  const handleAddInventoryItem = () => {
    if (newInventoryItem.name && newInventoryItem.quantity > 0) {
      setInventory([
        ...inventory, 
        { 
          id: inventory.length + 1, 
          ...newInventoryItem 
        }
      ]);
      setNewInventoryItem({ name: '', quantity: 0, threshold: 0 });
    }
  };

  const handleUpdateInventory = (id, newQuantity) => {
    setInventory(inventory.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleSlotSelect = ({ start, end }) => {
    const title = window.prompt('Set availability for this time slot?');
    if (title) {
      setAvailability([
        ...availability,
        {
          start,
          end,
          title,
        },
      ]);
    }
  };

  const handleAddMedicalActivity = () => {
    if (selectedPatient && medicalActivity.activity && medicalActivity.date) {
      alert(`Added medical activity: ${medicalActivity.activity} for ${selectedPatient.name}`);
      setMedicalActivity({ activity: '', notes: '', date: '' });
    }
  };

  const handleScheduleAppointment = (e) => {
    e.preventDefault();
    const form = e.target;
    const newAppointment = {
      id: appointments.length + 1,
      patientId: parseInt(form.patient.value),
      date: form.date.value,
      time: form.time.value,
      purpose: form.purpose.value,
    };
    
    setAppointments([...appointments, newAppointment]);
    form.reset();
  };

  // Render nurse profile section
  const renderProfile = () => (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="flex items-center">
        <div className="mr-4">
          <img 
            src="/api/placeholder/100/100" 
            alt="Nurse profile" 
            className="rounded-full" 
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Sarah Johnson, RN</h2>
          <p className="text-gray-600">ID: N12345</p>
          <p className="text-gray-600">Department: Geriatric Care</p>
          <p className="text-gray-600">Years of Experience: 8</p>
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-medium">Contact Information</h3>
        <p className="text-gray-600">Email: sarah.johnson@securekevin.com</p>
        <p className="text-gray-600">Phone: (555) 123-4567</p>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-medium">Certifications</h3>
        <ul className="list-disc pl-5 text-gray-600">
          <li>Registered Nurse License #RN123456</li>
          <li>Advanced Cardiac Life Support (ACLS)</li>
          <li>Geriatric Nursing Certification</li>
        </ul>
      </div>
    </div>
  );

  // Render availability calendar section
  const renderAvailability = () => (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Manage Availability</h2>
      <p className="mb-4 text-gray-600">Click on any time slot to set your availability.</p>
      <div style={{ height: 500 }}>
        <Calendar
          localizer={localizer}
          events={availability}
          startAccessor="start"
          endAccessor="end"
          selectable
          onSelectSlot={handleSlotSelect}
          defaultView="week"
          views={['week', 'day']}
        />
      </div>
    </div>
  );

  // Render inventory management section
  const renderInventory = () => (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Inventory Management</h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Add New Item</h3>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Item name"
            className="border rounded p-2 flex-grow"
            value={newInventoryItem.name}
            onChange={(e) => setNewInventoryItem({...newInventoryItem, name: e.target.value})}
          />
          <input
            type="number"
            placeholder="Quantity"
            className="border rounded p-2 w-24"
            value={newInventoryItem.quantity}
            onChange={(e) => setNewInventoryItem({...newInventoryItem, quantity: parseInt(e.target.value)})}
          />
          <input
            type="number"
            placeholder="Threshold"
            className="border rounded p-2 w-24"
            value={newInventoryItem.threshold}
            onChange={(e) => setNewInventoryItem({...newInventoryItem, threshold: parseInt(e.target.value)})}
          />
          <button 
            onClick={handleAddInventoryItem}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add
          </button>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-2">Current Inventory</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {inventory.map(item => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      item.quantity <= item.threshold 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {item.quantity <= item.threshold ? 'Low Stock' : 'In Stock'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleUpdateInventory(item.id, item.quantity + 1)}
                        className="bg-green-600 text-white px-2 py-1 rounded text-sm"
                      >
                        +
                      </button>
                      <button 
                        onClick={() => handleUpdateInventory(item.id, Math.max(0, item.quantity - 1))}
                        className="bg-red-600 text-white px-2 py-1 rounded text-sm"
                      >
                        -
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  // Render patient medical activity section
  const renderPatientActivity = () => (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Patient Medical Activity</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-medium mb-2">Select Patient</h3>
          <div className="space-y-2">
            {patients.map(patient => (
              <div 
                key={patient.id}
                className={`p-3 border rounded-lg cursor-pointer ${
                  selectedPatient?.id === patient.id ? 'bg-blue-50 border-blue-500' : ''
                }`}
                onClick={() => setSelectedPatient(patient)}
              >
                <div className="font-medium">{patient.name}</div>
                <div className="text-sm text-gray-600">Age: {patient.age} | Room: {patient.room}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">Add Medical Activity</h3>
          {selectedPatient ? (
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">Activity Type</label>
                <select 
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
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
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <input 
                  type="date" 
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  value={medicalActivity.date}
                  onChange={(e) => setMedicalActivity({...medicalActivity, date: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Notes</label>
                <textarea 
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  rows="3"
                  value={medicalActivity.notes}
                  onChange={(e) => setMedicalActivity({...medicalActivity, notes: e.target.value})}
                ></textarea>
              </div>
              
              <button
                onClick={handleAddMedicalActivity}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
              >
                Record Activity
              </button>
            </div>
          ) : (
            <div className="text-gray-500 italic">Please select a patient first</div>
          )}
        </div>
      </div>
      
      {selectedPatient && (
        <div className="mt-6">
          <h3 className="text-lg font-medium mb-2">Medical Records for {selectedPatient.name}</h3>
          <div className="border rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notes</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {medicalRecords[selectedPatient.id]?.map((record, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">{record.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{record.activity}</td>
                    <td className="px-6 py-4">{record.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
  
  // Render appointment scheduling section
  const renderAppointments = () => (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Appointment Scheduling</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-medium mb-2">Schedule New Appointment</h3>
          <form onSubmit={handleScheduleAppointment} className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">Patient</label>
              <select 
                name="patient"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              >
                <option value="">Select patient</option>
                {patients.map(patient => (
                  <option key={patient.id} value={patient.id}>{patient.name}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input 
                type="date" 
                name="date"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Time</label>
              <input 
                type="time" 
                name="time"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Purpose</label>
              <input 
                type="text" 
                name="purpose"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>
            
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
            >
              Schedule Appointment
            </button>
          </form>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">Upcoming Appointments</h3>
          <div className="border rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {appointments.map((appointment) => {
                  const patient = patients.find(p => p.id === appointment.patientId);
                  return (
                    <tr key={appointment.id}>
                      <td className="px-6 py-4 whitespace-nowrap">{patient?.name || 'Unknown'}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{appointment.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{appointment.time}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{appointment.purpose}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Nurse Dashboard</h1>
        
        <div className="mb-6 bg-white shadow rounded-lg">
          <nav className="flex border-b">
            <button 
              className={`px-4 py-2 font-medium ${activeTab === 'profile' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
              onClick={() => setActiveTab('profile')}
            >
              Profile
            </button>
            <button 
              className={`px-4 py-2 font-medium ${activeTab === 'availability' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
              onClick={() => setActiveTab('availability')}
            >
              Availability
            </button>
            <button 
              className={`px-4 py-2 font-medium ${activeTab === 'inventory' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
              onClick={() => setActiveTab('inventory')}
            >
              Inventory
            </button>
            <button 
              className={`px-4 py-2 font-medium ${activeTab === 'patient-activity' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
              onClick={() => setActiveTab('patient-activity')}
            >
              Patient Activity
            </button>
            <button 
              className={`px-4 py-2 font-medium ${activeTab === 'appointments' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
              onClick={() => setActiveTab('appointments')}
            >
              Appointments
            </button>
          </nav>
        </div>
        
        {activeTab === 'profile' && renderProfile()}
        {activeTab === 'availability' && renderAvailability()}
        {activeTab === 'inventory' && renderInventory()}
        {activeTab === 'patient-activity' && renderPatientActivity()}
        {activeTab === 'appointments' && renderAppointments()}
      </div>
    </div>
  );
};

export default Nurse;