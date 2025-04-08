// src/components/EventsList.js
import React, { useState } from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Divider } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';

const EventsList = ({ userType }) => {
  // Mock data - would come from API in real application
  const [events, setEvents] = useState([
    { id: 1, title: 'Health Seminar', date: '2025-04-10', time: '10:00', location: 'Main Auditorium' },
    { id: 2, title: 'Nutrition Workshop', date: '2025-04-12', time: '14:00', location: 'Cafeteria' },
    { id: 3, title: 'Physical Therapy Session', date: '2025-04-09', time: '11:30', location: 'Therapy Room 2' }
  ]);

  return (
    <div className="component-card">
      <h2>Upcoming Events</h2>
      <List>
        {events.map((event, index) => (
          <React.Fragment key={event.id}>
            <ListItem>
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