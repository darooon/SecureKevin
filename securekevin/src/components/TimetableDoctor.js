// src/components/Timetable.js
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const TimetableDoctor = ({ userType, appointments }) => {
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
      <TableContainer component={Paper} elevation={0}>
        <Table aria-label="appointment timetable">
          {renderTableContent()}
        </Table>
      </TableContainer>
    </div>
  );
};

export default TimetableDoctor;