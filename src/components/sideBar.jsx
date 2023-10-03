import React from 'react'
import './sideBar.css'
import{HiOutlineHome as HomeIcon} from 'react-icons/hi'
import {SlCup as DrinksIcon} from'react-icons/sl'
import {TbBrandCakephp as FoodIcon} from 'react-icons/tb'
import {BsClockHistory as History} from 'react-icons/bs'
import {AiOutlineHeart as Favorites , AiOutlineSetting as Setting} from 'react-icons/ai'



const SideBar = () => {
  return (
    <div className='sidebar'>
        <ul>
            <li>
                <a href="#">
                    <HomeIcon className='icon' />
                    <span>home</span>
                </a>
            </li>

            <li>
                <a href="#">
                    <DrinksIcon  className='icon'/>
                    <span>drinks</span>
                </a>
            </li>

            <li>
                <a href="#">
                    <FoodIcon className='icon' />
                    <span>snacks</span>
                </a>
            </li>

            <li>
                <a href="#">
                    <History className='icon' />
                    <span>History</span>
                </a>
            </li>

            <li>
                <a href="#">
                    <Favorites  className='icon'/>
                    <span>Favorites</span>
                </a>
            </li>

            <li>
                <a href="#">
                    <Setting  className='icon'/>
                    <span>setting</span>
                </a>
            </li>

        </ul>
    </div>
  )
}


export default SideBar 