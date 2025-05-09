import React, { useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Typography,
  CircularProgress,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import { useAuth } from '../context/AuthContext';

const ChangePassword = ({ open, onClose }) => {
  const [username, setUsername] = useState('');
  const [userType, setUserType] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [localError, setLocalError] = useState('');
  const { changePassword, loading, error } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError('');

    // Validate all fields
    if (!username || !userType || !currentPassword || !newPassword || !confirmPassword) {
      setLocalError('Please fill in all fields');
      return;
    }

    if (newPassword !== confirmPassword) {
      setLocalError('New passwords do not match');
      return;
    }

    if (newPassword.length < 8) {
      setLocalError('New password must be at least 8 characters long');
      return;
    }

    try {
      const success = await changePassword(username, userType, currentPassword, newPassword);
      if (success) {
        // Clear form and close dialog
        setUsername('');
        setUserType('');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
        onClose();
      }
    } catch (err) {
      console.error('Password change error:', err);
    }
  };

  const handleClose = () => {
    setUsername('');
    setUserType('');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setLocalError('');
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Change Password</DialogTitle>
      <DialogContent>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          {(error || localError) && (
            <Typography color="error" sx={{ mb: 2 }}>
              {error || localError}
            </Typography>
          )}
          
          <TextField
            margin="normal"
            required
            fullWidth
            name="username"
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={loading}
          />

          <FormControl fullWidth margin="normal">
            <InputLabel id="user-type-label">User Type</InputLabel>
            <Select
              labelId="user-type-label"
              id="user-type"
              value={userType}
              label="User Type"
              onChange={(e) => setUserType(e.target.value)}
              disabled={loading}
            >
              <MenuItem value="doctor">Doctor</MenuItem>
              <MenuItem value="nurse">Nurse</MenuItem>
              <MenuItem value="patient">Patient</MenuItem>
              <MenuItem value="relative">Family Member</MenuItem>
              <MenuItem value="carer">Carer</MenuItem>
            </Select>
          </FormControl>
          
          <TextField
            margin="normal"
            required
            fullWidth
            name="currentPassword"
            label="Current Password"
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            disabled={loading}
          />
          
          <TextField
            margin="normal"
            required
            fullWidth
            name="newPassword"
            label="New Password"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            disabled={loading}
          />
          
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm New Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={loading}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} disabled={loading}>
          Cancel
        </Button>
        <Button 
          onClick={handleSubmit} 
          variant="contained" 
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : 'Change Password'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ChangePassword; 