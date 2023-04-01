import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>RAAFI RAHMADANI YOSAK</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://linkedin.com/in/raafirahmadani" target="_blank"><BsLinkedin /></a>
        <a href="https://instagram.com/raafirahmadani" target="_blank"><BsInstagram /></a>
        <a href="https://facebook.com/rafiyosak" target="_blank"><BsFacebook /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Raafi Rahmadani Yosak Portofolio. All rights reserved</small>
      </div>
    </footer> 
  )
}

export default Footer