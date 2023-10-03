import React , {useState} from 'react'
import './App.css'
import Header from './components/Header'
import SideBar from './components/sideBar'
import Home from './components/home'


function App() {
  
  return (
    <div className = "parent">
        <Header /> 
        <div className='content'>
          <SideBar />
          <Home />   
        </div>    
    </div>
  )
}

export default App
