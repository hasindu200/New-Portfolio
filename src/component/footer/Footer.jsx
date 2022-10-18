import React from 'react'
import './Footer.css'
import {AiOutlineFacebook} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Me</a>

    <ul className='premalinks'>
      <li><a href='#'>Home</a></li>
      <li><a href='#about'>About</a></li> 
      <li><a href='#experince'>Experince</a></li>
      <li><a href='#portfolio'>Portfolio</a></li>
      <li><a href='#contact'>Contact</a></li>

    </ul>


      <div className='footer_socials'>
        <a href='https://facebook.com'><AiOutlineFacebook/></a>
        <a href='https://instagram.com'><AiOutlineInstagram/></a>
        <a href='https://github.com/hasindu200'><AiFillGithub/></a>
      </div>
      
      <div className='footer_copyright'>
        <small>Hasindu Pramuditha. All Right Reserved.</small>
      </div>

    </footer>
  )
}

export default Footer