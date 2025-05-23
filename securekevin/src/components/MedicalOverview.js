import React, { useState } from 'react';
import { Activity, Heart, Calendar, Clock } from 'lucide-react';

const OverviewCard = ({ title, value, description, icon: Icon }) => (
  <div className="overview-card">
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
      <h3 className="overview-title">{title}</h3>
      <Icon size={18} color="hsl(var(--primary))" />
    </div>
    <p className="overview-value">{value}</p>
    <p className="overview-description">{description}</p>
  </div>
);

const WeeklyOverview = ({ data }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">
          <Calendar size={20} />
          <span>{data.week}</span>
        </h2>
        <span style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>{data.dateRange}</span>
      </div>
      <div className="card-grid">
        {data.metrics.map((metric, index) => (
          <OverviewCard
            key={index}
            title={metric.title}
            value={metric.value}
            description={metric.description}
            icon={metric.icon}
          />
        ))}
      </div>
    </div>
  );
};

const MedicalOverview = () => {
  const [activeTab, setActiveTab] = useState('current');
  
  // Sample data
  const currentWeekData = {
    week: 'Current Week',
    dateRange: 'May 10 - May 16, 2025',
    metrics: [
      {
        title: 'Heart Rate',
        value: '72 bpm',
        description: 'Average resting heart rate',
        icon: Heart
      },
      {
        title: 'Blood Pressure',
        value: '120/80',
        description: 'Average systolic/diastolic',
        icon: Activity
      },
      {
        title: 'Medication Adherence',
        value: '95%',
        description: '19 out of 20 doses taken',
        icon: Clock
      },
      {
        title: 'Physical Activity',
        value: '8.2k',
        description: 'Average daily steps',
        icon: Activity
      }
    ]
  };

  const previousWeeks = [
    {
      week: 'Last Week',
      dateRange: 'May 3 - May 9, 2025',
      metrics: [
        {
          title: 'Heart Rate',
          value: '75 bpm',
          description: 'Average resting heart rate',
          icon: Heart
        },
        {
          title: 'Blood Pressure',
          value: '125/85',
          description: 'Average systolic/diastolic',
          icon: Activity
        },
        {
          title: 'Medication Adherence',
          value: '90%',
          description: '18 out of 20 doses taken',
          icon: Clock
        },
        {
          title: 'Physical Activity',
          value: '7.8k',
          description: 'Average daily steps',
          icon: Activity
        }
      ]
    },
    {
      week: 'Two Weeks Ago',
      dateRange: 'April 26 - May 2, 2025',
      metrics: [
        {
          title: 'Heart Rate',
          value: '78 bpm',
          description: 'Average resting heart rate',
          icon: Heart
        },
        {
          title: 'Blood Pressure',
          value: '130/88',
          description: 'Average systolic/diastolic',
          icon: Activity
        },
        {
          title: 'Medication Adherence',
          value: '85%',
          description: '17 out of 20 doses taken',
          icon: Clock
        },
        {
          title: 'Physical Activity',
          value: '6.5k',
          description: 'Average daily steps',
          icon: Activity
        }
      ]
    }
  ];

  return (
    <section>
      <div className="tab-group">
        <div 
          className={`tab ${activeTab === 'current' ? 'active' : ''}`}
          onClick={() => setActiveTab('current')}
        >
          Current Overview
        </div>
        <div 
          className={`tab ${activeTab === 'previous' ? 'active' : ''}`}
          onClick={() => setActiveTab('previous')}
        >
          Previous Overviews
        </div>
      </div>

      {activeTab === 'current' && (
        <WeeklyOverview data={currentWeekData} />
      )}

      {activeTab === 'previous' && (
        <>
          {previousWeeks.map((week, index) => (
            <WeeklyOverview key={index} data={week} />
          ))}
        </>
      )}
    </section>
  );
};

export default MedicalOverview;
