import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from './assets/pages/SignUp'
import Login from './assets/pages/Login'
import PreSignup from './assets/pages/PreSignup'
import UserHome from './assets/pages/UserHome'
import Map from './assets/pages/Map'
import Landing from './assets/pages/Landing.jsx'
function App() {
  return (
   <>
   <Routes>
     <Route path='/' element={<Landing/>}/>
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