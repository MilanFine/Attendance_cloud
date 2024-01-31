import React from 'react'
import{BrowserRouter ,Route,Routes} from 'react-router-dom'
import Nav from './components/Nav'
import GameCardContainer from './components/GameCardContainer'
import AddGame from './pages/AddGame'
import EditGame from './pages/EditGame'
import LoginForm from './pages/LoginForm'
import Signup from './pages/Signup'
const App = () => {
  return (
    <div>
      
        <Routes>
          <Route path='/home' element={<><Nav/><GameCardContainer/></>}/>
          <Route path='/add-game' element={<><Nav/><AddGame/></> }/> 
          <Route path='/edit-game' element={<><Nav/><EditGame/></>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='*' element={<LoginForm/>}/>
        </Routes>
        
      
    </div>
  )
}

export default App