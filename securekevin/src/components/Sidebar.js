import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, ListSubheader, Divider, Box, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const menuItems = [
  { text: 'Medical records', content: 'Here you can view and manage medical records.' },
  { text: 'Patient Profiles', content: 'Access detailed profiles of patients, including history and treatment plans.' },
  { text: 'Medication', content: 'Manage and review medication prescriptions for patients.' },
  { text: 'Prescriptions', content: 'View and create new prescriptions for patients.' },
  { text: 'Referrals', content: 'Manage patient referrals to specialists and other services.' },
  { text: 'Critical patients', content: 'List of patients requiring immediate attention and care.' },
];

const Sidebar = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState('');

  const handleClick = (content) => {
    setDialogContent(content);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <>
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
            {menuItems.map((item, idx) => (
              <ListItem button key={item.text} onClick={() => handleClick(item.content)} sx={{ borderRadius: 2, mb: 0.5, bgcolor: idx === 7 ? '#ede6f7' : 'inherit', color: '#333' }}>
                <ListItemText primary={item.text} primaryTypographyProps={{ fontWeight: idx === 7 ? 'bold' : 'normal' }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>Details</DialogTitle>
        <DialogContent>
          {dialogContent}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Sidebar; 