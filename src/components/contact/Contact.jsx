import React from 'react'
import './Contact.css'
import{MdEmail} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {FaWhatsappSquare} from 'react-icons/fa'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w9ik55b', 'template_b7159wy', form.current, 'IQCquRKXN2gV-EB2z')
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5> Get In Touch</h5>
      <h2> Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdEmail className='contact_option-icon'/>
            <h4> Email</h4>
            <h5>arpitgupta1918486@gmail.com</h5>
            <a href="mailto:arpitgupta1918486@gmail.com" target="_blank"> Send a message </a>
          </article>

          <article className="contact_option">
            <BsInstagram className='contact_option-icon'/>
            <h4> Instagram</h4>
            <h5>ArpitGupta</h5>
            <a href="https://instagram.com/arpitgupta177?igshid=ZDdkNTZiNTM=" target="_blank"> Send a message </a>
          </article>

          <article className="contact_option">
            <FaWhatsappSquare  className='contact_option-icon'/>
            <h4> Whatapps</h4>
            <h5>+919630040614</h5>
            <a href="https://api.whatsapp.com/send?phone9630040614" target="_blank"> Send a message </a>
          </article>
        </div>
       {/* END of CONTACT */}
       <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='your Full Name' required/>
        <input type="email" name='email' placeholder='your Email' required/>
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Messasge</button>
       </form>
      </div>
    </section>
  )
}

export default Contact