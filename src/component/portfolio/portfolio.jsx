import React from 'react'
import './Portfolio.css'
import img1 from '../../assets/4.jpg'

const portfolio = () => {
  return (
    <section id='portfolio'>

      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

    <div className="container portfolio_container">

        <article className='portfolio_item'>

          <div className="portfolio_item-image">

              <img src={img1} alt='projectimg1'/>
            
             </div>

            <h3>This is a Portfolio item title</h3>
            <a href='https://github.com/hasindu200' className='btn btn-primary' target='_blank'> Git Hub </a>
         
          
        </article>  

        
        <article className='portfolio_item'>

          <div className="portfolio_item-image">

              <img src={img1} alt='projectimg1'/>
            
             </div>

            <h3>This is a Portfolio item title</h3>
            <a href='https://github.com/hasindu200' className='btn btn-primary' target='_blank'> Git Hub </a>
         
          
        </article>  

        
        <article className='portfolio_item'>

          <div className="portfolio_item-image">

              <img src={img1} alt='projectimg1'/>
            
             </div>

            <h3>This is a Portfolio item title</h3>
            <a href='https://github.com/hasindu200' className='btn btn-primary' target='_blank'> Git Hub </a>
         
          
        </article>  

        
        <article className='portfolio_item'>

          <div className="portfolio_item-image">

              <img src={img1} alt='projectimg1'/>
            
             </div>

            <h3>This is a Portfolio item title</h3>
            <a href='https://github.com/hasindu200' className='btn btn-primary' target='_blank'> Git Hub </a>
         
          
        </article>  

           
        <article className='portfolio_item'>

          <div className="portfolio_item-image">

              <img src={img1} alt='projectimg1'/>
            
             </div>

            <h3>This is a Portfolio item title</h3>
            <a href='https://github.com/hasindu200' className='btn btn-primary' target='_blank'> Git Hub </a>
         
          
        </article>  


           
        <article className='portfolio_item'>

          <div className="portfolio_item-image">

              <img src={img1} alt='projectimg1'/>
            
             </div>

            <h3>This is a Portfolio item title</h3>
            <a href='https://github.com/hasindu200' className='btn btn-primary' target='_blank'> Git Hub </a>
         
          
        </article>  
      
      </div>


    </section>
  )
}

export default portfolio