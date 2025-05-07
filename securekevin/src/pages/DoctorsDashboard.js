// src/pages/DoctorsDashboard.js
import React from 'react';
import { Grid, Container, Button, Box } from '@mui/material';
import TimetableDoctor from '../components/TimetableDoctor';
import EventsListDoctor from '../components/EventsListDoctor';
import WarningIcon from '@mui/icons-material/Warning';
import Sidebar from '../components/Sidebar';

function DoctorsDashboard() {
  const handleEmergency = () => {
    alert('Emergency services have been notified. Please stay calm and follow instructions.');
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f7f5fa' }}>
      <Sidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Container maxWidth="xl">
          <header>
            <h1>Hello Doctor </h1>
            <p>Manage your patients and schedule</p>
          </header>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <TimetableDoctor userType="doctor" />
            </Grid>
            <Grid item xs={12} md={6} lg={8}>
              <EventsListDoctor userType="doctor" />
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
    </div>
  );
}

export default DoctorsDashboard;