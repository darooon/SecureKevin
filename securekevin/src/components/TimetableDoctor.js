// src/components/Timetable.js
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import CustomCalendar from './CustomCalendar'; // Import the CustomCalendar component

const TimetableDoctor = ({ userType }) => {
  // Mock data - would come from API in real application
  const [appointments, setAppointments] = useState([
    { id: 1, time: '09:00', description: 'Morning Checkup', patient: 'John Doe', doctor: 'Dr. Smith', location: 'Room 101', date: '2023-10-10' },
    { id: 2, time: '11:30', description: 'Physical Therapy', patient: 'Jane Smith', doctor: 'Dr. Jones', location: 'Therapy Wing', date: '2023-10-11' },
    { id: 3, time: '14:00', description: 'Medication Review', patient: 'Robert Brown', doctor: 'Dr. Wilson', location: 'Room 205', date: '2023-10-10' }
  ]);

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
                    <button className="btn-small">View</button>
                    <button className="btn-small">Edit</button>
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
                <TableCell>Patient</TableCell>
                <TableCell>Location</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {appointments.map((appointment) => (
                <TableRow key={appointment.id}>
                  <TableCell>{appointment.time}</TableCell>
                  <TableCell>{appointment.description}</TableCell>
                  <TableCell>{appointment.doctor}</TableCell>
                  <TableCell>{appointment.location}</TableCell>
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
                <TableCell>Patient</TableCell>
                <TableCell>Location</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {appointments.map((appointment) => (
                <TableRow key={appointment.id}>
                  <TableCell>{appointment.time}</TableCell>
                  <TableCell>{appointment.description}</TableCell>
                  <TableCell>{appointment.doctor}</TableCell>
                  <TableCell>{appointment.location}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </>
        );
    }
  };

  return (
    <div className="component-card">
      <h2>Your Appointments for Today</h2>
      <CustomCalendar appointments={appointments} /> {/* Pass appointments to CustomCalendar */}
      <TableContainer component={Paper} elevation={0}>
        <Table aria-label="appointment timetable">
          {renderTableContent()}
        </Table>
      </TableContainer>
    </div>
  );
};

export default TimetableDoctor;