import React from 'react';

const BackgroundWrapper = ({ children }) => {
  return (
    <div className='bg-landing-page'>
      {children}
    </div>
  );
};

export default BackgroundWrapper;
