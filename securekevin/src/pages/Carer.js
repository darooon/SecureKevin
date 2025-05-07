// src/pages/Carer.js
import React from 'react';
import { Grid, Container } from '@mui/material';
import Timetable from '../components/TimetableCarer';
import EventsList from '../components/EventsListCarer';
import TimetableCarer from '../components/TimetableCarer';

function CarerDashboard() {
    return (
      <div className="dashboard">
        <Container maxWidth="xl">
          <header>
            <h1>Carer Dashboard</h1>
            <p>Stay updated on your patient</p>
          </header>
          
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <TimetableCarer userType="relative" />
            </Grid>
            
            <Grid item xs={12} lg={4}>
              <EventsList userType="relative" />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
  
  export default CarerDashboard;