import React from 'react'
import Home from './Home'
import { UerHomeMenu } from '../components/Menu'
import {UserHomeSidebar} from '../components/Sidebars'
import MainImg from '../components/MainImg'
import Sections from '../components/Sections'

function UserHome() {
  return (
    <div>
      <UerHomeMenu/>
        <div className='userHomeContainer'>
           <UserHomeSidebar/>
          <div>
            <div><MainImg/></div>
          <Sections/>
          </div>
      
        </div>
        
    </div>
  )
}

export default UserHome