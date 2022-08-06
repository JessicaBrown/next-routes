import { useRouter } from 'next/router';

import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';

export default  function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  function findEventsHandler(year, month) {
    // if /events/${year} it will route to eventId.js and display 
    // no event found! B/c it can not find the event ID
    const fullPath = `/events/${year}/${month}`;
    
    router.push(fullPath);
  }

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
}


