import { useRouter } from 'next/router'
import { getEventById } from '../../dummy-data'

import EventSummary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'
import ErrorAlert from '../../components/ui/error-alert';

export default function EventDetailsPage() {
    const router = useRouter()
    const eventId = router.query.eventId
    console.log(eventId);

    const event = getEventById(eventId)
    console.log(event);

    if(!event) {
        return (
            <ErrorAlert>
              <p>No event found!</p>
            </ErrorAlert>
          );
    }

    return (
        <>
            <EventSummary title={event.title}></EventSummary>
            <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title}></EventLogistics>
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
            <h1>Event Details</h1>
        </>
    )
}