// src/components/EventsList.js
import React, { useState } from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Divider, Select, MenuItem, Button, Box, IconButton } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import DeleteIcon from '@mui/icons-material/Delete';

const EventsList = ({ userType }) => {
  // Mock data - would come from API in real application
  const [events, setEvents] = useState([
    { id: 1, title: 'Health Seminar', date: '2025-04-10', time: '10:00', location: 'Main Auditorium' },
    { id: 2, title: 'Nutrition Workshop', date: '2025-04-12', time: '14:00', location: 'Cafeteria' },
    { id: 3, title: 'Physical Therapy Session', date: '2025-04-09', time: '11:30', location: 'Therapy Room 2' }
  ]);

  // Available events to add
  const availableEvents = [
    { id: 4, title: 'Yoga Class', date: '2025-04-15', time: '09:00', location: 'Studio 1' },
    { id: 5, title: 'Mental Health Workshop', date: '2025-04-18', time: '15:00', location: 'Conference Room' },
    { id: 6, title: 'Fitness Assessment', date: '2025-04-20', time: '13:00', location: 'Gym' },
    { id: 7, title: 'Health Seminar', date: '2025-04-10', time: '10:00', location: 'Main Auditorium' },
    { id: 8, title: 'Nutrition Workshop', date: '2025-04-12', time: '14:00', location: 'Cafeteria' },
    { id: 9, title: 'Physical Therapy Session', date: '2025-04-09', time: '11:30', location: 'Therapy Room 2' }
  ];

  const [selectedEvent, setSelectedEvent] = useState('');

  const handleAddEvent = () => {
    if (selectedEvent) {
      const eventToAdd = availableEvents.find(event => event.id === selectedEvent);
      if (eventToAdd) {
        setEvents([...events, eventToAdd]);
        setSelectedEvent('');
      }
    }
  };

  const handleDeleteEvent = (eventId) => {
    setEvents(events.filter(event => event.id !== eventId));
  };

  return (
    <div className="component-card">
      <h2>Upcoming Events</h2>
      <h3> Would you like to add an event? Click the drop down box below to add an event.</h3>
      <Box sx={{ mb: 2, display: 'flex', gap: 2 }}>
        <Select
          value={selectedEvent}
          onChange={(e) => setSelectedEvent(e.target.value)}
          displayEmpty
          sx={{ minWidth: 200 }}
        >
          <MenuItem value="">
            <em>Select an event to add</em>
          </MenuItem>
          {availableEvents.map((event) => (
            <MenuItem key={event.id} value={event.id}>
              {event.title}
            </MenuItem>
          ))}
        </Select>
        <Button 
          variant="contained" 
          onClick={handleAddEvent}
          disabled={!selectedEvent}
        >
          Add Event
        </Button>
      </Box>
      <List>
        {events.map((event, index) => (
          <React.Fragment key={event.id}>
            <ListItem
              secondaryAction={
                <IconButton 
                  edge="end" 
                  aria-label="delete"
                  onClick={() => handleDeleteEvent(event.id)}
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemIcon>
                <EventIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary={event.title} 
                secondary={`${event.date} at ${event.time} - ${event.location}`} 
              />
            </ListItem>
            {index < events.length - 1 && <Divider variant="inset" component="li" />}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default EventsList;