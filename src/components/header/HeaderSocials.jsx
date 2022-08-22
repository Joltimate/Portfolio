import React from 'react'
import {BsFacebook, BsInstagram,BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.facebook.com/yair.nunez.56/"><BsFacebook className='footer__socials-icons'/></a>
        <a href="https://www.instagram.com/jnunez0119/"><BsInstagram className='footer__socials-icons'/></a>
        <a href='https://www.linkedin.com/in/jose-nunez-805a3220a/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/Joltimate' target="_blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials