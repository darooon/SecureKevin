import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Utensils, MessageCircle, Send } from 'lucide-react';

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

  return (
    <div className="p-4 bg-gray-100 min-h-screen grid grid-cols-2 gap-4">
      {/* Timetables Section */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <Calendar className="mr-2" /> Timetables
        </h2>
        <ul>
          {timetables.map((item, index) => (
            <li key={index} className="flex justify-between py-2 border-b">
              <span className="font-medium">{item.time}</span>
              <span className="text-gray-600">{item.activity}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Upcoming Events Section */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <Clock className="mr-2" /> Upcoming Events
        </h2>
        <ul>
          {upcomingEvents.map((event, index) => (
            <li key={index} className="flex justify-between py-2 border-b">
              <span className="font-medium">{event.date}</span>
              <span className="text-gray-600">{event.event}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Meals Section */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <Utensils className="mr-2" /> Today's Meals
        </h2>
        <ul>
          {meals.map((meal, index) => (
            <li key={index} className="flex justify-between py-2 border-b">
              <span className="font-medium">{meal.time}</span>
              <span className="text-gray-600">{meal.dish}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Box Section */}
      <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <MessageCircle className="mr-2" /> Chat Box
        </h2>
        <div className="flex-grow overflow-y-auto mb-4">
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`mb-2 p-2 rounded ${
                msg.sender === 'You' ? 'bg-blue-100 text-right' : 'bg-gray-100'
              }`}
            >
              <strong>{msg.sender}: </strong>{msg.text}
            </div>
          ))}
        </div>
        <div className="flex">
          <input 
            type="text" 
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-grow p-2 border rounded-l"
          />
          <button 
            onClick={handleSendMessage}
            className="bg-blue-500 text-white p-2 rounded-r flex items-center"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;