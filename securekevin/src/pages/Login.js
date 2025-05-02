// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography
} from '@mui/material';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!username || !password || !userType) {
      setError('Please fill in all fields');
      return;
    }

    // In a real app, you would make an API call to verify credentials
    // For now, we'll just simulate successful login and redirect
    
    // Simulate login success
    console.log(`Logging in as ${userType}: ${username}`);
    
    // Redirect to appropriate dashboard
    navigate(`/${userType}`);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
            SecureKevin Hospital Portal
          </Typography>
          
          {error && (
            <Typography color="error" sx={{ mb: 2 }}>
              {error}
            </Typography>
          )}
          
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControl fullWidth margin="normal">
              <InputLabel id="user-type-label">User Type</InputLabel>
              <Select
                labelId="user-type-label"
                id="user-type"
                value={userType}
                label="User Type"
                onChange={(e) => setUserType(e.target.value)}
              >
                <MenuItem value="doctor">Doctor</MenuItem>
                <MenuItem value="patient">Patient</MenuItem>
                <MenuItem value="relative">Family Member/Carer</MenuItem>
              </Select>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Typography variant="body2" color="text.secondary">
                  Demo: Any username/password combination works
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default Login;