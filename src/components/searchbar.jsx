import React , {useState , useEffect , useRef} from 'react'
import {CiSearch} from 'react-icons/ci'
import './searchbar.css'
import'./colors.css'

function SearchBar({setFinalRes , openBar}) {

    const [inputVal , setinputValue] = useState("")


 useEffect(()=>{
    openBar ? 
    fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json())
    .then((data)=>{
        let finalRes = data.filter((item)=>{
        return item.name.toLowerCase().includes(inputVal.toLowerCase()) && inputVal
      })  
      setFinalRes(finalRes)
    }) :setFinalRes([])  
 },[inputVal , openBar])

  return (
    <div className= "searchBar">
        <CiSearch className='searchIcon'/>
        <input className = "searchInput" placeholder='Search drinks , snacks'  onChange={(e)=>setinputValue(e.target.value)}/>
    </div>
  )
}

export default  SearchBar