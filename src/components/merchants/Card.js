import React from 'react';

const Card = ({ imgSource, imgAlt }) => {
  return (
    <div className='merchant-card'>
      <img src={imgSource} alt={imgAlt} />
    </div>
  )
}

export default Card;
