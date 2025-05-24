import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from './assets/pages/SignUp'
import Login from './assets/pages/Login'
import Home from './assets/pages/Home'
import PreSignup from './assets/pages/PreSignup'
import UserHome from './assets/pages/UserHome'
import Map from './assets/pages/Map'
function App() {
  return (
   <>
   <Routes>
     <Route path='/' element={<Home/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/presignup' element={<PreSignup/>}/>
<Route path='/user/home' element={<UserHome/>}/>
<Route path='/user/map' element={<Map/>}/>
   </Routes>
   </>
  )
}

export default App