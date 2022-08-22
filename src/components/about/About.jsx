import React from 'react'
import './about.css'
import MECrop from '../../assets/MECrop.jpg'
import {FaAward, FaUniversity} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import {MdOutlineSchool} from 'react-icons/md'


function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className = 'about__me'>
          <div className='about__me-image'>
            <img src={MECrop} alt=""/>
          </div>

        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className='about__card'>
              <MdOutlineSchool className='about__icon'/>
              <h5>Degree</h5>
              <small>Computer Science & Engineering</small>
            </article>

            <article className='about__card'>
              <FaUniversity className='about__icon'/>
              <h5>Graduated</h5>
              <small>The
                University of Louisville</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
              I am currently a .Net Junior Developer.  I am currently working for The Rawlings Group in La Grange KY. I am a full stack developer but prefer front end developing
          </p>
            
            <a href="#contact" className='btn btn-primary'> Lets Talk</a>

        </div>
        
      </div>

    </section>
  )
}

export default About