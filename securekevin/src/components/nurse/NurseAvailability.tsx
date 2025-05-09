
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar as CalendarIcon } from 'lucide-react';
import { AvailabilityEvent } from '../../types/nurse';

interface NurseAvailabilityProps {
  availability: AvailabilityEvent[];
  handleSlotSelect: ({ start, end }: { start: Date; end: Date }) => void;
}

const localizer = momentLocalizer(moment);

const NurseAvailability: React.FC<NurseAvailabilityProps> = ({ availability, handleSlotSelect }) => {
  return (
    <div className="card">
      <h2 className="section-title">
        <CalendarIcon size={16} />
        Manage Availability
      </h2>
      <p>Click on any time slot to set your availability.</p>
      <div className="calendar-container">
        <Calendar
          localizer={localizer}
          events={availability}
          startAccessor="start"
          endAccessor="end"
          selectable
          onSelectSlot={handleSlotSelect}
          defaultView="week"
          views={['week', 'day']}
          style={{ height: '100%' }}
        />
      </div>
    </div>
  );
};

export default NurseAvailability;
