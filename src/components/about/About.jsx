import React from 'react'
import './About.css'
import Me from '../../assets/.png.jpg'
import {FiAward} from 'react-icons/fi'
import {FiUser}  from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2> About Me</h2>
      <div className=" container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me} alt=" About Image"/>

          </div>
        </div>
        <div className="about_content">
         <div className="about_cards">
          <article className='about_card'>
          <FiAward className='about_icon'/>
            <h5>Experience</h5>
            <small> 1+ years working</small>
          </article>
          
          <article className='about_card'>
          <FiUser className='about_icon'/>
            <h5>Clients</h5>
            <small> 500+ Worldwide</small>
          </article>

          
          <article className='about_card'>
          <VscFolderLibrary className='about_icon'/>
            <h5>Projects</h5>
            <small> 5+ completed</small>
          </article>
          
         </div>
         <p>
         I am a pre final year undergraduate student.I love solving problems related to data structure and Algorithms and regularly taking part in online coding.I have solved coding questions leetcode,codechef etc.I am confident in computer Science Fundamental and mostly interested in the backend part ,and working more on it.I have my hands on web development as well.I am looking for software Development Engineer roles and am ready to self-learn necessary skills and coursework in advance if needed.
         </p>
         <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About