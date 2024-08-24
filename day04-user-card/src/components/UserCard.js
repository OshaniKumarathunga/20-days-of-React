import React from 'react'
import './userCard.css'

const UserCard = ({user:{firstName , lastName , image}}) => {
  return (
    <div className='user'>
        <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
    </div>
  )
}

export default UserCard