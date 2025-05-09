import React from 'react';
import '../styles/main.css';
import '../styles/nurse.css';
import { NurseProvider } from '../context/NurseContext';
import { NurseDashboardContent } from '../components/nurse/NurseDashboardContent';

const Nurse = () => {
  return (
    <NurseProvider>
      <div className="nurse-dashboard">
        <div className="dashboard-container">
          <NurseDashboardContent />
        </div>
      </div>
    </NurseProvider>
  );
};

export default Nurse;