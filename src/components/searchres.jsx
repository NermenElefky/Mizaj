import React from 'react'
import './searchres.css'
import SearchItemshow from './searchitemdisplay'


function SearchRes({finalRes ,openBar}) {
    if (!openBar){
        return null
    }

    return (
    <div className='searchRes'>
       { finalRes.map((item)=>{
            return <SearchItemshow item = {item} key={item.id}/>
        })}
    </div>
  )
}

export default SearchRes