import React from 'react'
import mainpic from '../images/11.jpg'

function MainImg() {
  return (
    <div>
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
    </div>
  )
}

export default MainImg