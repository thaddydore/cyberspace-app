import React from 'react'

import { ReactComponent as Arrow } from '../../assets/Vector.svg'
import { BsArrowRight } from 'react-icons/bs';

const Hero = ({ heading, description, buttonText, handleCLick }) => {
  return (
    <section className='hero'>
      <h1 className='heading'>{heading}</h1>
      <p className='description'>{description}</p>
      <button className='hero-btn' onClick={handleCLick}>{buttonText} <BsArrowRight /></button>
    </section>
  )
}

export default Hero
