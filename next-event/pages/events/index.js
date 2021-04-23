import { getAllEvents } from '../../dummy-data'
import EventList from '../../components/events/event-list'

export default function EventsPage() {
    const events = getAllEvents()

    return (
        <div>
            <h1>Events Page</h1>
            <EventList items={events}/>
            
        </div>
    )
}
