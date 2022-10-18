import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUserPin} from 'react-icons/bi'
import {BsFillBookmarkStarFill} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import {MdContactPhone} from 'react-icons/md'
import { useState } from 'react'
const Nav = () => {
  const [activeNav,setActiveNav] =  useState('#')
  return (
   

    <nav>

    <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' :''}><AiOutlineHome/></a>
    <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' :''}><BiUserPin/></a>
    <a href="#experince" onClick={() => setActiveNav('#experince')} className={activeNav === '#experince' ? 'active' :''}><BsFillBookmarkStarFill/></a>
    <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' :''}><RiServiceLine/></a>
    <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' :''}><MdContactPhone/></a>

    </nav>

  )
}

export default Nav