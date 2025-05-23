// src/components/Timetable.js
import React, { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,
  Box,
  Select,
  MenuItem,
  Button,
  IconButton,
  FormControl,
  InputLabel
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Timetable = ({ userType }) => {
  // Mock data - would come from API in real application
  const [appointments, setAppointments] = useState([
    { id: 1, time: '09:00', description: 'Morning Checkup', patient: 'John Doe', doctor: 'Dr. Smith', location: 'Room 101' },
    { id: 2, time: '11:30', description: 'Physical Therapy', patient: 'Jane Smith', doctor: 'Dr. Jones', location: 'Therapy Wing' },
    { id: 3, time: '14:00', description: 'Medication Review', patient: 'Robert Brown', doctor: 'Dr. Wilson', location: 'Room 205' }
  ]);

  // Available appointments to add
  const availableAppointments = [
    { id: 4, time: '10:00', description: 'Blood Test', doctor: 'Dr. Smith', location: 'Lab 1' },
    { id: 5, time: '13:00', description: 'X-Ray', doctor: 'Dr. Johnson', location: 'Radiology' },
    { id: 6, time: '15:30', description: 'Consultation', doctor: 'Dr. Brown', location: 'Room 303' }
  ];

  const [selectedAppointment, setSelectedAppointment] = useState('');

  const handleAddAppointment = () => {
    if (selectedAppointment) {
      const appointmentToAdd = availableAppointments.find(apt => apt.id === selectedAppointment);
      if (appointmentToAdd) {
        setAppointments([...appointments, appointmentToAdd]);
        setSelectedAppointment('');
      }
    }
  };

  const handleDeleteAppointment = (appointmentId) => {
    setAppointments(appointments.filter(apt => apt.id !== appointmentId));
  };

  // Different views based on user type
  const renderTableContent = () => {
    switch(userType) {
      case 'doctor':
        return (
          <>
            <TableHead>
              <TableRow>
                <TableCell>Time</TableCell>
                <TableCell>Patient</TableCell>
                <TableCell>Procedure</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {appointments.map((appointment) => (
                <TableRow key={appointment.id}>
                  <TableCell>{appointment.time}</TableCell>
                  <TableCell>{appointment.patient}</TableCell>
                  <TableCell>{appointment.description}</TableCell>
                  <TableCell>{appointment.location}</TableCell>
                  <TableCell>
                    <IconButton 
                      size="small" 
                      onClick={() => handleDeleteAppointment(appointment.id)}
                      aria-label="delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </>
        );
      case 'patient':
        return (
          <>
            <TableHead>
              <TableRow>
                <TableCell>Time</TableCell>
                <TableCell>Appointment</TableCell>
                <TableCell>Doctor</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {appointments.map((appointment) => (
                <TableRow key={appointment.id}>
                  <TableCell>{appointment.time}</TableCell>
                  <TableCell>{appointment.description}</TableCell>
                  <TableCell>{appointment.doctor}</TableCell>
                  <TableCell>{appointment.location}</TableCell>
                  <TableCell>
                    <IconButton 
                      size="small" 
                      onClick={() => handleDeleteAppointment(appointment.id)}
                      aria-label="delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </>
        );
      case 'relative':
      default:
        return (
          <>
            <TableHead>
              <TableRow>
                <TableCell>Time</TableCell>
                <TableCell>Appointment</TableCell>
                <TableCell>Doctor</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {appointments.map((appointment) => (
                <TableRow key={appointment.id}>
                  <TableCell>{appointment.time}</TableCell>
                  <TableCell>{appointment.description}</TableCell>
                  <TableCell>{appointment.doctor}</TableCell>
                  <TableCell>{appointment.location}</TableCell>
                  <TableCell>
                    <IconButton 
                      size="small" 
                      onClick={() => handleDeleteAppointment(appointment.id)}
                      aria-label="delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </>
        );
    }
  };

  return (
    <div className="component-card">
      <h2>Your Health Check-Ups For Today</h2>
      <Box sx={{ mb: 2, display: 'flex', gap: 2, alignItems: 'center' }}>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id="appointment-select-label">Add Appointment</InputLabel>
          <Select
            labelId="appointment-select-label"
            value={selectedAppointment}
            label="Add Appointment"
            onChange={(e) => setSelectedAppointment(e.target.value)}
          >
            <MenuItem value="">
              <em>Select an appointment</em>
            </MenuItem>
            {availableAppointments.map((appointment) => (
              <MenuItem key={appointment.id} value={appointment.id}>
                {appointment.time} - {appointment.description} with {appointment.doctor}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button 
          variant="contained" 
          onClick={handleAddAppointment}
          disabled={!selectedAppointment}
        >
          Add Appointment
        </Button>
      </Box>
      <TableContainer component={Paper} elevation={0}>
        <Table aria-label="appointment timetable">
          {renderTableContent()}
        </Table>
      </TableContainer>
    </div>
  );
};

export default Timetable;