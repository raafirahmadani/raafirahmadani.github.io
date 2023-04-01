import React from 'react'
import './about.css'
import ME from '../../assets/aku-about.jpg'
import {TbAward} from "react-icons/tb"
import {GiCardExchange} from 'react-icons/gi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <TbAward className='about__icon'/>
              <h5>Experience</h5>
              <h6>5 months Study Independent at GNIK</h6>
              <small>Program kampus Merdeka</small>
            </article>
            <article className='about__card'>
              <GiCardExchange className='about__icon'/>
              <h5>Experience</h5>
              <h6>Student Exchange at Universitas Islam Indonesia</h6>
              <small>Program Merdeka Belajar</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut optio, quam eos temporibus dolorem explicabo eum magnam provident repellat hic officiis nam libero earum cum? Laboriosam deserunt minima hic atque?
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About