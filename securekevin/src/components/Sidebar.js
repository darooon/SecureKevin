import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, ListSubheader, Divider, Box, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const menuItems = [
  { text: 'Medical records', content: 'Medical records add more detail later link to nurse dashboard' },
  { text: 'Patient Profiles', content: 'Patient profile add detail later' },
  { text: 'Medication', content: 'add information for medication here from nurse dashboard' },
  { text: 'Prescriptions', content: 'add information for prescriptions here from nurse dashboard' },
  { text: 'Referrals', content: 'exemplary information' },
  { text: 'Critical patients', content: 'include a list for patients here' },
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