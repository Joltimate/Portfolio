import React from 'react'
import './header.css'
import CTA from './CTA'
import MECrop from '../../assets/MECrop.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className =".container.header__container">
      <h5>Hello I'm</h5>
      <h1>Jose Nunez</h1>
      <h5 className=".text-light">Junior Software Developer</h5>
      <CTA/>
      <HeaderSocials/>
      <div className='me'>
        <img src={MECrop} alt=""/>

      </div>

      <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header