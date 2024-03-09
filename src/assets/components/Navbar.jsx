import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <span className="logo">Bhavya chat</span>
        <div className="user">
          <img src="https://images.pexels.com/photos/6975998/pexels-photo-6975998.jpeg" alt="" />
          <span>Bhavya</span>
          <button>logout</button>
        </div>
      </div>
    </>
  )
}

export default Navbar
