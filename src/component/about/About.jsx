import React from 'react'
import './About.css'
import meImg2 from '../../assets/2.png'
import {FaAward} from 'react-icons/fa'
import{FiUsers} from 'react-icons/fi'
import{FaUniversity} from 'react-icons/fa'
import{MdFolderSpecial} from 'react-icons/md'


const About = () => {
  return (

    <section id='about'>

      <h5>Get To Konow</h5>
    
      <h2>About Me</h2>


      <div className='container about_container'>

      <div className='about_me'>

        <div className="about_me-image">

          <img src={meImg2} alt="mySecondImage"/>

        </div>

      </div>


      <div className='about_content'>

      <div className="about_cards">

      <article className='about_card'>
        
        <FaUniversity className='about_icon'/>
        <h5>Education</h5>
        <small>Open University  & IJSE</small>
        
       </article>

      <article className='about_card'>

          <FaAward className='about_icon'/>
          <h5>Experience</h5>
          <small>1 Year Java</small>

      </article>


      <article className='about_card'>
        
        <MdFolderSpecial className='about_icon'/>
        <h5>Project</h5>
        <small>15+ Completed</small>

      </article>
 </div>

      <p>

      Born and raised in Sri Lanka.
      Educated at Prince of Wales' College Moratuwa.
      Currently an undergraduate student of The Open University Sri Lanka & IJSE since 2020.
      I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
      I've always had both a creative and a logical side. So, I use my creative side to design and my logical side to code.

      </p>

      <a href='#contact' className='btn btn-primary'>Let's Talk</a>

      </div>

      </div>
    
    </section>
   

  )
}

export default About