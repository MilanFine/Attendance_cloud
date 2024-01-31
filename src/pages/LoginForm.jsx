import React from 'react'
import axios from 'axios'
import './loginform.css'
import DetailCard from '../components/detailCard'
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    sessionStorage.removeItem('token')
    const navigate = useNavigate();
    const [msg , setMsg] = React.useState('')
    const [user , setUser] = React.useState({
        username:'',
        password:''
    })

    const handleChange = (e) =>{
        setUser({
            ...user,[e.target.name]:e.target.value
        })
    }

    const handlePost = async (e) =>{
        e.preventDefault();
        let res
        await axios.post('https://games-library-wbdz.onrender.com/users/login/',user)
        .then(function (response) {
            res = response
        }).catch(function (error) {
            setMsg('Please wait for the server to start!')
        })
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
        <DetailCard title='LOGIN' message={msg} handleChange={handleChange} handlePost={handlePost} link='SignUp'/>
    </>
  )
}

export default LoginForm