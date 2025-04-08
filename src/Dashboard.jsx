// Dashboard.jsx
import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  // State for different dashboard sections
  const [timetables, setTimetables] = useState([
    { time: '09:00', activity: 'Morning Meeting' },
    { time: '11:30', activity: 'Project Review' },
    { time: '14:00', activity: 'Client Call' },
    { time: '16:30', activity: 'Team Sync' }
  ]);

  const [upcomingEvents, setUpcomingEvents] = useState([
    { date: 'Mar 29', event: 'Team Building Workshop' },
    { date: 'Apr 5', event: 'Quarterly Planning' },
    { date: 'Apr 15', event: 'Product Launch' }
  ]);

  const [meals, setMeals] = useState([
    { time: 'Breakfast', dish: 'Avocado Toast' },
    { time: 'Lunch', dish: 'Grilled Chicken Salad' },
    { time: 'Dinner', dish: 'Vegetable Stir Fry' }
  ]);

  const [messages, setMessages] = useState([
    { sender: 'System', text: 'Welcome to the dashboard!' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages, 
        { sender: 'You', text: newMessage }
      ]);
      setNewMessage('');
    }
  };

  // Handle key press for chat input
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="dashboard-container">
      {/* Timetables Section */}
      <div className="dashboard-card">
        <h2 className="card-title">
          <span className="icon">📅</span> Timetables
        </h2>
        <ul className="list">
          {timetables.map((item, index) => (
            <li key={index} className="list-item">
              <span className="time">{item.time}</span>
              <span className="activity">{item.activity}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Upcoming Events Section */}
      <div className="dashboard-card">
        <h2 className="card-title">
          <span className="icon">⏰</span> Upcoming Events
        </h2>
        <ul className="list">
          {upcomingEvents.map((event, index) => (
            <li key={index} className="list-item">
              <span className="time">{event.date}</span>
              <span className="activity">{event.event}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Meals Section */}
      <div className="dashboard-card">
        <h2 className="card-title">
          <span className="icon">🍽️</span> Today's Meals
        </h2>
        <ul className="list">
          {meals.map((meal, index) => (
            <li key={index} className="list-item">
              <span className="time">{meal.time}</span>
              <span className="activity">{meal.dish}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Box Section */}
      <div className="dashboard-card">
        <h2 className="card-title">
          <span className="icon">💬</span> Chat Box
        </h2>
        <div className="chat-container">
          <div className="messages">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`message ${msg.sender === 'You' ? 'user-message' : 'system-message'}`}
              >
                <strong>{msg.sender}: </strong>{msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input 
              type="text" 
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
              className="message-input"
            />
            <button 
              onClick={handleSendMessage}
              className="send-button"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;