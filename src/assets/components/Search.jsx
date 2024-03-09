import React from 'react'

const Search = () => {
  return (
    <>
    <div className="search">
      <div className="search-form">
        <input type="text" placeholder='Find a user'/>
      </div>
      <div className="user-chat">
        <img src="https://images.pexels.com/photos/6975998/pexels-photo-6975998.jpeg" alt="" />
        <div className="user-chat-info">
          <span>Bhavya</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default Search
