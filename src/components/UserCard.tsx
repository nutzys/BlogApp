import React, { useState } from 'react'
import Users from '../models/usermodel'
import { Link, Route, Routes } from 'react-router-dom'
import User from '../pages/User'
import App from '../App'


const UserCard: React.FC<Users> = (props) => {
  return (
    <div className='user-card'>
      <div className='picture'>Picture</div>
      <h1>{props.name}</h1>    
      <Link to={`/users/${props.id}`}>Click to view</Link>
    </div>
  )
}

export default UserCard
