import React from 'react'
import './detailcard.css'
const detailCard = (props) => {
  const [passwordMode , setPasswordMode] = React.useState('password')
  const handlePasswordMode = () =>{
    if(passwordMode == 'password'){
        setPasswordMode('text')
    }
    else{
        setPasswordMode('password')
    }
  }
  return (
        <div className='loginOuter'>
        <div className='loginformcontainer'>
        <div className='loginformheader'>{props.title}</div>
        
        <form className='form'>
            
            <label htmlFor='username'>Username</label>
            <input onChange={props.handleChange} type='text' id='username' name='username'/>
            <label htmlFor='password'>Password</label>
            <div className='password-container'><input className='password-field' onChange={props.handleChange} type={passwordMode} id='password' name='password'/>
            <img className='password-icon' onClick={handlePasswordMode} src={passwordMode == 'password' ? '/images/show.png' : '/images/hide.png'}/>
            </div>
            <button onClick={props.handlePost} type='submit'>{props.title}</button>
            <a href={props.link == 'Login' ? '/' : '/signup'}>{props.link}</a>
            {props.message && <h1 className='error'>{props.message}</h1>}
        </form>
        
        </div>
        
        </div>
      )
}

export default detailCard