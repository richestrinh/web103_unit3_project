import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import LocationsAPI from '../services/LocationsAPI'
import '../css/LocationEvents.css'

const LocationEvents = ({index}) => {
    const [location, setLocation] = useState([])
    const [events, setEvents] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const locationData = await LocationsAPI.getLocationById(index)
                setLocation(locationData)
                console.log({locationData})
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [index]) 

    return (
        <div className='location-events'>
        {location.length > 0 && (
            <header>
                <div className='location-image'>
                    <img src={location[0].image} />
                </div>

                <div className='location-info'>
                    <h2>{location[0].name}</h2>
                    <p>{location[0].address}, {location[0].city}, {location[0].state} {location[0].zip}</p>
                </div>
            </header>
        )}

            <main>
                {
                    events && events.length > 0 ? events.map((event, index) =>
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.title}
                            date={event.date}
                            time={event.time}
                            image={event.image}
                        />
                    ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}</h2>
                }
            </main>
        </div>
    )
}

export default LocationEvents