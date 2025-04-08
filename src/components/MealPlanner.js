// src/components/MealPlanner.js
import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, Chip } from '@mui/material';

const MealPlanner = ({ userType }) => {
  // Mock data - would come from API in real application
  const [meals, setMeals] = useState({
    breakfast: {
      main: 'Oatmeal with Berries',
      side: 'Whole Grain Toast',
      drink: 'Orange Juice',
      dietary: ['Low Sugar', 'High Fiber']
    },
    lunch: {
      main: 'Grilled Chicken Salad',
      side: 'Vegetable Soup',
      drink: 'Water or Tea',
      dietary: ['High Protein', 'Low Carb']
    },
    dinner: {
      main: 'Baked Salmon',
      side: 'Steamed Vegetables & Quinoa',
      drink: 'Water',
      dietary: ['Omega-3', 'Gluten Free']
    }
  });

  const renderMealCard = (mealName, mealData) => (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6" color="primary" gutterBottom>
          {mealName.charAt(0).toUpperCase() + mealName.slice(1)}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Main:</strong> {mealData.main}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Side:</strong> {mealData.side}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Drink:</strong> {mealData.drink}
        </Typography>
        <div style={{ marginTop: '10px' }}>
          {mealData.dietary.map((diet, index) => (
            <Chip 
              key={index} 
              label={diet} 
              size="small" 
              color="secondary" 
              variant="outlined" 
              sx={{ mr: 1, mb: 1 }} 
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="component-card">
      <h2>Today's Meals</h2>
      <Grid container spacing={2}>
        {Object.entries(meals).map(([mealName, mealData]) => (
          <Grid item xs={12} md={4} key={mealName}>
            {renderMealCard(mealName, mealData)}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MealPlanner;