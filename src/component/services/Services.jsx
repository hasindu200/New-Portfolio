import React from 'react'
import './Services.css'
import {FcCheckmark} from "react-icons/fc"

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container service_continer'>
        <article className='service'>
          <div className="service_head">
            <h3>UI | UX Design</h3>
          </div>

          <ul className='service_list'>
            <li><FcCheckmark className='service_list-icon'/>
            <p>Lorem  placeat perferendis recusandae quas, veniam,</p>
            </li>
            <li><FcCheckmark className='service_list-icon'/>
            <p>Lorem  placeat perferendis recusandae quas, veniam,</p>
            </li>
            <li><FcCheckmark className='service_list-icon'/>
            <p>Lorem  placeat perferendis recusandae quas, veniam,</p>
            </li>
            <li><FcCheckmark className='service_list-icon'/>
            <p>Lorem  placeat perferendis recusandae quas, veniam,</p>
            </li>
            <li><FcCheckmark className='service_list-icon'/>
            <p>Lorem  placeat perferendis recusandae quas, veniam,</p>
            </li>
          </ul>

        </article>


        <article className='service'>
          <div className="service_head">
            <h3>3d Printing</h3>
          </div>

          <ul className='service_list'>
            <li><FcCheckmark className='service_list-icon'/>
            <p>Lorem  placeat perferendis recusandae quas, veniam,</p>
            </li>
            <li><FcCheckmark className='service_list-icon'/>
            <p>Lorem  placeat perferendis recusandae quas, veniam,</p>
            </li>
            <li><FcCheckmark className='service_list-icon'/>
            <p>Lorem  placeat perferendis recusandae quas, veniam,</p>
            </li>
            <li><FcCheckmark className='service_list-icon'/>
            <p>Lorem  placeat perferendis recusandae quas, veniam,</p>
            </li>
            <li><FcCheckmark className='service_list-icon'/>
            <p>Lorem  placeat perferendis recusandae quas, veniam,</p>
            </li>
          </ul>

        </article>



        <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className='service_list'>
            <li><FcCheckmark className='service_list-icon'/>
            <p>Lorem  placeat perferendis recusandae quas, veniam,</p>
            </li>
            <li><FcCheckmark className='service_list-icon'/>
            <p>Lorem  placeat perferendis recusandae quas, veniam,</p>
            </li>
            <li><FcCheckmark className='service_list-icon'/>
            <p>Lorem  placeat perferendis recusandae quas, veniam,</p>
            </li>
            <li><FcCheckmark className='service_list-icon'/>
            <p>Lorem  placeat perferendis recusandae quas, veniam,</p>
            </li>
            <li><FcCheckmark className='service_list-icon'/>
            <p>Lorem  placeat perferendis recusandae quas, veniam,</p>
            </li>
          </ul>

        </article>

      </div>

    </section>
  )
}

export default Services