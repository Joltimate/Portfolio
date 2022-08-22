import React from 'react'
import './experience.css'
import { GoVerified } from 'react-icons/go'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Front End Development</h3>
          <div className='experience__content'>
            <article className='expererience__details' >
            <GoVerified className='expererience__details-icon'/>
            <div>
              <h4>Angular</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='expererience__details' >
            <GoVerified className='expererience__details-icon'/>
            <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='expererience__details' >
            <GoVerified className='expererience__details-icon'/>
            <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='expererience__details' >
            <GoVerified className='expererience__details-icon'/>
            <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='expererience__details' >
            <GoVerified className='expererience__details-icon'/>
            <div>
              <h4>TypeScript</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='expererience__details' >
            <GoVerified className='expererience__details-icon'/>
            <div>
              <h4>JaveScript</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
          </div>
          
        </div>



        <div className='experience__backend'>
          <h3>Back End Development</h3>
          <div className='experience__content'>
          <article className='expererience__details' >
            <GoVerified className='expererience__details-icon'/>
            <div>
              <h4>SSMS</h4>
              <small className='text-light'>Experienced</small>
            </div>           
            </article>

            <article className='expererience__details' >
            <GoVerified className='expererience__details-icon'/>
            <div>
              <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='expererience__details' >
            <GoVerified className='expererience__details-icon'/>
            <div>
              <h4>.NET</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='expererience__details' >
            <GoVerified className='expererience__details-icon'/>
            <div>
              <h4>C#</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
          </div>
          
        </div>
        

      </div>


    </section>
  )
}

export default Experience