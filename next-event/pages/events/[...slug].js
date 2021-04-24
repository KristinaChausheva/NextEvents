import { useRouter } from 'next/router'
import { getFilteredEvents } from '../../dummy-data'

import EventList from '../../components/events/event-list'


export default function FilteredEventsPage() {
    const router = useRouter()
    const filterData = router.query.slug

    // console.log(router);
    // console.log(filterData);

    if(!filterData){
        return <p>Loading...</p>
    }

    const filteredYear = +filterData[0]
    const filteredMonth = +filterData[1]

    // console.log(filteredMonth);

    if(isNaN(filteredYear) || isNaN(filteredMonth) || filteredMonth < 1 || filteredMonth > 12) {
        return <p>Invalid filter values</p>
    }

    const filteredEvents = getFilteredEvents({year:filteredYear, month:filteredMonth})

    // console.log(filteredEvents);

    if(!filteredEvents || filteredEvents.length === 0){
        return <p>no events found for the chosen filter</p>
    }

    return (
        <div>
            <h1>Filtered Events</h1>
            <EventList items={filteredEvents} />
        </div>
    )
}
