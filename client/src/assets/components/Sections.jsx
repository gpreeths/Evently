import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Sections() {
  const [events, setEvents] = useState([])
  const navigate = useNavigate()

  const fetchEventDetails = async () => {
    try {
      const res = await axios.get('http://localhost:2000/event/fetchEventSection')
      setEvents(res.data)
      console.log(res.data);
      
    } catch (error) {
      console.error('Error fetching events:', error)
    }
  }

  useEffect(() => {
    fetchEventDetails()
  }, [])

  const recommended = events.slice(0, events.length / 2)
  const upcoming = events.slice(events.length / 2)

  return (
    <div>
      <div className='eventssection'>

  <h2>Recommended for you</h2>
      <div className='event_container'>
       
        {recommended.map((event, index) => (
          <div onClick={() => navigate('/')} key={index} className='eventcards'>  
            <img src={event.image} alt="" />
            <h6>{event.name}</h6>
            <h4>{event.date}</h4>
          </div>
        ))}
      </div>

      
        <h2>Live and Upcoming Events</h2>
        <div className='event_container'>
        {upcoming.map((event, index) => (
          <div onClick={() => navigate('/')} key={index} className='eventcards'>
            <img src={event.image} alt="" />
            <h4>{event.name}</h4>
            <h4>{event.date}</h4>
          </div>
        ))}
      </div>
 </div>
    </div>
  )
}

export default Sections