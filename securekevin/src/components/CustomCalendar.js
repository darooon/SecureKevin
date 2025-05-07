import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const daysShort = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

function getMonthMatrix(year, month) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const matrix = [];
  let day = 1 - firstDay;
  for (let i = 0; i < 6; i++) {
    const week = [];
    for (let j = 0; j < 7; j++, day++) {
      week.push(day > 0 && day <= daysInMonth ? day : null);
    }
    matrix.push(week);
  }
  return matrix;
}

const CustomCalendar = () => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const monthMatrix = getMonthMatrix(currentYear, currentMonth);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleSelectDay = (day) => {
    if (day) setSelectedDate(new Date(currentYear, currentMonth, day));
  };

  return (
    <Card sx={{ borderRadius: 4, background: '#f3eafd', minWidth: 320, maxWidth: 360, mx: 'auto', mt: 2 }}>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
          Schedule
        </Typography>
        <Typography variant="h5" sx={{ mb: 2 }}>
          {selectedDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
          <IconButton size="small" onClick={handlePrevMonth}><ArrowBackIosNewIcon fontSize="small" /></IconButton>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            {selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </Typography>
          <IconButton size="small" onClick={handleNextMonth}><ArrowForwardIosIcon fontSize="small" /></IconButton>
        </Box>
        <Box display="grid" gridTemplateColumns="repeat(7, 1fr)" gap={0.5} mb={1}>
          {daysShort.map((d) => (
            <Typography key={d} align="center" sx={{ fontWeight: 'bold', color: '#7c6fa6' }}>{d}</Typography>
          ))}
          {monthMatrix.flat().map((day, idx) => (
            <Box
              key={idx}
              onClick={() => handleSelectDay(day)}
              sx={{
                height: 36,
                width: 36,
                mx: 'auto',
                borderRadius: '50%',
                background: day && selectedDate.getDate() === day && selectedDate.getMonth() === currentMonth && selectedDate.getFullYear() === currentYear ? '#a18be6' : 'transparent',
                color: day ? '#222' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: day && selectedDate.getDate() === day && selectedDate.getMonth() === currentMonth && selectedDate.getFullYear() === currentYear ? 'bold' : 'normal',
                cursor: day ? 'pointer' : 'default',
                transition: 'background 0.2s',
                '&:hover': {
                  background: day ? '#d1c4e9' : 'transparent',
                },
              }}
            >
              {day || ''}
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default CustomCalendar; 