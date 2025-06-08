import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

export default function CalendarView() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={[
        { title: 'Meeting', date: '2025-06-10' },
        { title: 'Deadline', date: '2025-06-15' },
      ]}
    />
  );
}
