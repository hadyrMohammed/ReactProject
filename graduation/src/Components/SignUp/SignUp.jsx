import React, { useState } from 'react';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function submit(e) {
    e.preventDefault();
  }

  return (
    <div className="container py-5">
      <form onSubmit={submit} className="w-50 mx-auto">
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input 
            type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)}   required  />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input 
            type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required    />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input 
             type="password" className="form-control"  id="password" value={password} onChange={(e) => setPassword(e.target.value)}  required  />
        </div>
        <button type="submit" className="btn btn-success w-100">Sign Up</button>
      </form>
    </div>
  )
}
