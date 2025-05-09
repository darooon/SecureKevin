// src/components/EventsListDoctor.js
import React, { useState } from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Divider, TextField, Button, Box, IconButton } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import DeleteIcon from '@mui/icons-material/Delete';

const EventsListDoctor = ({ userType }) => {
  // Mock data - would come from API in real application
  const [events, setEvents] = useState([
    { id: 1, title: 'Health Seminar', date: '2025-04-10', time: '10:00', location: 'Main Auditorium' },
    { id: 2, title: 'Nutrition Workshop', date: '2025-04-12', time: '14:00', location: 'Cafeteria' },
    { id: 3, title: 'Physical Therapy Session', date: '2025-04-09', time: '11:30', location: 'Therapy Room 2' }
  ]);

  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    time: '',
    location: ''
  });

  const handleInputChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.date || !newEvent.time || !newEvent.location) return;
    setEvents([
      ...events,
      {
        id: events.length + 1,
        ...newEvent
      }
    ]);
    setNewEvent({ title: '', date: '', time: '', location: '' });
  };

  const handleDeleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  return (
    <div className="component-card">
      <h2>Upcoming Events</h2>
      <Box display="flex" gap={1} mb={2} flexWrap="wrap">
        <TextField
          label="Title"
          name="title"
          value={newEvent.title}
          onChange={handleInputChange}
          size="small"
        />
        <TextField
          label="Date"
          name="date"
          type="date"
          value={newEvent.date}
          onChange={handleInputChange}
          size="small"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Time"
          name="time"
          type="time"
          value={newEvent.time}
          onChange={handleInputChange}
          size="small"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Location"
          name="location"
          value={newEvent.location}
          onChange={handleInputChange}
          size="small"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddEvent}
          disabled={!(newEvent.title && newEvent.date && newEvent.time && newEvent.location)}
        >
          Add Event
        </Button>
      </Box>
      <List>
        {events.map((event, index) => (
          <React.Fragment key={event.id}>
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteEvent(event.id)}>
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

export default EventsListDoctor;