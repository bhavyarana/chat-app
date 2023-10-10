import React from 'react'

const Login = () => {
  return (
    <>
      <div className="form-container">
        <div className="form-wrapper">
          <span className="logo">Chat App</span>
          <span className="title">Login</span>
          <form>
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <button>Log in</button>
          </form>
          <p>You don't have an account? <span>Sign up</span></p>
        </div>
      </div>
    </>
  )
}

export default Login
