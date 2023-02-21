import React from 'react'
import './Header.css'
import CTA from './CTA'
import me from '../../assets/.1png.jpg'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className="container header_container">
      <h5> Hello I'm</h5>
      <h1> Arpit Gupta</h1>
      <h5 className="text-light"> java Stack Developer</h5>
      <CTA/>
      <HeaderSocials/>
      <div className="me">
        <img src = {me} alt="img"></img>
      </div>
      <a href="#contact" className='Scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header