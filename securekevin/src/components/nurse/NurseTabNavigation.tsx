
import React from 'react';
import { User, Calendar, Clipboard, Activity, Users } from 'lucide-react';

interface NurseTabNavigationProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const NurseTabNavigation: React.FC<NurseTabNavigationProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tab-list">
      <button 
        className={`tab-button ${activeTab === 'profile' ? 'active' : ''}`}
        onClick={() => setActiveTab('profile')}
      >
        <User size={16} />
        Profile
      </button>
      <button 
        className={`tab-button ${activeTab === 'availability' ? 'active' : ''}`}
        onClick={() => setActiveTab('availability')}
      >
        <Calendar size={16} />
        Availability
      </button>
      <button 
        className={`tab-button ${activeTab === 'inventory' ? 'active' : ''}`}
        onClick={() => setActiveTab('inventory')}
      >
        <Clipboard size={16} />
        Inventory
      </button>
      <button 
        className={`tab-button ${activeTab === 'patient-activity' ? 'active' : ''}`}
        onClick={() => setActiveTab('patient-activity')}
      >
        <Activity size={16} />
        Patient Activity
      </button>
      <button 
        className={`tab-button ${activeTab === 'appointments' ? 'active' : ''}`}
        onClick={() => setActiveTab('appointments')}
      >
        <Users size={16} />
        Appointments
      </button>
    </div>
  );
};

export default NurseTabNavigation;