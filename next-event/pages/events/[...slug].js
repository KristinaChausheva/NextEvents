import { useRouter } from 'next/router'
import { getFilteredEvents } from '../../dummy-data'

import EventList from '../../components/events/event-list'
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';

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
        return (
            <>
                <ErrorAlert>
                    <p>Invalid filter values</p>
                </ErrorAlert>
                <div className='center'>
                    <Button link='/events'>Show All Events</Button>
                </div>
            </>

        )
    }

    const filteredEvents = getFilteredEvents({year:filteredYear, month:filteredMonth})

    // console.log(filteredEvents);

    if(!filteredEvents || filteredEvents.length === 0){
        return (
            <>
                <ErrorAlert>
                    <p>no events found for the chosen filter</p>
                </ErrorAlert>
                <div className='center'>
                    <Button link='/events'>Show All Events</Button>
                </div>
            </>

        )
    }

    return (
        <>
            <h1>Filtered Events</h1>
            <EventList items={filteredEvents} />
        </>
    )
}
