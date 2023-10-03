import React ,  { useEffect, useState , useRef }  from 'react'
import SearchBar from './searchbar'
import SearchRes from './searchres'
import './header.css'
import'./colors.css'
import logo from '../assests/cafelogod.png'
import { Link } from 'react-router-dom'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {CiUser} from 'react-icons/ci'

function Header() {
  const searchParent = useRef()
  const [FinalRes , setFinalRes] = useState([])
  const [openBar , setBarOpen] = useState(false)
  
  useEffect(()=>{
    const handleOpening = (e) =>{
        if (!searchParent.current.contains(e.target)){
            setBarOpen(false)
        }
        else {
          setBarOpen(true)
        }
    }

    document.addEventListener("click",handleOpening)
    return () => {
      document.removeEventListener('click', handleOpening);
    };
  })
  
  return (
    <header className={FinalRes.length > 0 ? "active-for-search-bar" : ""}>
        <div className='conatiner'>
              <a href='#' className="logo">
                  <img src = {logo} alt="logo" />
              </a>
              <div className='search-bar-conatiner' ref={searchParent}>
                <SearchBar setFinalRes = {setFinalRes} openBar = {openBar} />
                <SearchRes  finalRes = {FinalRes}  openBar = {openBar}/>
              </div>
              <div className="header-icons">
                    <a className='icon'  href = "#"><IoMdNotificationsOutline /></a>
                    <a  className='icon' href = "#"><CiUser /></a>
              </div>
        </div>
    </header>
  )
}

export default Header