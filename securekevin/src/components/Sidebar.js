import React from 'react';
import { Drawer, List, ListItem, ListItemText, ListSubheader, Divider, Box } from '@mui/material';

const menuItems = [
  'Medical records',
  'Patient Profiles',
  'Medication',
  'Prescriptions',
  'Referrals',
  'Critical patients',
];

const Sidebar = () => (
  <Drawer
    variant="permanent"
    sx={{
      width: 240,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: {
        width: 240,
        boxSizing: 'border-box',
        background: '#f8f3fc',
        borderRight: 'none',
        borderRadius: '0 20px 20px 0',
        boxShadow: '2px 0 8px rgba(0,0,0,0.04)',
        pt: 2,
      },
    }}
  >
    <Box sx={{ px: 2, pb: 2 }}>
      <ListSubheader component="div" disableSticky sx={{ fontWeight: 'bold', fontSize: 20, color: '#222', pb: 1 }}>
        Menu:
      </ListSubheader>
      <Divider sx={{ mb: 1 }} />
      <List>
        {menuItems.map((text, idx) => (
          <ListItem button key={text} sx={{ borderRadius: 2, mb: 0.5, bgcolor: idx === 7 ? '#ede6f7' : 'inherit', color: '#333' }}>
            <ListItemText primary={text} primaryTypographyProps={{ fontWeight: idx === 7 ? 'bold' : 'normal' }} />
          </ListItem>
        ))}
      </List>
    </Box>
  </Drawer>
);

export default Sidebar; 