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
  family: {
    canViewPatientRecords: true,
    canEditPatientRecords: false,
    canPrescribeMedication: false,
    canScheduleAppointments: false,
    canViewAllPatients: false,
    canManageStaff: false,
  },
  carer: {
    canViewPatientRecords: true,
    canEditPatientRecords: true,
    canPrescribeMedication: false,
    canScheduleAppointments: true,
    canViewAllPatients: false,
    canManageStaff: false,
  }
};

// Mock user database
const mockUsers = {
  doctor: [
    { username: 'P.Patel', password: 'doctor123', name: 'Dr. Peter Patel' },
    { username: 'J.Doe', password: 'doctor456', name: 'Dr. John Doe' }
  ],
  nurse: [
    { username: 'C.Taylor', password: 'nurse123', name: 'Nurse Clara Taylor' },
    { username: 'M.Jane', password: 'nurse456', name: 'Nurse Mary Jane' }
  ],
  patient: [
    { username: 'M.Thompson', password: 'patient123', name: 'Margaret Thompson' },
    { username: 'S.Paul', password: 'patient456', name: 'Stephen Paul' }
  ],
  family: [
    { username: 'E.Thompson', password: 'relative123', name: 'Emily Thompson' },
    { username: 'M.Paul', password: 'relative456', name: 'Michaela Paul' }
  ],
  carer: [
    { username: 'S.Jones', password: 'carer123', name: 'Shaniqua Jones' },
    { username: 'A.Patel', password: 'carer456', name: 'Aadhya Patel' }
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

  const changePassword = async (username, userType, currentPassword, newPassword) => {
    setLoading(true);
    setError(null);

    try {
      // Validate user type
      if (!mockUsers[userType]) {
        setError('Invalid user type');
        return false;
      }

      // Find user in the mock database
      const userIndex = mockUsers[userType].findIndex(
        u => u.username === username && u.password === currentPassword
      );

      if (userIndex === -1) {
        setError('Invalid username or current password');
        return false;
      }

      // Update password in mock database
      mockUsers[userType][userIndex].password = newPassword;

      // If the user is currently logged in and changing their own password,
      // update the user object
      if (user && user.username === username && user.role === userType) {
        const updatedUser = { ...user };
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
      }

      return true;
    } catch (err) {
      setError('An error occurred while changing password');
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
    changePassword,
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