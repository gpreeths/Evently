import React from 'react'
import { Link } from 'react-router-dom'

function HomeMenu() {
  return (
    <div className='container1'>
        <div className='evently'>
            <h1>Evently</h1>
        </div>
            <ul className='ul1'>
                <li><a href="/">Discover</a></li>
                <li><a href="/Create">Create</a></li>
                <li><a href="#footer">About</a></li>
                <li><a href="/">Contact Us</a></li>
            </ul>
        
    </div>
  )
}


function PreSignupMenu() {
  return (
    <div className='container1'>
        <div className='evently'>
            <h1>Evently</h1>
        </div>
            <ul className='ul1'>
                <li><a href="/">Login</a></li>
                <li><a href="/">Contact</a> us</li>
            </ul>
        
    </div>
  )
}

function MapMenu() {
  return (
    <div className='container1'>
        <div className='evently'>
            <h1>Evently</h1>
        </div>
            <ul className='ul1'>
                <li><a href="/">Home</a></li>
                <li><a href="/">Contact us</a> </li>
                <Link to={'/'}>Logout</Link>
            </ul>
        
    </div>
  )
}


export {HomeMenu,PreSignupMenu,MapMenu}