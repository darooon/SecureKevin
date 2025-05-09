import React, { createContext, useContext, useState } from 'react';

// Define role-based permissions
const rolePermissions = {
  doctor: {
    canViewPatientRecords: true,
    canEditPatientRecords: true,
    canPrescribeMedication: true,
    canScheduleAppointments: true,
    canViewAllPatients: true,
    canManageStaff: false,
  },
  nurse: {
    canViewPatientRecords: true,
    canEditPatientRecords: true,
    canPrescribeMedication: false,
    canScheduleAppointments: true,
    canViewAllPatients: true,
    canManageStaff: false,
  },
  patient: {
    canViewPatientRecords: true,
    canEditPatientRecords: false,
    canPrescribeMedication: false,
    canScheduleAppointments: false,
    canViewAllPatients: false,
    canManageStaff: false,
  },
  relative: {
    canViewPatientRecords: true,
    canEditPatientRecords: false,
    canPrescribeMedication: false,
    canScheduleAppointments: false,
    canViewAllPatients: false,
    canManageStaff: false,
  },
};

// Mock user database
const mockUsers = {
  doctor: [
    { username: 'dr.smith', password: 'doctor123', name: 'Dr. John Smith' },
    { username: 'dr.jones', password: 'doctor456', name: 'Dr. Sarah Jones' }
  ],
  nurse: [
    { username: 'nurse.wilson', password: 'nurse123', name: 'Nurse Emily Wilson' },
    { username: 'nurse.brown', password: 'nurse456', name: 'Nurse Michael Brown' }
  ],
  patient: [
    { username: 'patient.doe', password: 'patient123', name: 'John Doe' },
    { username: 'patient.smith', password: 'patient456', name: 'Jane Smith' }
  ],
  relative: [
    { username: 'relative.johnson', password: 'relative123', name: 'Mary Johnson' },
    { username: 'relative.williams', password: 'relative456', name: 'Robert Williams' }
  ]
};

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (username, password, userType) => {
    setLoading(true);
    setError(null);
    
    try {
      // Validate user type
      if (!mockUsers[userType]) {
        setError('Invalid user type');
        return false;
      }

      // Find user in the mock database
      const user = mockUsers[userType].find(
        u => u.username === username && u.password === password
      );

      if (!user) {
        setError('Invalid username or password');
        return false;
      }

      // Create user object with permissions
      const authenticatedUser = {
        id: user.username,
        username: user.username,
        name: user.name,
        role: userType,
        permissions: rolePermissions[userType],
      };
      
      setUser(authenticatedUser);
      localStorage.setItem('user', JSON.stringify(authenticatedUser));
      return true;
    } catch (err) {
      setError('An error occurred during login');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const hasPermission = (permission) => {
    if (!user) return false;
    return user.permissions[permission] || false;
  };

  const value = {
    user,
    loading,
    error,
    login,
    logout,
    hasPermission,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 