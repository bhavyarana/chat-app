import React from 'react'
import upload from "../images/upload.png"

const Register = () => {
  return (
    <>
      <div className="form-container">
        <div className="form-wrapper">
          <span className="logo">Chat App</span>
          <span className="title">Register</span>
          <form>
            <input type="text" placeholder='Dispaly Name' />
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <input type="file" id='upload'/>
            <label htmlFor="upload">
              <img src={upload} alt="uplaod image" />
              <span>Add an avatar</span>
            </label>
            <button>Sign up</button>
          </form>
          <p>You do have an account? <span>Login</span></p>
        </div>
      </div>
    </>
  )
}

export default Register
