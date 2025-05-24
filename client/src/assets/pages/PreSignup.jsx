import React from 'react'
import {PreSignupMenu} from '../components/Menu'
import { useState } from 'react'
import SignUp from './SignUp'

function PreSignup() {
    const [role,setRole]=useState('')
    const [showSignup,setSignup]=useState(false)

    const handlecontinue=()=>{
        if(role){
            setSignup(true)
        }
    }
     

  return (
    <div>
        <PreSignupMenu/>
        <h1>Who are you?</h1>
        <br /><br />
 <button onClick={()=>setRole('user')}>
    <div>
        <h1>User</h1>
        <p>I'm  consumer of events and communities</p>
    </div>
 </button>
 <br />
 <button onClick={()=>setRole('host')}>
    <div>
        <h1>Event Host</h1>
        <p>I'm  consumer of events and communities</p>
    </div>
 </button>
 <br />
 <button onClick={handlecontinue} disabled={!role}>Continue</button>
{showSignup &&(
    <div>
        <SignUp selectedRole={role}/>
    </div>
)}
       
    </div>
  )
}

export default PreSignup