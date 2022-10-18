import React from 'react'
import './Experince.css'
import {BsFillPatchCheckFill} from "react-icons/bs"
const Experince = () => {
  return (
   
   <section id='experince'>
    
    <h5>Skills</h5>

    <h2>My Experince</h2>

    <div className='container experince_container'>
      
      <div className="experince_frontened">
        
        <h3>Frontend Development</h3>
        
        <div className='experince_content'>
          
          <article className='experince_details'>
          <BsFillPatchCheckFill className='experince_details-icon' /> 
          <div>
          <h4>HTML</h4>
          <small className='text-light'>Experienced</small>
          </div>
         
          </article>

          <article className='experince_details'>
          <BsFillPatchCheckFill className='experince_details-icon' /> 
          <div>
          <h4>HTML</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>

          <article className='experince_details'>
          <BsFillPatchCheckFill className='experince_details-icon' /> 
          <div>
          <h4>CSS</h4>
          <small className='text-light'>Intermidiate</small>
          </div>

          </article>


          <article className='experince_details'>
          <BsFillPatchCheckFill className='experince_details-icon' /> 
        
          <div>
          <h4>Bootstrap</h4>
          <small className='text-light'>Experienced</small>
          </div>

          </article>


          
          <article className='experince_details'>
          <BsFillPatchCheckFill className='experince_details-icon' /> 
         

          <div>

          <h4>React</h4>
          <small className='text-light'>Experienced</small>
          </div>

          </article>


        </div>

      </div>




      <div className="experince_backend">
        
        
      <h3>Backend Development</h3>
        
        <div className='experince_content'>
          
          <article className='experince_details'>
          <BsFillPatchCheckFill className='experince_details-icon' /> 
          
          <div>
          <h4>Java</h4>
          <small className='text-light'>Experienced</small>
          </div>

          </article>

          <article className='experince_details'>
          <BsFillPatchCheckFill className='experince_details-icon' /> 
            <div>
            <h4>Spring Boot</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experince_details'>
          <BsFillPatchCheckFill className='experince_details-icon' /> 
            <div>
            <h4>C</h4>
            <small className='text-light'>Intermidiate</small>
            </div>
          </article>


          <article className='experince_details'>
          <BsFillPatchCheckFill className='experince_details-icon' /> 
            <div>
            <h4>Mysql</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>


          
          <article className='experince_details'>
          <BsFillPatchCheckFill className='experince_details-icon' /> 
           <div>
          <h4>React</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>


        </div>

      </div>

      </div>
   </section>

  )
}

export default Experince