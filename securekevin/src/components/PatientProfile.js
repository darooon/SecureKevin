import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Avatar, 
  Box, 
  Grid, 
  List, 
  ListItem, 
  ListItemText, 
  Divider,
  Menu,
  IconButton,
  Paper
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const PatientProfile = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // Mock data - would come from API in real application
  const patientData = {
    name: "John Smith",
    age: 45,
    gender: "Male",
    bloodType: "O+",
    profilePhoto: null, // URL would be provided in real application
    contactInfo: {
      email: "john.smith@email.com",
      phone: "+44 123 456 7890",
      address: "123 Health Street, London, UK"
    },
    medicalHistory: [
      { condition: "Hypertension", diagnosed: "2018", status: "Managed" },
      { condition: "Type 2 Diabetes", diagnosed: "2020", status: "Under Control" },
      { condition: "Asthma", diagnosed: "2015", status: "Stable" }
    ],
    allergies: ["Penicillin", "Peanuts"],
    medications: [
      { name: "Metformin", dosage: "500mg", frequency: "Twice daily" },
      { name: "Lisinopril", dosage: "10mg", frequency: "Once daily" },
      { name: "Ventolin", dosage: "100mcg", frequency: "As needed" }
    ]
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
      <IconButton
        onClick={handleClick}
        size="large"
        edge="end"
        aria-label="account of current user"
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <Avatar
          sx={{ width: 56, height: 56 }}
          src={patientData.profilePhoto}
        >
          <PersonIcon sx={{ fontSize: 40 }} />
        </Avatar>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            width: 600,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Paper sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Avatar
              sx={{ width: 80, height: 80, mr: 2 }}
              src={patientData.profilePhoto}
            >
              <PersonIcon sx={{ fontSize: 50 }} />
            </Avatar>
            <Box>
              <Typography variant="h5" component="h2">
                {patientData.name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {patientData.age} years old • {patientData.gender} • Blood Type: {patientData.bloodType}
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1" gutterBottom>
                Contact Information
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemText primary="Email" secondary={patientData.contactInfo.email} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Phone" secondary={patientData.contactInfo.phone} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Address" secondary={patientData.contactInfo.address} />
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1" gutterBottom>
                Medical History
              </Typography>
              <List dense>
                {patientData.medicalHistory.map((condition, index) => (
                  <ListItem key={index}>
                    <ListItemText 
                      primary={condition.condition}
                      secondary={`Diagnosed: ${condition.diagnosed} • Status: ${condition.status}`}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1" gutterBottom>
                Allergies
              </Typography>
              <List dense>
                {patientData.allergies.map((allergy, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={allergy} />
                  </ListItem>
                ))}
              </List>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1" gutterBottom>
                Current Medications
              </Typography>
              <List dense>
                {patientData.medications.map((medication, index) => (
                  <ListItem key={index}>
                    <ListItemText 
                      primary={medication.name}
                      secondary={`${medication.dosage} • ${medication.frequency}`}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Paper>
      </Menu>
    </Box>
  );
};

export default PatientProfile; 