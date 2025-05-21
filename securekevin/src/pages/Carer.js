import React from "react";

import Card from '../components/ui/card';
import TimetableCarer from '../components/TimetableCarer';
import EventsListCarer from '../components/EventsListCarer';

const CarerDashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Carer Dashboard</h1>
        <p className="text-muted-foreground">Stay updated on your patient's care and appointments</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left column - Timetable */}
        <div className="md:col-span-2">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Daily Timetable</h2>
            <TimetableCarer userType="carer" />
          </Card>
        </div>

        {/* Right column - Events */}
        <div>
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Patient Events</h2>
            <EventsListCarer userType="carer" />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CarerDashboard;
