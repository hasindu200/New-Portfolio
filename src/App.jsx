import React from 'react'
import Header from './component/header/Header.jsx'
import Nav from './component/nav/Nav.jsx'
import About from './component/about/About.jsx'
import Experince from './component/experience/Experince.jsx'
import Portfolio from './component/portfolio/portfolio.jsx'
import Contact from './component/contact/contact.jsx'
import Footer from './component/footer/Footer.jsx'
import Services from './component/services/Services.jsx'
const App = () => {
  return (
   <>
    <Header/>
    <Nav/>
    <About/>
    <Experince/>
    <Services/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    

    
   </>

  )
}

export default App