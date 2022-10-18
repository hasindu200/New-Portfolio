import React from 'react'
import './contact.css'
import {FcVoicemail} from "react-icons/fc"
import{BiMobileVibration} from "react-icons/bi"

const contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className='contact_options'>
          <article className='contact_option'>
            <FcVoicemail/>
            <h4>Email</h4>
            <h5>hasindukl@gmail.com</h5>
            <a href='mailto:hasindukl@gmail.com' target="_blank">Send a Message</a>
          </article>

          <article className='contact_option'>
          <BiMobileVibration/>
            <h4>Mobile Number</h4>
            <h5>071 - 5426172</h5>
          </article>


        </div>

        <form action=''>
            <input type="text" name='name' placeholder='Your Full Name' required/>
            <input type="email" name= 'email' placeholder='Your Email' required />
            <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact