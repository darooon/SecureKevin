import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../styles/main.css';

const localizer = momentLocalizer(moment);

// Icons for use throughout the component
const IconCheck = (props) => React.createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  ...props
}, React.createElement('polyline', { points: "20 6 9 17 4 12" }));

const IconPlus = (props) => React.createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  ...props
}, 
  React.createElement('line', { x1: "12", y1: "5", x2: "12", y2: "19" }),
  React.createElement('line', { x1: "5", y1: "12", x2: "19", y2: "12" })
);

const IconMinus = (props) => React.createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  ...props
}, React.createElement('line', { x1: "5", y1: "12", x2: "19", y2: "12" }));

const IconEdit = (props) => React.createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  ...props
}, 
  React.createElement('path', { d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }),
  React.createElement('path', { d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" })
);

const IconTrash = (props) => React.createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  ...props
}, 
  React.createElement('polyline', { points: "3 6 5 6 21 6" }),
  React.createElement('path', { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" })
);

const IconMail = (props) => React.createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  ...props
}, 
  React.createElement('path', { d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" }),
  React.createElement('polyline', { points: "22,6 12,13 2,6" })
);

const IconPhone = (props) => React.createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  ...props
}, React.createElement('path', { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }));

const IconMapPin = (props) => React.createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  ...props
}, 
  React.createElement('path', { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" }),
  React.createElement('circle', { cx: "12", cy: "10", r: "3" })
);

const IconBadge = (props) => React.createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  ...props
}, React.createElement('path', { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }));

