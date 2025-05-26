import React from 'react'
import MainImg from '../components/MainImg'
import { HomeMenu } from '../components/Menu'
import Sections from '../components/Sections'

function Landing() {
  return (
    <div>
        <HomeMenu/>
      <MainImg/>
      <Sections/>
    </div>
  )
}

export default Landing