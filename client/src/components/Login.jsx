import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    const data = await res.json()
    if(data.success){
      // (Store token if needed.)
      navigate('/')
    } else {
      alert(data.message)
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>
        <br />
        <label>Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
