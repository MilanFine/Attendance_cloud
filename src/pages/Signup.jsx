import React from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"; 
import DetailCard from '../components/detailCard'
const Signup = () => {

    sessionStorage.removeItem('token')
    const navigate = useNavigate();
    const [user , setUser] = React.useState({
        username:'',
        password:''
    })
    const [msg , setMsg] = React.useState('')
    const handleChange = (e) =>{
        setUser({
            ...user,[e.target.name]:e.target.value
        })
    }

    const handlePost = async (e) =>{
        e.preventDefault();
        const res = await axios.post('https://games-library-wbdz.onrender.com/users/signup/',user);
        const token = res.data.token
        if(token){
            sessionStorage.setItem('token',token)
            navigate("/home");
        }
        else{
            setMsg(res.data.message)
        }
        
    }

  return (
    <>
        <DetailCard title='SIGNUP' message={msg} link='Login' handleChange={handleChange} handlePost={handlePost}/>
    </>
  )
}

export default Signup