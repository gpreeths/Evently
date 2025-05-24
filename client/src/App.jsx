import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from './assets/pages/SignUp'
import Login from './assets/pages/Login'

function App() {
  return (
   <>
   <Routes>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/login' element={<Login/>}/>
   </Routes>
   </>
  )
}

export default App