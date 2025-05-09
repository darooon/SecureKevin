// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import FamilyMember from './pages/FamilyMember';
import Carer from './pages/Carer';
import DoctorsDashboard from './pages/DoctorsDashboard';
import Nurse from './pages/Nurse';
import PatientDashboard from './pages/PatientDashboard';
import Login from './pages/Login';
import { AuthProvider, useAuth } from './context/AuthContext';
import './App.css';
import './styles/main.css';

// Protected Route component
const ProtectedRoute = ({ children, requiredRole }) => {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to={`/${user.role}`} />;
  }

  return children;
};

function AppRoutes() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      
      <Route 
        path="/family" 
        element={
          <ProtectedRoute requiredRole="relative">
            <FamilyMember />
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/carer" 
        element={
          <ProtectedRoute requiredRole="relative">
            <Carer />
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/doctor" 
        element={
          <ProtectedRoute requiredRole="doctor">
            <DoctorsDashboard />
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/nurse" 
        element={
          <ProtectedRoute requiredRole="nurse">
            <Nurse />
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/patient" 
        element={
          <ProtectedRoute requiredRole="patient">
            <PatientDashboard />
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/" 
        element={
          user ? (
            <Navigate to={`/${user.role}`} />
          ) : (
            <Navigate to="/login" />
          )
        } 
      />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;