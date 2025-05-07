// src/pages/PatientDashboard.js
import React from 'react';
import { Grid, Container, Button, Box } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import Timetable from '../components/Timetable';
import EventsList from '../components/EventsList';
import MealPlanner from '../components/MealPlanner';
import PatientProfile from '../components/PatientProfile';

function PatientDashboard() {
  const handleEmergency = () => {
    // In a real application, this would trigger emergency protocols
    alert('Emergency services have been notified. Please stay calm and follow instructions.');
  };

  return (
    <div className="dashboard">
      <Container maxWidth="xl" sx={{ pb: 10 }}>
        <header>
          <h1>Patient Dashboard</h1>
          <p>Your personal health information portal</p>
        </header>
        {/* Top row: Profile and Timetable */}
        <Grid container spacing={3} alignItems="stretch">
          <Grid item xs={12} md={6}>
            <PatientProfile />
          </Grid>
          <Grid item xs={12} md={6}>
            <Timetable userType="patient" />
          </Grid>
        </Grid>
        {/* Bottom row: Events and Meals */}
        <Grid container spacing={3} alignItems="stretch" sx={{ mt: 0 }}>
          <Grid item xs={12} md={6}>
            <EventsList userType="patient" />
          </Grid>
          <Grid item xs={12} md={6}>
            <MealPlanner userType="patient" />
          </Grid>
        </Grid>
      </Container>

      <Box 
        sx={{ 
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          p: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.1)',
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'center',
          backdropFilter: 'blur(5px)'
        }}
      >
        <Button
          variant="contained"
          color="error"
          size="large"
          startIcon={<WarningIcon />}
          onClick={handleEmergency}
          sx={{
            py: 2,
            px: 4,
            fontSize: '1.2rem',
            fontWeight: 'bold',
            borderRadius: '50px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            '&:hover': {
              backgroundColor: '#d32f2f',
              transform: 'scale(1.05)',
              boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
            },
            transition: 'all 0.3s ease'
          }}
        >
          EMERGENCY
        </Button>
      </Box>
    </div>
  );
}

export default PatientDashboard;