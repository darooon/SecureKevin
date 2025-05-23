import React, { useState } from 'react';
import '../styles/carer.css';
import HomeTab from '../components/carer/HomeTab';
import ClientsTab from '../components/carer/ClientsTab';
import { clientsData, weeklyOverviewsData, todayScheduleData, dailyTasksData } from '../data/carerData';

const Carer = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [clients] = useState(clientsData);
  const [selectedClient, setSelectedClient] = useState(null);

  return (
    <div className="dashboard">
      <div className="container">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {activeTab === 'home' && (
          <HomeTab 
            schedule={todayScheduleData} 
            tasks={dailyTasksData} 
            clients={clients} 
          />
        )}
        
        {activeTab === 'clients' && (
          <ClientsTab 
            clients={clients}
            selectedClient={selectedClient}
            setSelectedClient={setSelectedClient}
            weeklyOverviews={weeklyOverviewsData}
          />
        )}
      </div>
    </div>
  );
};

const Header = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <header className="dashboard-header">
        <div className="header-content">
          <div>
            <h1 className="dashboard-title">Carer Dashboard</h1>
            <p className="dashboard-subtitle">Welcome back, Carer Name</p>
          </div>
          <div className="status-indicator">
            <div className="status-dot"></div>
            <div>
              <div className="status-text">On Duty</div>
              <div className="status-time">Until 6:00 PM</div>
            </div>
          </div>
        </div>
      </header>
      
      <div className="navigation">
        <div className="nav-container">
          <button 
            className={`nav-tab ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => setActiveTab('home')}
          >
            Home
          </button>
          <button 
            className={`nav-tab ${activeTab === 'clients' ? 'active' : ''}`}
            onClick={() => setActiveTab('clients')}
          >
            Clients
          </button>
        </div>
      </div>
    </>
  );
};

export default Carer;
