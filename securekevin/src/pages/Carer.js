
import React, { useState } from 'react';
import '../styles/carer.css';
import Header from '../components/carer/Header';
import HomeTab from '../components/carer/HomeTab';
import ClientsTab from '../components/carer/ClientsTab';
import { clientsData, weeklyOverviewsData, todayScheduleData, dailyTasksData } from '../data/carerData';
import { ClientType } from '../types/carer';

const Carer = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [clients] = useState(clientsData);
  const [selectedClient, setSelectedClient] = useState<ClientType | null>(null);

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

export default Carer;
