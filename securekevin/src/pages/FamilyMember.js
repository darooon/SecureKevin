// src/pages/RelativeCarerDashboard.js
import React from 'react';
import { Grid, Container } from '@mui/material';
import Timetable from '../components/Timetable';
import EventsList from '../components/EventsList';
import MealPlanner from '../components/MealPlanner';
import ChatBox from '../components/ChatBox';

function RelativeCarerDashboard() {
  return (
    <div className="dashboard">
      <Container maxWidth="xl">
        <header>
          <h1>Family & Carer Dashboard</h1>
          <p>Stay updated on your loved one's care</p>
        </header>
        
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <Timetable userType="relative" />
          </Grid>
          
          <Grid item xs={12} lg={4}>
            <EventsList userType="relative" />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <MealPlanner userType="relative" />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <ChatBox userType="relative" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default RelativeCarerDashboard;