// src/pages/DoctorsDashboard.js
import React, { useState } from 'react';
import { Grid, Container, Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography } from '@mui/material';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import TimetableDoctor from '../components/TimetableDoctor';
import EventsListDoctor from '../components/EventsListDoctor';
import CustomCalendar from '../components/CustomCalendar';
import Sidebar from '../components/Sidebar';

function DoctorsDashboard() {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
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
            <Grid item xs={12} md={6} lg={4}>
              <CustomCalendar />
            </Grid>
            <Grid item xs={12} md={6} lg={8}>
              <EventsListDoctor userType="doctor" />
            </Grid>
          </Grid>
        </Container>

        {/* Report Problems Button */}
        <Button
          variant="contained"
          color="primary"
          startIcon={<ReportProblemIcon />}
          onClick={handleOpenDialog}
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            borderRadius: '50px',
            padding: '10px 20px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
            },
            transition: 'all 0.3s ease'
          }}
        >
          Report Problems
        </Button>

        {/* Contact Information Dialog */}
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
              Contact Support
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Typography variant="body1" sx={{ mb: 2 }}>
              If you're experiencing any issues, please contact our support team:
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Email: support@securekevin.com
            </Typography>
            <Typography variant="body1">
              Phone: +61 (04) 42 617 322
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default DoctorsDashboard;