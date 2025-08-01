import React, { useState } from 'react';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function submit(ev) {
    ev.preventDefault();
    // console.log( email, password );
  }

  return (
    <div className="container py-5">
      <form onSubmit={submit} className="w-50 mx-auto">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input 
            type="email" className="form-control" id="email" value={email} onChange={(ev) => setEmail(ev.target.value)} required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input 
            type="password" className="form-control" id="password"  value={password} onChange={(e) => setPassword(e.target.value)} required 
          />
        </div>
        <button type="submit" className="btn btn-success w-100">Sign In</button>
      </form>
    </div>
  )
}
