import React from 'react'
import './Services.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2> Services</h2>
      <div className="container services_container">
         <article  className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BsFillCheckCircleFill className='service_list-icon'/>
              <p> UX design is all about identifying and solving user problems.</p>
            </li>

            <li>
              <BsFillCheckCircleFill className='service_list-icon'/>
              <p>UI design is all about creating intuitive, aesthetically-pleasing, interactive interfaces.</p>
            </li>

            <li>
              <BsFillCheckCircleFill className='service_list-icon'/>
              <p> UX design usually comes first in the product development process, followed by UI. </p>
            </li>

            

            <li>
              <BsFillCheckCircleFill className='service_list-icon'/>
              <p> UX can apply to any kind of product, service, or experience.</p>
            </li>

            <li>
              <BsFillCheckCircleFill className='service_list-icon'/>
              <p>UI is specific to digital products and experiences.</p>
            </li>
          </ul>
         </article>
      
      <article  className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BsFillCheckCircleFill className='service_list-icon'/>
              <p> Web development refers to the creating, building, and maintaining of websites.</p>
            </li>

            <li>
              <BsFillCheckCircleFill className='service_list-icon'/>
              <p>It includes aspects such as web design, web publishing, web programming, and database management. </p>
            </li>

            

            <li>
              <BsFillCheckCircleFill className='service_list-icon'/>
              <p> Backend is the server side of a website.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service_list-icon'/>
              <p> The list of back end frameworks are: Express, Django, Rails, Laravel, Spring, etc.</p>
            </li>
          </ul>
         </article>
         

         
         <article  className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BsFillCheckCircleFill className='service_list-icon'/>
              <p>Content Creation Ideas.</p>
            </li>

            <li>
              <BsFillCheckCircleFill className='service_list-icon'/>
              <p> Content Planning and Strategy </p>
            </li>

            <li>
              <BsFillCheckCircleFill className='service_list-icon'/>
              <p>The Content Creation Process.</p>


            </li>

            <li>
              <BsFillCheckCircleFill className='service_list-icon'/>
              <p>Analyzing Your Content</p>
            </li>

            <li>
              <BsFillCheckCircleFill className='service_list-icon'/>
              <p>Content Creation Tool</p>
            </li>

           
          </ul>
         </article>
         </div>
    </section>
  )
}

export default Services