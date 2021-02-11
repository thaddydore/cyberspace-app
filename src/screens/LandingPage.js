import React from 'react';

import BackgroundWrapper from '../components/backgroundWrapper/BackgroundWrapper';
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import Merchants from '../components/merchants/Merchants';
import HeroImage from '../components/heroImage/HeroImage';
import Download from '../components/download/Download';

const LandingPage = () => {
  return (
    <BackgroundWrapper>
      <Header />
      <main className='wrapper-main'>
        <Hero heading='Make payment - Whenever, wherever, with Cyberpay'
          description='Don’t get stranded,Discover Various payment option on our platform.'
          buttonText='Learn More'
        />

        <Merchants />

        <Hero heading='Make payment - Whenever, wherever, with Cyberpay'
          description='Don’t get stranded,Discover Various payment option on our platform.'
          buttonText='Learn More'
        />

        <HeroImage />

        <Download />
      </main>
    </BackgroundWrapper>
  )
}

export default LandingPage;
