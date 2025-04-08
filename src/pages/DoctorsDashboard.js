// src/pages/DoctorsDashboard.js
import React from 'react';
import { Grid, Container } from '@mui/material';
import Timetable from '../components/Timetable';
import EventsList from '../components/EventsList';
import MealPlanner from '../components/MealPlanner';
import ChatBox from '../components/ChatBox';

function DoctorsDashboard() {
  return (
    <div className="dashboard">
      <Container maxWidth="xl">
        <header>
          <h1>Doctor's Dashboard</h1>
          <p>Manage your patients and schedule</p>
        </header>
        
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <Timetable userType="doctor" />
          </Grid>
          
          <Grid item xs={12} lg={4}>
            <EventsList userType="doctor" />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <MealPlanner userType="doctor" />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <ChatBox userType="doctor" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default DoctorsDashboard;