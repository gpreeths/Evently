import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [errormessage, setErrormessage] = useState()

    useEffect(()=>{
        const timer=setTimeout(()=>{
        setLoading(false)},2000)
        return()=>clearTimeout(timer)
    },[])

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:2000/user/login',
                { email, password }
            )
            alert("Login Sucessful")
            localStorage.setItem('token',res.data.token)
            navigate('/')

        } catch (error) {
            const errormessage = error.response?.data?.message || 'Something went wrong'
            setErrormessage(errormessage)

        }

    }
if(loading){
    return <h2>Entering ATMOS Territory!!!</h2>
}

    return (
        <div>
            <form onSubmit={onSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <th><label htmlFor="email">Email</label></th>
                            <td><input type="email"
                                id='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <th><label htmlFor="password">Password</label></th>
                            <td><input type="password"
                                id='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <button>Submit</button>
                        </tr>
                        <tr>
                            <td><a href='/'>New to ATMOS? Signup here!</a></td>
                            <td><a href="/">Forgot password? No worries</a></td>
                        </tr>
                        <tr>{errormessage}</tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default Login