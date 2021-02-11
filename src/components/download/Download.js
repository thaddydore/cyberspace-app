import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

import GooplayStore from '../../assets/googlePlay.png';
import AppleStore from '../../assets/appleStore.png'
import Iphone from '../../assets/iphone.png';

const Download = () => {
  return (
    <section className='download p-3 pl-md-4'>
      <div className='download-article'>
        <h2 className='heading'>Download Our Mobile App</h2>
        <p className='description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Condimentum diam orci pretium a pharetra, feugiat cursus.
          Dictumst risus, sem egestas odio cras
      </p>

        <Link to='#' className='get-started'>Get started <BsArrowRight /> </Link>

        <div>
          <Link className='m-2 d-inline-block ml-0'>
            <img src={GooplayStore} alt='googleplay' />
          </Link>

          <Link className='m-2 d-inline-block ml-0'>
            <img src={AppleStore} alt='googleplay' />
          </Link>
        </div>
      </div>

      <div className='iphone-container d-none d-md-block'>
        <img src={Iphone} alt='iphone' />
      </div>
    </section>
  )
}

export default Download;
