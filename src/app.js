// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RelativeCarerDashboard from './pages/RelativeCarerDashboard';
import DoctorsDashboard from './pages/DoctorsDashboard';
import PatientDashboard from './pages/PatientDashboard';
import Login from './pages/Login';
import './styles/main.css';

function App() {
  // In a real app, you would check for authentication
  const isAuthenticated = true; // This would come from your auth context/state
  const userRole = 'doctor'; // This would come from your auth context/state

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route 
          path="/relative" 
          element={isAuthenticated ? <RelativeCarerDashboard /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/doctor" 
          element={isAuthenticated ? <DoctorsDashboard /> : <Navigate to="/login" />} 
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
              userRole === 'patient' ? <Navigate to="/patient" /> :
              <Navigate to="/relative" />
            ) : <Navigate to="/login" />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;