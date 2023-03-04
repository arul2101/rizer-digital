import React from 'react';
import './team.css';

// Framer Motion
import {motion as m} from 'framer-motion';

// Image
import Image from './../../img/our-team/our-team-image.png';

const Team = () => {
  return (
    <m.div
      className='team'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 1, ease: "linear"}}
    >
      <h3>Teruji & Terpercaya, Senantiasa Hadir dengan Layanan Terbaik untuk Anda</h3>
      <div className='team-hero-image'>
        <img src={Image} alt='image-our-team' />
      </div>
    </m.div>
  )
}

export default Team;