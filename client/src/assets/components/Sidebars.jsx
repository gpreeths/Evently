import React from 'react'
import { Link } from 'react-router-dom'

function MapSidebar() {
  return (
    <div>MapSidebar</div>
  )
}


function UserHomeSidebar() {
  return (
    <div className='userHomeSidebar'>
      <ul>
        <li>Events</li>
        <li><Link to='/user/map'>Map</Link></li>
        <li>Favorites</li>
        <li>Profile</li>
        <li>Comments</li>
      </ul>

    </div>
  )
}


export {MapSidebar, UserHomeSidebar}