const IconCalendar = (props) => React.createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  ...props
}, 
  React.createElement('rect', { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
  React.createElement('line', { x1: "16", y1: "2", x2: "16", y2: "6" }),
  React.createElement('line', { x1: "8", y1: "2", x2: "8", y2: "6" }),
  React.createElement('line', { x1: "3", y1: "10", x2: "21", y2: "10" })
);

const IconFilter = (props) => React.createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  ...props
}, React.createElement('polygon', { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" }));

// Helper components
const Separator = ({ className }) => (
  <hr className={`separator ${className || ''}`} />
);

const Card = ({ children, className }) => (
  <div className={`card ${className || ''}`}>
    {children}
  </div>
);

const CardContent = ({ children, className }) => (
  <div className={`card-content ${className || ''}`}>
    {children}
  </div>
);

const Button = ({ children, variant = "primary", className = "", onClick, ...props }) => {
  const variantClass = variant === "primary" ? "btn-primary" : 
                      variant === "outline" ? "btn-outline" : 
                      "btn-link";
  
  return (
    <button 
      className={`btn ${variantClass} ${className}`} 
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

const Input = ({ className, ...props }) => (
  <input 
    className={className || ''} 
    {...props} 
  />
);

const Textarea = ({ className, ...props }) => (
  <textarea 
    className={`min-h-80 ${className || ''}`} 
    {...props}
  />
);

const ProgressBar = ({ value, max, threshold = 0, showLabel = true }) => {
  const percentage = Math.min(Math.round((value / max) * 100), 100);
  
  let barColorClass = "progress-green";
  if (threshold && value <= threshold) {
    barColorClass = "progress-red";
  } else if (percentage < 50) {
    barColorClass = "progress-yellow";
  }
  
  return (
    <div className="flex items-center">
      {showLabel && <span className="text-sm mr-3">{value}</span>}
      <div className="progress-container">
        <div
          className={`progress-bar ${barColorClass}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const StatusBadge = ({ status, type = 'default' }) => {
  let badgeClass = '';
  
  if (type === 'inventory') {
    if (status === 'In Stock') {
      badgeClass = 'badge-green';
    } else if (status === 'Low Stock') {
      badgeClass = 'badge-yellow';
    } else {
      badgeClass = 'badge-red';
    }
  } else {
    if (status === 'Stable') {
      badgeClass = 'badge-green';
    } else if (status === 'Monitoring') {
      badgeClass = 'badge-yellow';
    } else {
      badgeClass = 'badge-blue';
    }
  }
  
  return (
    <span className={`status-badge ${badgeClass}`}>
      {status}
    </span>
  );
};

const Nurse = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Bandages', quantity: 50, threshold: 20, category: 'Medical supplies' },
    { id: 2, name: 'Painkillers', quantity: 30, threshold: 15, category: 'Medications' },
    { id: 3, name: 'Gloves', quantity: 100, threshold: 30, category: 'Protection' },
    { id: 4, name: 'Thermometers', quantity: 15, threshold: 5, category: 'Diagnostic' },
    { id: 5, name: 'Blood Pressure Monitors', quantity: 8, threshold: 3, category: 'Diagnostic' },
  ]);

  const [newInventoryItem, setNewInventoryItem] = useState({
    name: '',
    quantity: 0,
    threshold: 0,
    category: 'Medical supplies'
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
    { id: 1, name: 'John Doe', age: 68, room: '101', status: 'Stable' },
    { id: 2, name: 'Jane Smith', age: 72, room: '102', status: 'Monitoring' },
    { id: 3, name: 'Robert Johnson', age: 65, room: '103', status: 'Stable' },
  ]);

  const [selectedPatient, setSelectedPatient] = useState(patients[0]);
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

  const [newAppointment, setNewAppointment] = useState({
    patientId: '',
    date: '',
    time: '',
    purpose: '',
    notes: ''
  });

  const handleAddInventoryItem = () => {
    if (newInventoryItem.name && newInventoryItem.quantity > 0) {
      setInventory([
        ...inventory, 
        { 
          id: inventory.length + 1, 
          ...newInventoryItem 
        }
      ]);
      setNewInventoryItem({ name: '', quantity: 0, threshold: 0, category: 'Medical supplies' });
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
    if (newAppointment.patientId && newAppointment.date && newAppointment.time && newAppointment.purpose) {
      const newAppt = {
        id: appointments.length + 1,
        patientId: parseInt(newAppointment.patientId),
        date: newAppointment.date,
        time: newAppointment.time,
        purpose: newAppointment.purpose,
      };
      
      setAppointments([...appointments, newAppt]);
      setNewAppointment({
        patientId: '',
        date: '',
        time: '',
        purpose: '',
        notes: ''
      });
    }
  };

  const getPatientById = (id) => {
    return patients.find(patient => patient.id === id);
  };

  const getStockStatus = (item) => {
    if (item.quantity <= item.threshold) {
      return 'Low Stock';
    }
    return 'In Stock';
  };

  // Render profile section
  const renderProfile = () => (
    <div className="grid grid-cols-1 lg-grid-cols-3 gap-6">
      <div className="lg-col-span-2">
        <Card className="card-shadow-hover">
          <CardContent>
            <div className="flex flex-col flex-row items-start items-center">
              <div className="flex-shrink-0 mb-4 mr-6">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                  alt="Nurse profile" 
                  className="rounded-full w-24 h-24 object-cover border-4 border-primary-100" 
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-1">Sarah Johnson, RN</h2>
                <div className="flex flex-wrap items-center">
                  <span className="status-badge badge-blue mr-2 mb-2">
                    ID: N12345
                  </span>
                  <span className="status-badge badge-purple mr-2 mb-2">
                    Geriatric Care
                  </span>
                  <span className="status-badge badge-gray mb-2">
                    8 Years Experience
                  </span>
                </div>
                <p className="text-gray-500 mt-2">
                  Specialized in providing compassionate care for elderly patients, focused on improving quality of life and maintaining dignity.
                </p>
              </div>
            </div>
            
            <Separator className="my-6" />
            
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>
            <div className="grid md-grid-cols-2 gap-4">
              <div className="flex items-center">
                <IconMail className="text-gray-400 mr-3" />
                <span className="text-gray-600">sarah.johnson@securekevin.com</span>
              </div>
              <div className="flex items-center">
                <IconPhone className="text-gray-400 mr-3" />
                <span className="text-gray-600">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <IconMapPin className="text-gray-400 mr-3" />
                <span className="text-gray-600">Memorial Hospital, West Wing</span>
              </div>
              <div className="flex items-center">
                <IconBadge className="text-gray-400 mr-3" />
                <span className="text-gray-600">Employee ID: 87542</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div>
        <Card className="card-shadow-hover">
          <CardContent>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Certifications</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <IconCheck className="text-primary" />
                </div>
                <div className="ml-3">
                  <p className="text-gray-800 font-medium">Registered Nurse License</p>
                  <p className="text-gray-500 text-sm">#RN123456 - Expires: Jan 2026</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <IconCheck className="text-primary" />
                </div>
                <div className="ml-3">
                  <p className="text-gray-800 font-medium">Advanced Cardiac Life Support</p>
                  <p className="text-gray-500 text-sm">ACLS Certified - Expires: Mar 2025</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <IconCheck className="text-primary" />
                </div>
                <div className="ml-3">
                  <p className="text-gray-800 font-medium">Geriatric Nursing Certification</p>
                  <p className="text-gray-500 text-sm">GNC - Expires: Sep 2025</p>
                </div>
              </li>
            </ul>
            
            <Separator className="my-6" />
            
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Training</h3>
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 flex items-start">
              <div className="flex-shrink-0 mr-3">
                <IconCalendar className="text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-primary-800">Dementia Care Workshop</h4>
                <p className="text-sm text-primary-700 mt-1">June 15-16, 2025 - Conference Room A</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  // Render availability calendar section
  const renderAvailability = () => (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardContent>
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2 md:mb-0">Manage Availability</h2>
          <div className="flex space-x-2">
            <Button className="flex items-center">
              <IconPlus className="mr-2" />
              Add Availability
            </Button>
            <Button variant="outline" className="flex items-center">
              <IconFilter className="mr-2" />
              Filters
            </Button>
          </div>
        </div>
        
        <div className="mb-6 flex flex-wrap gap-3">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-blue-600 mr-2"></div>
            <span className="text-sm text-gray-600">Available</span>
          </div>
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-gray-300 mr-2"></div>
            <span className="text-sm text-gray-600">Unavailable</span>
          </div>
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-yellow-400 mr-2"></div>
            <span className="text-sm text-gray-600">Tentative</span>
          </div>
        </div>
        
        <div className="rounded-lg overflow-hidden bg-white shadow-sm border border-gray-200">
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
              className="rounded-lg"
            />
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-800 mb-3">Upcoming Shifts</h3>
          <div className="space-y-3">
            {availability.map((shift, index) => (
              <div key={index} className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-blue-900">
                      {moment(shift.start).format('dddd, MMMM D')}
                    </h4>
                    <p className="text-blue-700 mt-1">
                      {moment(shift.start).format('h:mm A')} - {moment(shift.end).format('h:mm A')}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
                      <IconEdit />
                    </button>
                    <button className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
                      <IconTrash />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  // Render inventory management section
  const renderInventory = () => (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
      <div className="xl:col-span-2">
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent>
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2 md:mb-0">Inventory Items</h2>
              <Button className="flex items-center" onClick={() => document.getElementById('inventory-form')?.focus()}>
                <IconPlus className="mr-2" />
                Add Item
              </Button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 rounded-t-lg">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {inventory.map(item => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{item.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <ProgressBar value={item.quantity} max={item.threshold * 3} threshold={item.threshold} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <StatusBadge status={getStockStatus(item)} type="inventory" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.category}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <Button 
                            variant="outline"
                            onClick={() => handleUpdateInventory(item.id, item.quantity + 1)}
                            className="p-1"
                          >
                            <IconPlus />
                          </Button>
                          <Button 
                            variant="outline"
                            onClick={() => handleUpdateInventory(item.id, Math.max(0, item.quantity - 1))}
                            className="p-1"
                          >
                            <IconMinus />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div>
        <Card id="inventory-form" className="hover:shadow-lg transition-shadow duration-300">
          <CardContent>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Add New Item</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Item Name</label>
                <Input
                  type="text"
                  placeholder="Enter item name"
                  value={newInventoryItem.name}
                  onChange={(e) => setNewInventoryItem({...newInventoryItem, name: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                <Input
                  type="number"
                  placeholder="Enter quantity"
                  min="0"
                  value={newInventoryItem.quantity}
                  onChange={(e) => setNewInventoryItem({...newInventoryItem, quantity: parseInt(e.target.value) || 0})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Low Stock Threshold</label>
                <Input
                  type="number"
                  placeholder="Enter threshold"
                  min="0"
                  value={newInventoryItem.threshold}
                  onChange={(e) => setNewInventoryItem({...newInventoryItem, threshold: parseInt(e.target.value) || 0})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={newInventoryItem.category}
                  onChange={(e) => setNewInventoryItem({...newInventoryItem, category: e.target.value})}
                >
                  <option value="Medical supplies">Medical supplies</option>
                  <option value="Medications">Medications</option>
                  <option value="Protection">Protection</option>
                  <option value="Diagnostic">Diagnostic</option>
                  <option value="Emergency">Emergency</option>
                </select>
              </div>
              
              <Button 
                onClick={handleAddInventoryItem}
                className="w-full mt-2"
              >
                Add to Inventory
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="mt-6 hover:shadow-lg transition-shadow duration-300">
          <CardContent>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Inventory Statistics</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Total Items</span>
                  <span className="text-sm font-medium text-gray-700">{inventory.length}</span>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Low Stock Items</span>
                  <span className="text-sm font-medium text-red-600">
                    {inventory.filter(item => item.quantity <= item.threshold).length}
                  </span>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Categories</span>
                  <span className="text-sm font-medium text-gray-700">
                    {new Set(inventory.map(item => item.category)).size}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  // Render patient medical activity section
  const renderPatientActivity = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div>
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Patient List</h3>
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search patients..."
                className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute left-3 top-2.5 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            
            <div className="space-y-3">
              {patients.map(patient => (
                <div 
                  key={patient.id}
                  className={`p-3 border rounded-lg cursor-pointer transition-colors duration-200 ${
                    selectedPatient?.id === patient.id 
                      ? 'bg-blue-50 border-blue-500' 
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedPatient(patient)}
                >
                  <div className="flex justify-between">
                    <div className="font-medium text-gray-800">{patient.name}</div>
                    <StatusBadge status={patient.status} />
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Age: {patient.age} | Room: {patient.room}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="lg:col-span-2">
        {selectedPatient ? (
          <>
            <Card className="hover:shadow-lg transition-shadow duration-300 mb-6">
              <CardContent>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{selectedPatient.name}</h3>
                    <div className="mt-1 space-x-2">
                      <span className="text-gray-600">Age: {selectedPatient.age}</span>
                      <span className="text-gray-400">|</span>
                      <span className="text-gray-600">Room: {selectedPatient.room}</span>
                      <span className="text-gray-400">|</span>
                      <span className="text-gray-600">Status: <span className="font-medium">{selectedPatient.status}</span></span>
                    </div>
                  </div>
                  <Button variant="outline">View Full Profile</Button>
                </div>
                
                <Separator className="my-4" />
                
                <h4 className="font-medium text-gray-800 mb-3">Medical Activity</h4>
                <div className="space-y-4">
                  {medicalRecords[selectedPatient.id]?.map((record, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded-lg">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-800">{record.activity}</span>
                        <span className="text-sm text-gray-500">{record.date}</span>
                      </div>
                      <p className="text-gray-600 mt-1 text-sm">{record.notes}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Add Medical Activity</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Activity Type</label>
                    <select 
                      className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                    <Input 
                      type="date" 
                      value={medicalActivity.date}
                      onChange={(e) => setMedicalActivity({...medicalActivity, date: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                    <Textarea 
                      placeholder="Add detailed notes about the medical activity"
                      value={medicalActivity.notes}
                      onChange={(e) => setMedicalActivity({...medicalActivity, notes: e.target.value})}
                    />
                  </div>
                  
                  <Button 
                    onClick={handleAddMedicalActivity}
                    className="mt-2"
                  >
                    Record Activity
                  </Button>
                </div>
              </CardContent>
            </Card>
          </>
        ) : (
          <div className="h-full flex items-center justify-center bg-gray-50 rounded-lg p-8 text-center">
            <div>
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">No patient selected</h3>
              <p className="mt-1 text-gray-500">Please select a patient from the list to view and record medical activities.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // Render appointments section
  const renderAppointments = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Upcoming Appointments</h3>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {appointments.map(appointment => {
                    const patient = getPatientById(appointment.patientId);
                    return (
                      <tr key={appointment.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                              <span className="text-blue-600 font-semibold">
                                {patient?.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{patient?.name}</div>
                              <div className="text-sm text-gray-500">Room {patient?.room}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{appointment.date}</div>
                          <div className="text-sm text-gray-500">{appointment.time}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-900">{appointment.purpose}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-900">Edit</button>
                            <button className="text-red-600 hover:text-red-900">Cancel</button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div>
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Schedule New Appointment</h3>
            <form onSubmit={handleScheduleAppointment}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Patient</label>
                  <select 
                    className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    name="patient"
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
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <Input 
                    type="date" 
                    name="date" 
                    value={newAppointment.date}
                    onChange={(e) => setNewAppointment({...newAppointment, date: e.target.value})}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                  <Input 
                    type="time" 
                    name="time" 
                    value={newAppointment.time}
                    onChange={(e) => setNewAppointment({...newAppointment, time: e.target.value})}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Purpose</label>
                  <Input 
                    type="text" 
                    name="purpose" 
                    placeholder="Purpose of appointment"
                    value={newAppointment.purpose}
                    onChange={(e) => setNewAppointment({...newAppointment, purpose: e.target.value})}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Notes (optional)</label>
                  <Textarea 
                    name="notes" 
                    placeholder="Additional notes"
                    value={newAppointment.notes}
                    onChange={(e) => setNewAppointment({...newAppointment, notes: e.target.value})}
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full mt-2"
                >
                  Schedule Appointment
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Navigation Tabs */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white z-10 shadow-md">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl font-bold text-blue-600">MedPortal</h1>
        </div>
        
        <div className="flex overflow-x-auto px-4 pb-3">
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-4 py-2 font-medium text-sm whitespace-nowrap mr-4 ${
              activeTab === 'profile' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'
            }`}
          >
            My Profile
          </button>
          <button
            onClick={() => setActiveTab('availability')}
            className={`px-4 py-2 font-medium text-sm whitespace-nowrap mr-4 ${
              activeTab === 'availability' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'
            }`}
          >
            Availability
          </button>
          <button
            onClick={() => setActiveTab('inventory')}
            className={`px-4 py-2 font-medium text-sm whitespace-nowrap mr-4 ${
              activeTab === 'inventory' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'
            }`}
          >
            Inventory
          </button>
          <button
            onClick={() => setActiveTab('patients')}
            className={`px-4 py-2 font-medium text-sm whitespace-nowrap mr-4 ${
              activeTab === 'patients' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'
            }`}
          >
            Patient Activity
          </button>
          <button
            onClick={() => setActiveTab('appointments')}
            className={`px-4 py-2 font-medium text-sm whitespace-nowrap mr-4 ${
              activeTab === 'appointments' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'
            }`}
          >
            Appointments
          </button>
        </div>
      </div>
      
      <div className="flex h-screen pt-16 md:pt-0">
        {/* Desktop Sidebar */}
        <aside className="hidden md:flex md:flex-col md:w-64 bg-white shadow-md h-full">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-blue-600 flex items-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-7 w-7 mr-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" 
                />
              </svg>
              MedPortal
            </h1>
          </div>
          
          <nav className="mt-3 flex-grow">
            {[
              { id: 'profile', name: 'My Profile' },
              { id: 'availability', name: 'Availability' },
              { id: 'inventory', name: 'Inventory' },
              { id: 'patients', name: 'Patient Activity' },
              { id: 'appointments', name: 'Appointments' },
            ].map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center py-3 px-6 cursor-pointer transition-colors ${
                  activeTab === item.id
                    ? "bg-blue-50 border-r-4 border-blue-600 text-blue-600"
                    : "hover:bg-gray-50 text-gray-700"
                }`}
              >
                <span className="font-medium">{item.name}</span>
              </div>
            ))}
          </nav>
          
          <div className="p-6">
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Nurse profile"
                className="h-10 w-10 rounded-full border-2 border-blue-300"
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">Sarah Johnson</p>
                <p className="text-xs text-gray-500">Geriatric Care</p>
              </div>
            </div>
          </div>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 p-4 pt-6 md:p-8 overflow-y-auto">
          {/* Desktop Header */}
          <div className="hidden md:flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              {activeTab === 'profile' ? 'My Profile' : 
                activeTab === 'availability' ? 'Manage Availability' :
                activeTab === 'inventory' ? 'Inventory Management' :
                activeTab === 'patients' ? 'Patient Medical Activity' :
                'Appointments'}
            </h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full bg-white shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Content based on active tab */}
          <div className="pb-6">
            {activeTab === 'profile' && renderProfile()}
            {activeTab === 'availability' && renderAvailability()}
            {activeTab === 'inventory' && renderInventory()}
            {activeTab === 'patients' && renderPatientActivity()}
            {activeTab === 'appointments' && renderAppointments()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Nurse;