import React from 'react'
import './game-card.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const GameCard = ({name,completed,image_url}) => {
   const  handleDelete = async () => {
    const token = sessionStorage.getItem('token')
    const res = await axios.delete(`https://games-library-wbdz.onrender.com/mygames/${name}`,{data:{token}})
    window.location.reload()
    }
  return (
    <div className='card-container'>
      <button className='delete' onClick={handleDelete}>delete</button>
        <img alt='gameImg' src={image_url}/>
        <p className='game-name'>{name}</p>
        <div className='completed'>Present<img src={completed ? `images/accept.png` : `images/cross.png`} /></div>
    </div>
  )
}

export default GameCard