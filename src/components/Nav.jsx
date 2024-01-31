import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='nav-container'>
        <a href='/home'><img src='https://www.eattendance.com/wp-content/uploads/2017/04/logo@2x.png'/></a>
        <div><Link to="/add-game">Add Student</Link></div>
        <div><Link to="/edit-game">Edit Student</Link></div>
        <div><Link to='/'>LogOut</Link></div>
        <h2>Attendance portal</h2>
    </div>
  )
}

export default Nav