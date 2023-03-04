import React from 'react';

// Components
import Hero from '../../components/hero/Hero';
import Service from '../../components/service/Service';
import Reviews from '../../components/reviews/Reviews';
import Cases from '../../components/cases/Cases';
import Whyus from '../../components/whyus/Whyus';
import BfFooter from '../../components/bffooter/BfFooter';

const Home = () => {
  return (
    <>
        <Hero/>
        <Service/>
        <Reviews/>
        <Cases/>
        <Whyus/>
        <BfFooter/>
    </>
  )
}

export default Home;