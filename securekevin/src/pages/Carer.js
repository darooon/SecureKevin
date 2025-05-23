
import React, { useState } from 'react';
import { HomeSection } from './dashboard/HomeSection';
import { ClientsSection } from './dashboard/ClientsSection';
import { TasksSection } from './dashboard/TasksSection';
import { useToast } from '@/components/ui/use-toast';

export const CarerDashboard = () => {
  const [activeTab, setActiveTab] = useState('home');
  const { toast } = useToast();

  // Navigation tabs with styling
  const styles = {
    sectionContainer: "bg-white shadow-md rounded-lg p-6 mb-6 animate-fade-in",
    navContainer: "flex border-b overflow-x-auto hide-scrollbar",
    navTab: "px-6 py-3 font-medium text-gray-600 hover:text-carer-purple transition-colors duration-200",
    activeNavTab: "px-6 py-3 font-medium text-carer-purple border-b-2 border-carer-purple",
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    toast({
      title: "Section Changed",
      description: `Now viewing ${tab.charAt(0).toUpperCase() + tab.slice(1)}`,
      duration: 2000,
    });
  };

  // Render the active section based on tab
  const renderActiveSection = () => {
    switch (activeTab) {
      case 'home':
        return <HomeSection />;
      case 'clients':
        return <ClientsSection />;
      case 'tasks':
        return <TasksSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <header className="mb-6 animate-fade-in">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Carer Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back, Jamie</p>
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
      
      <div className="mb-6 bg-white shadow-md rounded-lg overflow-hidden animate-fade-in">
        <div className={styles.navContainer}>
          <button 
            className={activeTab === 'home' ? styles.activeNavTab : styles.navTab}
            onClick={() => handleTabChange('home')}
          >
            Home
          </button>
          <button 
            className={activeTab === 'clients' ? styles.activeNavTab : styles.navTab}
            onClick={() => handleTabChange('clients')}
          >
            Clients
          </button>
          <button 
            className={activeTab === 'tasks' ? styles.activeNavTab : styles.navTab}
            onClick={() => handleTabChange('tasks')}
          >
            Tasks
          </button>
        </div>
      </div>
      
      {renderActiveSection()}
    </div>
  );
};













import { Calendar, Clock, Users, CheckSquare } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export const HomeSection = () => {
  const { toast } = useToast();
  const [scheduleEntries, setScheduleEntries] = useState([
    {
      id: 1,
      clientName: 'Martha Johnson',
      date: '2025-05-03',
      startTime: '09:00',
      endTime: '11:00',
      type: 'Regular Visit',
      completed: false
    },
    {
      id: 2,
      clientName: 'Robert Wilson',
      date: '2025-05-03',
      startTime: '13:00',
      endTime: '15:00',
      type: 'Medical Assistance',
      completed: false
    },
    {
      id: 3,
      clientName: 'Alice Thompson',
      date: '2025-05-04',
      startTime: '10:00',
      endTime: '12:00',
      type: 'Regular Visit',
      completed: false
    }
  ]);
  
  // Define styles for consistent use
  const styles = {
    sectionContainer: "bg-white shadow-md rounded-lg p-6 mb-6",
    sectionTitle: "text-xl font-semibold mb-4 text-gray-800 border-b pb-2",
    subsectionTitle: "text-lg font-medium mb-3 text-gray-700",
    tableHeader: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
    tableCell: "px-6 py-4 whitespace-nowrap",
    button: "bg-carer-purple text-white px-4 py-2 rounded-md hover:bg-carer-dark-purple transition-colors duration-200 flex items-center justify-center",
  };

  const handleMarkCompleted = (id) => {
    setScheduleEntries(scheduleEntries.map(entry => 
      entry.id === id ? { ...entry, completed: !entry.completed } : entry
    ));
    
    toast({
      title: "Visit Status Updated",
      description: "Schedule has been updated successfully",
      variant: "default",
    });
  };

  const formatDate = (dateString) => {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Group schedules by date for better organization
  const groupedSchedules = {};
  scheduleEntries.forEach(entry => {
    if (!groupedSchedules[entry.date]) {
      groupedSchedules[entry.date] = [];
    }
    groupedSchedules[entry.date].push(entry);
  });

  // Task summary data
  const taskStats = {
    totalTasks: 8,
    completedTasks: 3,
    highPriorityTasks: 2,
    todaysTasks: 4
  };

  return (
    <div className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>Home</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
          <div className="flex items-center">
            <div className="p-2 bg-carer-purple rounded-full text-white mr-3">
              <Calendar size={20} />
            </div>
            <div>
              <div className="text-lg font-bold text-gray-800">Today</div>
              <div className="text-sm text-gray-600">3 visits scheduled</div>
            </div>
          </div>
        </div>
            
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <div className="flex items-center">
            <div className="p-2 bg-carer-blue rounded-full text-white mr-3">
              <Clock size={20} />
            </div>
            <div>
              <div className="text-lg font-bold text-gray-800">This Week</div>
              <div className="text-sm text-gray-600">12 hours scheduled</div>
            </div>
          </div>
        </div>
            
        <div className="bg-green-50 p-4 rounded-lg border border-green-100">
          <div className="flex items-center">
            <div className="p-2 bg-carer-green rounded-full text-white mr-3">
              <Users size={20} />
            </div>
            <div>
              <div className="text-lg font-bold text-gray-800">Clients</div>
              <div className="text-sm text-gray-600">5 unique clients</div>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
          <div className="flex items-center">
            <div className="p-2 bg-carer-yellow rounded-full text-white mr-3">
              <CheckSquare size={20} />
            </div>
            <div>
              <div className="text-lg font-bold text-gray-800">Tasks</div>
              <div className="text-sm text-gray-600">{taskStats.completedTasks}/{taskStats.totalTasks} completed</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className={styles.subsectionTitle}>Your Upcoming Schedule</h3>
        <div className="space-y-6">
          {Object.keys(groupedSchedules).sort().map(date => (
            <div key={date} className="rounded-lg border overflow-hidden">
              <div className="bg-carer-purple/10 px-6 py-3">
                <h4 className="font-medium text-carer-dark-purple">{formatDate(date)}</h4>
              </div>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className={styles.tableHeader}>Client</th>
                    <th scope="col" className={styles.tableHeader}>Time</th>
                    <th scope="col" className={styles.tableHeader}>Type</th>
                    <th scope="col" className={styles.tableHeader}>Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {groupedSchedules[date].map(entry => (
                    <tr key={entry.id} className="hover:bg-gray-50">
                      <td className={styles.tableCell}>
                        <div className="font-medium text-gray-800">{entry.clientName}</div>
                      </td>
                      <td className={styles.tableCell}>{entry.startTime} - {entry.endTime}</td>
                      <td className={styles.tableCell}>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          entry.type === 'Regular Visit' ? 'bg-blue-100 text-blue-800' : 
                          entry.type === 'Medical Assistance' ? 'bg-purple-100 text-purple-800' :
                          entry.type === 'Medication Administration' ? 'bg-green-100 text-green-800' :
                          entry.type === 'Personal Care' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        } font-medium`}>
                          {entry.type}
                        </span>
                      </td>
                      <td className={styles.tableCell}>
                        <button
                          onClick={() => handleMarkCompleted(entry.id)}
                          className={`px-3 py-1 rounded-md text-sm ${
                            entry.completed
                              ? 'bg-green-100 text-green-700 hover:bg-green-200'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {entry.completed ? 'Completed' : 'Mark Complete'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
          
          {Object.keys(groupedSchedules).length === 0 && (
            <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
              <div className="text-gray-400 text-4xl mb-3">📆</div>
              <p className="text-gray-500 font-medium">No schedules found</p>
              <p className="text-gray-400 text-sm mt-1">Your schedule will appear here when assigned</p>
            </div>
          )}
        </div>
      </div>
      
      <div>
        <h3 className={styles.subsectionTitle}>Upcoming Tasks</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2 border rounded-lg overflow-hidden">
            <div className="bg-gray-50 p-4 flex justify-between items-center">
              <div>
                <h4 className="font-medium text-gray-800">Today's Tasks</h4>
                <p className="text-sm text-gray-500">{taskStats.todaysTasks} tasks to complete</p>
              </div>
              <div className="text-sm text-carer-purple font-medium">
                View All
              </div>
            </div>
            <ul className="divide-y divide-gray-200">
              <li className="p-4 hover:bg-gray-50">
                <div className="flex items-center">
                  <div className="h-8 w-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3">
                    <span className="font-medium text-sm">!</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">Medication reminder for Martha Johnson</div>
                    <div className="text-sm text-gray-500">Due at 10:00 AM</div>
                  </div>
                </div>
              </li>
              <li className="p-4 hover:bg-gray-50">
                <div className="flex items-center">
                  <div className="h-8 w-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mr-3">
                    <span className="font-medium text-sm">+</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">Physical therapy assistance for Robert Wilson</div>
                    <div className="text-sm text-gray-500">Due at 2:30 PM</div>
                  </div>
                </div>
              </li>
              <li className="p-4 hover:bg-gray-50">
                <div className="flex items-center">
                  <div className="h-8 w-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">
                    <span className="font-medium text-sm">i</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">Daily report submission</div>
                    <div className="text-sm text-gray-500">Due by 5:00 PM</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <div className="bg-gradient-to-br from-carer-purple/20 to-carer-blue/20 p-4 rounded-lg border h-full">
              <h4 className="font-medium text-gray-800 mb-3">Task Progress</h4>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-600">Daily Tasks</span>
                  <span className="text-sm font-medium text-gray-800">{taskStats.completedTasks}/{taskStats.totalTasks}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-carer-purple h-2 rounded-full" 
                    style={{ width: `${(taskStats.completedTasks / taskStats.totalTasks) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-white rounded-md shadow-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                  <div className="text-sm">{taskStats.highPriorityTasks} high priority tasks</div>
                </div>
                <div className="flex items-center p-3 bg-white rounded-md shadow-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <div className="text-sm">{taskStats.completedTasks} completed tasks</div>
                </div>
                <div className="flex items-center p-3 bg-white rounded-md shadow-sm">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                  <div className="text-sm">{taskStats.totalTasks - taskStats.completedTasks} pending tasks</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};







import React, { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

export const ClientsSection = () => {
  const { toast } = useToast();
  const [clients, setClients] = useState([
    { id: 1, name: 'Martha Johnson', age: 78, address: '123 Elder St', careNeeds: 'Mobility assistance, medication reminders' },
    { id: 2, name: 'Robert Wilson', age: 82, address: '456 Senior Ave', careNeeds: 'Personal hygiene, meal prep, companionship' },
    { id: 3, name: 'Alice Thompson', age: 75, address: '789 Golden Rd', careNeeds: 'Medication management, light housekeeping' },
  ]);

  const [selectedClient, setSelectedClient] = useState<typeof clients[0] | null>(null);

  // Mock care records
  const careRecords = {
    1: [
      { date: '2025-04-25', activity: 'Medication reminder', notes: 'Took all morning medications as scheduled' },
      { date: '2025-04-20', activity: 'Mobility assistance', notes: 'Assisted with walking exercises, showing improvement' },
    ],
    2: [
      { date: '2025-04-27', activity: 'Meal preparation', notes: 'Prepared lunch and dinner, client ate well' },
      { date: '2025-04-22', activity: 'Personal hygiene', notes: 'Assisted with shower and grooming' },
    ],
    3: [
      { date: '2025-04-26', activity: 'Light housekeeping', notes: 'Changed bed linens, did laundry' },
      { date: '2025-04-21', activity: 'Companionship', notes: 'Read book together, played cards' },
    ],
  };
  
  // Mock appointments data
  const clientAppointments = {
    1: [
      { date: '2025-05-05', time: '09:30 - 11:30', type: 'Regular Visit' },
      { date: '2025-05-08', time: '14:00 - 15:30', type: 'Medical Assistance' },
    ],
    2: [
      { date: '2025-05-04', time: '10:00 - 12:00', type: 'Personal Care' },
      { date: '2025-05-07', time: '09:00 - 11:00', type: 'Regular Visit' },
    ],
    3: [
      { date: '2025-05-06', time: '13:00 - 14:30', type: 'Medication Administration' },
      { date: '2025-05-09', time: '10:30 - 12:30', type: 'Regular Visit' },
    ],
  };

  // Define styles for consistent use
  const styles = {
    sectionContainer: "bg-white shadow-md rounded-lg p-6 mb-6",
    sectionTitle: "text-xl font-semibold mb-4 text-gray-800 border-b pb-2",
    subsectionTitle: "text-lg font-medium mb-3 text-gray-700",
    card: "border rounded-lg p-4 hover:shadow-md transition-shadow duration-200",
    activeCard: "border-2 border-carer-purple bg-carer-purple/5 rounded-lg p-4 shadow-md",
    tableHeader: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
    tableCell: "px-6 py-4 whitespace-nowrap",
  };

  return (
    <div className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>Client Management</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className={styles.subsectionTitle}>Select Client</h3>
          <div className="space-y-3 mb-6">
            {clients.map(client => (
              <div 
                key={client.id}
                className={selectedClient?.id === client.id ? styles.activeCard : styles.card}
                onClick={() => setSelectedClient(client)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium text-gray-800">{client.name}</div>
                    <div className="text-sm text-gray-600">Age: {client.age} | {client.address}</div>
                  </div>
                  <div>
                    <button 
                      className="text-carer-purple hover:text-carer-dark-purple"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedClient(client);
                      }}
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {selectedClient && (
            <div className="mt-6">
              <h3 className={styles.subsectionTitle}>Care Records for {selectedClient.name}</h3>
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
                    {careRecords[selectedClient.id]?.map((record, index) => (
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
                    {!careRecords[selectedClient.id] || careRecords[selectedClient.id].length === 0 ? (
                      <tr>
                        <td colSpan={3} className="px-6 py-4 text-center text-gray-500">
                          No care records found for this client.
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
          {selectedClient ? (
            <>
              <h3 className={styles.subsectionTitle}>Client Information</h3>
              <div className="bg-accent p-4 rounded-lg border mb-6">
                <div className="space-y-4">
                  <div className="flex">
                    <div className="w-1/3 font-medium text-gray-700">Name:</div>
                    <div className="w-2/3 text-gray-600">{selectedClient.name}</div>
                  </div>
                  <div className="flex">
                    <div className="w-1/3 font-medium text-gray-700">Age:</div>
                    <div className="w-2/3 text-gray-600">{selectedClient.age} years</div>
                  </div>
                  <div className="flex">
                    <div className="w-1/3 font-medium text-gray-700">Address:</div>
                    <div className="w-2/3 text-gray-600">{selectedClient.address}</div>
                  </div>
                  <div className="flex">
                    <div className="w-1/3 font-medium text-gray-700">Care Needs:</div>
                    <div className="w-2/3 text-gray-600">{selectedClient.careNeeds}</div>
                  </div>
                </div>
              </div>
              
              <h3 className={styles.subsectionTitle}>Upcoming Appointments</h3>
              <div className="border rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className={styles.tableHeader}>Date</th>
                      <th className={styles.tableHeader}>Time</th>
                      <th className={styles.tableHeader}>Type</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {clientAppointments[selectedClient.id]?.map((appointment, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className={styles.tableCell}>
                          <div className="font-medium">{appointment.date}</div>
                        </td>
                        <td className={styles.tableCell}>{appointment.time}</td>
                        <td className={styles.tableCell}>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            appointment.type === 'Regular Visit' ? 'bg-blue-100 text-blue-800' : 
                            appointment.type === 'Medical Assistance' ? 'bg-purple-100 text-purple-800' :
                            appointment.type === 'Medication Administration' ? 'bg-green-100 text-green-800' :
                            appointment.type === 'Personal Care' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          } font-medium`}>
                            {appointment.type}
                          </span>
                        </td>
                      </tr>
                    ))}
                    {!clientAppointments[selectedClient.id] || clientAppointments[selectedClient.id].length === 0 ? (
                      <tr>
                        <td colSpan={3} className="px-6 py-4 text-center text-gray-500">
                          No upcoming appointments for this client.
                        </td>
                      </tr>
                    ) : null}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center py-12">
                <div className="text-gray-400 text-4xl mb-3">👈</div>
                <p className="text-gray-500 font-medium">Select a client to view details</p>
                <p className="text-gray-400 text-sm mt-1">Click on a client from the list on the left</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};











import React from 'react';
import { CarerDashboard } from '../components/CarerDashboard';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CarerDashboard />
    </div>
  );
};

export default Index;


