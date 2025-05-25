import React, { useEffect, useState } from 'react'
import mainpic from '../images/11.jpg'
import { HomeMenu } from '../components/Menu'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Home() {
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
      <HomeMenu />
      <div className='main'>
        <img src={mainpic} className='mainpic' alt="" />
        <div className='overlay-content'>
          <h1>Find your next experience</h1>
          <div className='overlay-button'>
            <input type="text" placeholder='Search for events,artists or venues' />
            <button>Search</button>
          </div>
        </div>
      </div>

      <div>
        <h2>Recommended for you</h2>
        {recommended.map((event, index) => (
          <div onClick={() => navigate('/')} key={index}>
            <img src={event.image} alt="" />
            <h4>{event.name}</h4>
            <h4>{event.date}</h4>
          </div>
        ))}
      </div>

      <div>
        <h2>Live and Upcoming Events</h2>
        {upcoming.map((event, index) => (
          <div onClick={() => navigate('/')} key={index}>
            <img src={event.image} alt="" />
            <h4>{event.name}</h4>
            <h4>{event.date}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
