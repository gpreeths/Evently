import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function HomeMenu() {
  const navigate=useNavigate()

  const handleCLick=async (e)=>{
    e.preventDefault()

    const token=localStorage.getItem('token')
    try {
      const res=await axios.get('http://localhost:2000/user/verifyToken',
        {headers:{Authorization:`Bearer ${token}` }}
      )
      if(res.data.verified){
        navigate('/user/home')
      }
      else{
        navigate('/signup')
      }

    } catch (error) {
      alert(' Before we begin , please login or signup first')
      navigate('/presignup')
      
    }
  }

  return (
    <div className='container1'>
        <div className='evently'>
            <h1>Evently</h1>
        </div>
            <ul className='ul1'>
                <li><a href="/">Discover</a></li>
                <li><a href="#footer">About</a></li>
                <li><a href="/">Contact Us</a></li>
            <button onClick={handleCLick}>Create</button>
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
                <li><a href="/login">Login</a></li>
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
                <li><a href='/user/home'>Home</a></li>
                <li><a href="/">Contact us</a> </li>
                <Link to={'/'}>Logout</Link>
            </ul>
        
    </div>
  )
}

function UerHomeMenu() {
  return (
    <div className='container1'>
        <div className='evently'>
            <h1>Evently</h1>
        </div>
            <ul className='ul1'>
                <li><a href="/">Contact us</a> </li>
                <li><a href="/">Notifications</a></li>
                <Link to={'/'}>Logout</Link>
            </ul>
        
    </div>
  )
}


export {HomeMenu,PreSignupMenu,MapMenu,UerHomeMenu}