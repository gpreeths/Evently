import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function SignUp() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [reTypePassword, setRetypedpassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [errormessage,setErrormessage]=useState('')


  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      if (password != reTypePassword) {
        alert("Passwords do not match")
        setLoading(false)
        return
      }
      const res = await axios.post("http://localhost:2000/user/signup", { email, name, password, reTypePassword })

      console.log("SignUp Successfull!! Redirecting to Login page", res.data);

      setEmail('')
      setName('')
      setPassword('')
      setRetypedpassword('')
      navigate('/login')


    } catch (error) {
      console.log('An error occured', error);
      const errormessage=error.response?.data?.message||'Something went wrong'
      setErrormessage(errormessage)
    }
    finally {
      setLoading(false)
    }
  }


  return (
    <div>
      <form onSubmit={onSubmit}>
        <table>
          <tbody>
            <tr>
              <th><label htmlFor="name">Enter Name</label></th>
              <td><input id='name'
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} /></td>
            </tr>
            <tr>
              <th> <label htmlFor="email">Email</label></th>
              <td><input type="email"
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)} /></td>
            </tr>
            <tr>
              <th> <label htmlFor="password">Password</label></th>
              <td><input type="password"
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} /></td>
            </tr>
            <tr>
              <th><label htmlFor="reTypePassword">Re-enter password</label></th>
              <td><input type="password"
                id='reTypePassword'
                value={reTypePassword}
                onChange={(e) => setRetypedpassword(e.target.value)} /></td>
            </tr>
            <tr>
              <th></th>
              <td><button type='submit' disabled={loading}>{loading ? 'One step closer to become an ATMOSAN' : 'Submit'}</button></td>
            </tr>
            <tr>
              <th></th>
              <td>{errormessage}</td>
              
            </tr>
          </tbody>
        </table>
      </form>


    </div>
  )
}

export default SignUp