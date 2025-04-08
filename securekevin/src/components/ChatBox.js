// src/components/ChatBox.js
import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, Avatar, Paper, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ChatBox = ({ userType }) => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Dr. Smith', text: 'Good morning! How are you feeling today?', time: '09:05', isUser: false },
    { id: 2, sender: 'You', text: 'I\'m feeling much better today, thank you!', time: '09:07', isUser: true },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    
    const message = {
      id: messages.length + 1,
      sender: 'You',
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isUser: true
    };
    
    setMessages([...messages, message]);
    setNewMessage('');
    
    // Simulate response (in a real app, this would be from an API)
    setTimeout(() => {
      const response = {
        id: messages.length + 2,
        sender: 'Dr. Smith',
        text: 'Thanks for the update. Your next check-up is scheduled for tomorrow.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isUser: false
      };
      setMessages(prev => [...prev, response]);
    }, 1000);
  };

  return (
    <div className="component-card">
      <h2>Chat with Medical Team</h2>
      <Paper elevation={0} sx={{ 
        height: '300px', 
        maxHeight: '300px', 
        overflow: 'auto',
        p: 2,
        bgcolor: '#f9f9f9',
        mb: 2 
      }}>
        <List>
          {messages.map((message) => (
            <ListItem 
              key={message.id}
              sx={{ 
                flexDirection: message.isUser ? 'row-reverse' : 'row',
                mb: 1
              }}
            >
              <Avatar 
                sx={{ 
                  bgcolor: message.isUser ? '#3498db' : '#2ecc71',
                  width: 32,
                  height: 32,
                  mr: message.isUser ? 0 : 1,
                  ml: message.isUser ? 1 : 0
                }}
              >
                {message.sender.charAt(0)}
              </Avatar>
              <Paper
                elevation={1}
                sx={{
                  p: 1,
                  maxWidth: '70%',
                  bgcolor: message.isUser ? '#e3f2fd' : '#ffffff',
                  borderRadius: 2
                }}
              >
                <ListItemText 
                  primary={message.text}
                  secondary={`${message.sender}, ${message.time}`}
                />
              </Paper>
            </ListItem>
          ))}
        </List>
      </Paper>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type your message..."
          size="small"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
        />
        <Button 
          variant="contained" 
          color="primary"
          endIcon={<SendIcon />}
          onClick={handleSendMessage}
        >
          Send
        </Button>
      </Box>
    </div>
  );
};

export default ChatBox;