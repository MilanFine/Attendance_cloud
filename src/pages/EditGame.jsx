import React from 'react'
import axios from 'axios'
import './AddGame.css'
import './EditGame.css'
const EditGame = () => {
  const token = sessionStorage.getItem('token')
  if(!token){
    window.location.href = '/'
  }
  const [allGames , setAllGames] = React.useState([])
  const [game , setGame] = React.useState({
    name:'',
    image_url:'',
    completed:true
  })
  React.useEffect(()=>{
    axios.post('https://games-library-wbdz.onrender.com/mygames/all',{token})
    .then((res)=>{
      console.log(res)
      setAllGames(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  const handleChange = (event) => {
    setGame({
      ...game,[event.target.name]:event.target.value
    })
    console.log(game)
  }
  
  const handleEdit = (event) =>{
    if(event.target.value == ''){
      setGame({
        name:'',
        image_url:'',
        completed:true
      })
      return
    }
      axios.post(`https://games-library-wbdz.onrender.com/mygames/${event.target.value}`,{token})
      .then((res)=>{
        console.log(res.data)
        res.data.completed = res.data.completed.toString()
        setGame({
          name:res.data.name,
          image_url:res.data.image_url,
          completed:res.data.completed
        })
      }).catch((err)=>{
        console.log(err)
      })
  }
  const handlePost = (event) =>{
    event.preventDefault();
    console.log(game)
    axios.patch(`https://games-library-wbdz.onrender.com/mygames/${game.name}`,{...game,token})
    .then((res)=>{
      console.log(res)
      alert('Student Data Edited')
    }).catch((err)=>{
      console.log(err)
      alert('Failed to Edit Student Data')
    })
  }


  return (
    <>
    <div className='formcontainer'>
        <form className='forms'>
            <label>Name:<br></br><select onChange={handleEdit} id="name" name="name">
                <option value="">Select student</option>
                    {allGames.map((data)=>{return <option key={data._id} value={data.name}>{data.name}</option>})}
                </select></label>
            <label >Image URL:<br></br> 
            <input onChange={handleChange} className='input' type="text" name="image_url" id="image_url" value={game.image_url}/>
            <br/></label>
            <div className='completed'>
            <label htmlFor="completed">Status</label>
            <input 
            onChange={handleChange} 
            type="radio" 
            name="completed" 
            value={true} 
            checked={game.completed == 'true'}
            id="true"/>
            <label htmlFor="true">Attended</label>
            <input onChange={handleChange} type="radio" name="completed" value={false} id="false" checked={game.completed == 'false'}/>
            <label htmlFor="false">Absent</label></div>
            <button 
            className='submit'
            type="submit" 
            onClick={handlePost}>Edit Status</button>
        </form>
        </div>
    </>
  )
}

export default EditGame