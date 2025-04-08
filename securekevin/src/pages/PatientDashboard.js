// src/pages/PatientDashboard.js
import React from 'react';
import { Grid, Container } from '@mui/material';
import Timetable from '../components/Timetable';
import EventsList from '../components/EventsList';
import MealPlanner from '../components/MealPlanner';
import ChatBox from '../components/ChatBox';

function PatientDashboard() {
  return (
    <div className="dashboard">
      <Container maxWidth="xl">
        <header>
          <h1>Patient Dashboard</h1>
          <p>Your personal health information portal</p>
        </header>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Timetable userType="patient" />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <EventsList userType="patient" />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <MealPlanner userType="patient" />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <ChatBox userType="patient" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default PatientDashboard;