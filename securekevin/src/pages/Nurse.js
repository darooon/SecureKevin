
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

  // Define styles for consistent use
  const styles = {
    sectionContainer: "bg-white shadow-md rounded-lg p-6 mb-6",
    sectionTitle: "text-xl font-semibold mb-4 text-gray-800 border-b pb-2",
    subsectionTitle: "text-lg font-medium mb-3 text-gray-700",
    card: "border rounded-lg p-4 hover:shadow-md transition-shadow duration-200",
    activeCard: "border-2 border-blue-500 bg-blue-50 rounded-lg p-4 shadow-md",
    inputField: "border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
    button: "bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center",
    secondaryButton: "bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors duration-200",
    dangerButton: "bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors duration-200",
    successButton: "bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition-colors duration-200",
    table: "min-w-full divide-y divide-gray-200 border-collapse",
    tableHeader: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
    tableCell: "px-6 py-4 whitespace-nowrap",
    inStockBadge: "px-2 py-1 rounded-full text-xs bg-green-100 text-green-800 font-medium",
    lowStockBadge: "px-2 py-1 rounded-full text-xs bg-red-100 text-red-800 font-medium",
    navTab: "px-6 py-3 font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200",
    activeNavTab: "px-6 py-3 font-medium text-blue-600 border-b-2 border-blue-600",
    navContainer: "flex border-b overflow-x-auto hide-scrollbar",
  };

  // Render nurse profile section with improved styling
  const renderProfile = () => (
    <div className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>Nurse Profile</h2>
      <div className="flex flex-col md:flex-row md:items-start">
        <div className="md:mr-6 mb-4 md:mb-0 flex justify-center">
          <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 border-4 border-blue-100">
          </div>
        </div>
        <div className="flex-grow">
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Name here, RN</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <div className="flex items-center">
                <span className="font-medium mr-2">ID:</span>
                <span className="text-gray-700">N12345</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-2">Department:</span>
                <span className="text-gray-700">Geriatric Care</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-2">Experience:</span>
                <span className="text-gray-700">8 years</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-2">Shift:</span>
                <span className="text-gray-700">Day (7am-3pm)</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className={styles.subsectionTitle}>Contact Information</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center">
                  <span className="font-medium w-20">Email:</span>
                  <span>Nurse@securekevin.com</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium w-20">Phone:</span>
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium w-20">Extension:</span>
                  <span>4587</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className={styles.subsectionTitle}>Certifications</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                  <span>Registered Nurse License #RN123456</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                  <span>Advanced Cardiac Life Support (ACLS)</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                  <span>Geriatric Nursing Certification</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <h3 className={styles.subsectionTitle}>Current Status</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-100 text-center">
                <div className="text-xl font-bold text-green-600">12</div>
                <div className="text-sm text-gray-600">Patients</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-center">
                <div className="text-xl font-bold text-blue-600">4</div>
                <div className="text-sm text-gray-600">Today's Tasks</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 text-center">
                <div className="text-xl font-bold text-purple-600">2</div>
                <div className="text-sm text-gray-600">Appointments</div>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 text-center">
                <div className="text-xl font-bold text-amber-600">3</div>
                <div className="text-sm text-gray-600">Alerts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Render availability calendar section with improved styling
  const renderAvailability = () => (
    <div className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>Manage Availability</h2>
      <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <div className="text-sm text-gray-700 mb-1">Instructions:</div>
        <p className="text-gray-600">Click on any time slot to mark your availability. Your schedule will be visible to doctors and care coordinators.</p>
      </div>
      
      <div className="bg-white border rounded-lg overflow-hidden" style={{ height: 600 }}>
        <Calendar
          localizer={localizer}
          events={availability}
          startAccessor="start"
          endAccessor="end"
          selectable
          onSelectSlot={handleSlotSelect}
          defaultView="week"
          views={['week', 'day']}
          className="calendar-override"
        />
      </div>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border rounded-lg p-4 bg-green-50">
          <h4 className="font-medium mb-2 text-gray-800">Available Hours</h4>
          <p className="text-gray-600">16 hours this week</p>
        </div>
        <div className="border rounded-lg p-4 bg-blue-50">
          <h4 className="font-medium mb-2 text-gray-800">Upcoming Shifts</h4>
          <p className="text-gray-600">4 shifts scheduled</p>
        </div>
        <div className="border rounded-lg p-4 bg-purple-50">
          <h4 className="font-medium mb-2 text-gray-800">Time Off Requests</h4>
          <p className="text-gray-600">1 pending approval</p>
        </div>
      </div>
    </div>
  );

  // Render inventory management section with improved styling
  const renderInventory = () => (
    <div className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>Inventory Management</h2>
      
      <div className="mb-6 bg-gray-50 p-4 rounded-lg border">
        <h3 className={styles.subsectionTitle}>Add New Item</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Item Name</label>
            <input
              type="text"
              placeholder="Enter item name"
              className={styles.inputField}
              value={newInventoryItem.name}
              onChange={(e) => setNewInventoryItem({...newInventoryItem, name: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
            <input
              type="number"
              placeholder="0"
              className={styles.inputField}
              value={newInventoryItem.quantity}
              onChange={(e) => setNewInventoryItem({...newInventoryItem, quantity: parseInt(e.target.value)})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Alert Threshold</label>
            <input
              type="number"
              placeholder="0"
              className={styles.inputField}
              value={newInventoryItem.threshold}
              onChange={(e) => setNewInventoryItem({...newInventoryItem, threshold: parseInt(e.target.value)})}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button 
            onClick={handleAddInventoryItem}
            className={styles.button}
            disabled={!newInventoryItem.name || newInventoryItem.quantity <= 0}
          >
            Add to Inventory
          </button>
        </div>
      </div>
      
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className={styles.subsectionTitle}>Current Inventory</h3>
          <div className="flex text-sm">
            <div className="flex items-center mr-4">
              <span className="h-3 w-3 bg-green-500 rounded-full mr-1"></span>
              <span>In Stock</span>
            </div>
            <div className="flex items-center">
              <span className="h-3 w-3 bg-red-500 rounded-full mr-1"></span>
              <span>Low Stock</span>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto rounded-lg border">
          <table className={styles.table}>
            <thead className="bg-gray-50">
              <tr>
                <th className={styles.tableHeader}>Item</th>
                <th className={styles.tableHeader}>Quantity</th>
                <th className={styles.tableHeader}>Status</th>
                <th className={styles.tableHeader + " text-center"}>Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {inventory.map(item => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className={styles.tableCell}>
                    <div className="font-medium text-gray-800">{item.name}</div>
                    <div className="text-xs text-gray-500">Alert when below {item.threshold}</div>
                  </td>
                  <td className={styles.tableCell}>
                    <span className="text-lg font-medium">{item.quantity}</span>
                  </td>
                  <td className={styles.tableCell}>
                    <span className={item.quantity <= item.threshold ? styles.lowStockBadge : styles.inStockBadge}>
                      {item.quantity <= item.threshold ? 'Low Stock' : 'In Stock'}
                    </span>
                  </td>
                  <td className={styles.tableCell + " text-center"}>
                    <div className="flex justify-center space-x-2">
                      <button 
                        onClick={() => handleUpdateInventory(item.id, item.quantity + 1)}
                        className={styles.successButton}
                        title="Add one"
                      >
                        +
                      </button>
                      <button 
                        onClick={() => handleUpdateInventory(item.id, Math.max(0, item.quantity - 1))}
                        className={styles.dangerButton}
                        title="Remove one"
                        disabled={item.quantity <= 0}
                      >
                        -
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {inventory.length === 0 && (
                <tr>
                  <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                    No inventory items found. Add some items above.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  // Render patient medical activity section with improved styling
  const renderPatientActivity = () => (
    <div className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>Patient Medical Activity</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className={styles.subsectionTitle}>Select Patient</h3>
          <div className="space-y-3 mb-6">
            {patients.map(patient => (
              <div 
                key={patient.id}
                className={selectedPatient?.id === patient.id ? styles.activeCard : styles.card}
                onClick={() => setSelectedPatient(patient)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium text-gray-800">{patient.name}</div>
                    <div className="text-sm text-gray-600">Age: {patient.age} | Room: {patient.room}</div>
                  </div>
                  <div>
                    <button 
                      className="text-blue-600 hover:text-blue-800"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPatient(patient);
                      }}
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {selectedPatient && (
            <div className="mt-6">
              <h3 className={styles.subsectionTitle}>Medical Records for {selectedPatient.name}</h3>
              <div className="border rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className={styles.tableHeader}>Date</th>
                      <th className={styles.tableHeader}>Activity</th>
                      <th className={styles.tableHeader}>Notes</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {medicalRecords[selectedPatient.id]?.map((record, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className={styles.tableCell}>
                          <div className="font-medium">{record.date}</div>
                        </td>
                        <td className={styles.tableCell}>{record.activity}</td>
                        <td className={styles.tableCell}>
                          <div className="max-w-xs break-words">{record.notes}</div>
                        </td>
                      </tr>
                    ))}
                    {!medicalRecords[selectedPatient.id] || medicalRecords[selectedPatient.id].length === 0 ? (
                      <tr>
                        <td colSpan="3" className="px-6 py-4 text-center text-gray-500">
                          No medical records found for this patient.
                        </td>
                      </tr>
                    ) : null}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
        
        <div>
          <h3 className={styles.subsectionTitle}>Add Medical Activity</h3>
          <div className="bg-gray-50 p-4 rounded-lg border mb-4">
            {selectedPatient ? (
              <>
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                    <input 
                      type="date" 
                      className={styles.inputField}
                      value={medicalActivity.date}
                      onChange={(e) => setMedicalActivity({...medicalActivity, date: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                    <textarea 
                      className={styles.inputField + " h-24 resize-none"}
                      rows="3"
                      placeholder="Enter detailed notes about the activity..."
                      value={medicalActivity.notes}
                      onChange={(e) => setMedicalActivity({...medicalActivity, notes: e.target.value})}
                    ></textarea>
                  </div>
                  
                  <button
                    onClick={handleAddMedicalActivity}
                    className={styles.button}
                    disabled={!medicalActivity.activity || !medicalActivity.date}
                  >
                    Record Activity
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="text-gray-400 text-4xl mb-3">👆</div>
                <p className="text-gray-500 font-medium">Please select a patient first</p>
                <p className="text-gray-400 text-sm mt-1">Click on a patient from the list on the left</p>
              </div>
            )}
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border">
            <h4 className="font-medium mb-3 text-gray-800">Quick Reference</h4>
            <div className="space-y-2 text-sm">
              <div className="flex">
                <div className="w-1/3 font-medium text-gray-700">Last Vitals Check:</div>
                <div className="w-2/3 text-gray-600">Today, 10:30 AM</div>
              </div>
              <div className="flex">
                <div className="w-1/3 font-medium text-gray-700">Medication Due:</div>
                <div className="w-2/3 text-gray-600">Today, 2:00 PM</div>
              </div>
              <div className="flex">
                <div className="w-1/3 font-medium text-gray-700">Special Notes:</div>
                <div className="w-2/3 text-gray-600">Check blood pressure twice daily</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  // Render appointment scheduling section with improved styling
  const renderAppointments = () => (
    <div className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>Appointment Scheduling</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className={styles.subsectionTitle}>Schedule New Appointment</h3>
          <div className="bg-gray-50 p-4 rounded-lg border">
            <form onSubmit={handleScheduleAppointment} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Patient</label>
                <select 
                  name="patient"
                  className={styles.inputField}
                  required
                >
                  <option value="">Select patient</option>
                  {patients.map(patient => (
                    <option key={patient.id} value={patient.id}>{patient.name}</option>
                  ))}
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input 
                    type="date" 
                    name="date"
                    className={styles.inputField}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                  <input 
                    type="time" 
                    name="time"
                    className={styles.inputField}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Purpose</label>
                <input 
                  type="text" 
                  name="purpose"
                  placeholder="Brief description of appointment purpose"
                  className={styles.inputField}
                  required
                />
              </div>
              
              <button
                type="submit"
                className={styles.button}
              >
                Schedule Appointment
              </button>
            </form>
          </div>
          
          <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h4 className="font-medium mb-2 text-gray-800">Scheduling Guidelines</h4>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>Standard appointments are 30 minutes</li>
              <li>Emergency slots are available daily at 8:30am and 3:30pm</li>
              <li>Allow 1 hour for new patient evaluations</li>
            </ul>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-3">
            <h3 className={styles.subsectionTitle}>Upcoming Appointments</h3>
            <div className="text-sm text-blue-600 cursor-pointer hover:underline">
              View All
            </div>
          </div>
          <div className="border rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className={styles.tableHeader}>Patient</th>
                  <th className={styles.tableHeader}>Date</th>
                  <th className={styles.tableHeader}>Time</th>
                  <th className={styles.tableHeader + " hidden md:table-cell"}>Purpose</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {appointments.map((appointment) => {
                  const patient = patients.find(p => p.id === appointment.patientId);
                  return (
                    <tr key={appointment.id} className="hover:bg-gray-50">
                      <td className={styles.tableCell}>
                        <div className="font-medium text-gray-800">{patient?.name || 'Unknown'}</div>
                        <div className="text-xs text-gray-500 md:hidden">Room {patient?.room || '---'}</div>
                      </td>
                      <td className={styles.tableCell}>{appointment.date}</td>
                      <td className={styles.tableCell}>{appointment.time}</td>
                      <td className={styles.tableCell + " hidden md:table-cell"}>
                        <div className="max-w-xs">{appointment.purpose}</div>
                      </td>
                    </tr>
                  );
                })}
                {appointments.length === 0 && (
                  <tr>
                    <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                      No appointments scheduled.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-3 rounded-lg border border-green-100 text-center">
              <div className="text-xl font-bold text-green-600">8</div>
              <div className="text-sm text-gray-600">This Week</div>
            </div>
            <div className="bg-amber-50 p-3 rounded-lg border border-amber-100 text-center">
              <div className="text-xl font-bold text-amber-600">3</div>
              <div className="text-sm text-gray-600">Today</div>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 text-center">
              <div className="text-xl font-bold text-blue-600">2</div>
              <div className="text-sm text-gray-600">Pending</div>
            </div>
          </div>
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
              <h1 className="text-2xl font-bold text-gray-800">Nurse Dashboard</h1>
              <p className="text-gray-600 mt-1">Welcome back, Nurse Name</p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm">
                <div className="mr-3">
                  <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                </div>
                <div>
                  <div className="text-sm font-medium">On Duty</div>
                  <div className="text-xs text-gray-500">Until 5:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        <div className="mb-6 bg-white shadow-md rounded-lg overflow-hidden">
          <div className={styles.navContainer}>
            <button 
              className={activeTab === 'profile' ? styles.activeNavTab : styles.navTab}
              onClick={() => setActiveTab('profile')}
            >
              Profile
            </button>
            <button 
              className={activeTab === 'availability' ? styles.activeNavTab : styles.navTab}
              onClick={() => setActiveTab('availability')}
            >
              Availability
            </button>
            <button 
              className={activeTab === 'inventory' ? styles.activeNavTab : styles.navTab}
              onClick={() => setActiveTab('inventory')}
            >
              Inventory
            </button>
            <button 
              className={activeTab === 'patient-activity' ? styles.activeNavTab : styles.navTab}
              onClick={() => setActiveTab('patient-activity')}
            >
              Patient Activity
            </button>
            <button 
              className={activeTab === 'appointments' ? styles.activeNavTab : styles.navTab}
              onClick={() => setActiveTab('appointments')}
            >
              Appointments
            </button>
          </div>
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
