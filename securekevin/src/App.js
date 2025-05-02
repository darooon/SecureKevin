// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import FamilyMember from './pages/FamilyMember';
import Carer from './pages/Carer';
import DoctorsDashboard from './pages/DoctorsDashboard';
import Nurse from './pages/Nurse';
import PatientDashboard from './pages/PatientDashboard';
import Login from './pages/Login';
import './App.css';
import './styles/main.css';

// Note: You'll need to create the actual components for these pages
// Remove these placeholder components once you've created the real ones
const DoctorsDashboardPlaceholder = () => <div>Doctor's Dashboard (Coming Soon)</div>;
const PatientDashboardPlaceholder = () => <div>Patient Dashboard (Coming Soon)</div>;
const FamilyMemberPlaceholder = () => <div>Family Member Dashboard (Coming Soon)</div>;
const CarerPlaceholder = () => <div>Carer Dashboard (Coming Soon)</div>;
const NursePlaceholder = () => <div>Nurse Dashboard (Coming Soon)</div>;

function App() {
  // In a real app, you would check for authentication
  const isAuthenticated = true; // This would come from your auth context/state
  const userRole = 'doctor'; // This would come from your auth context/state - options: 'doctor', 'nurse', 'patient', 'family', 'carer'

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route 
          path="/family" 
          element={isAuthenticated ? <FamilyMember /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/carer" 
          element={isAuthenticated ? <Carer /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/doctor" 
          element={isAuthenticated ? <DoctorsDashboard /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/nurse" 
          element={isAuthenticated ? <Nurse /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/patient" 
          element={isAuthenticated ? <PatientDashboard /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/" 
          element={
            isAuthenticated ? (
              userRole === 'doctor' ? <Navigate to="/doctor" /> :
              userRole === 'nurse' ? <Navigate to="/nurse" /> :
              userRole === 'patient' ? <Navigate to="/patient" /> :
              userRole === 'family' ? <Navigate to="/family" /> :
              userRole === 'carer' ? <Navigate to="/carer" /> :
              <Navigate to="/login" />
            ) : <Navigate to="/login" />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;