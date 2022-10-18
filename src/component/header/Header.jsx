import React from 'react'
import './Header.css'
import CTA from './CTA.jsx'
import Me from '../../assets/1.jpg'
import HeaderSocials from './HeaderSocials'


const Header = () => {


  return (

    <header>

      <div className='container header_container'>

        <h5>Hello I'm</h5>
        <h1>Hasindu Pramuditha</h1>
        <h5 className='text-light'>Full Stack Develpoer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="meImg">
          <img src={Me} alt='my IMG'/>
        </div>

        <a href='#contact' className='scroller_down'>Scroller Down</a>



      </div>


      
    </header>


  )


}

export default Header