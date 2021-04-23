import { getAllEvents } from '../../dummy-data'
import EventList from '../../components/events/event-list'
import EventSearch from '../../components/events/event-search'

export default function EventsPage() {
    const events = getAllEvents()

    return (
        <>
            <h1>Events Page</h1>
            <EventSearch />
            <EventList items={events}/>
            
        </>
    )
}
