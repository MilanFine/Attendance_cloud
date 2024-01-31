import React from 'react'
import GameCard from './GameCard'
import './gamecard-container.css'
import axios from 'axios'


const GameCardContainer = () => {
    const token = {token : sessionStorage.getItem('token')}
    console.log(token)
    if(!token.token){
      window.location.href = '/'
    }
    const [filter,setFilter] = React.useState('all')
    const [games, setGames] = React.useState([])
    
    React.useEffect(() => {
  axios.post(`https://games-library-wbdz.onrender.com/mygames/${filter}`,token)
  .then(async function (data){
    console.log(data.data)
    await setGames(data.data)
    
  }).catch((err) => {console.log(err)})},[filter])

  



  return (
    <>
    <div className='filter-container'>
        <div className={`${filter==='all' && "active"}`} onClick={() => setFilter('all')}>All Students</div>
        <div className={`${filter==='completed' && "active"}`} onClick={() => setFilter('completed')}>Present</div>
        <div className={`${filter==='playing' && "active"}`} onClick={() => setFilter('playing')}>Absent</div>
      </div>
    <div className='gamecardcontainer'>
        {games.length === 0 && <div className='no-games'>No Entries yet</div>}
        {games.map((game) => (<GameCard key={game._id} name={game.name} completed={game.completed} image_url={game.image_url}/>))}
        
    </div>
    </>
  )
}

export default GameCardContainer