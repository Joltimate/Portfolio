import React from 'react'
import './footer.css'
import {BsFacebook, BsInstagram,BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href= "#" className='footer__logo'>Jose Nunez</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.facebook.com/yair.nunez.56/"><BsFacebook className='footer__socials-icons'/></a>
        <a href="https://www.instagram.com/jnunez0119/"><BsInstagram className='footer__socials-icons'/></a>
        <a href='https://www.linkedin.com/in/jose-nunez-805a3220a/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/Joltimate' target="_blank"><FaGithub/></a>
      </div>
      <div className='footer__copyright'>
        <small> &copy; Joltimate. All rights reserved.</small>
      </div>
    </footer>
    
  )
}

export default Footer