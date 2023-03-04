import React from 'react';
import './about.css';

// Framer Motion
import {motion as m} from 'framer-motion';

// React Slick
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Image
import Image1 from './../../img/about/about-img1.jpg';
import Image2 from './../../img/about/about-img2.jpg';
import Image3 from './../../img/about/about-img3.jpg';
import Image4 from './../../img/about/about-img4.jpg';
import Image5 from './../../img/about/about-img5.jpg';
import Image6 from './../../img/about/about-img6.jpg';

const SlickArrowLeft = ({ style }) => (
  <div
    style={{ ...style, display: "none"}}
  />
);

const SlickArrowRight = ({ style }) => (
    <div
      style={{ ...style, display: "none"}}
    />
);

const About = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
      <m.div
        className='about'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 1, ease: "linear"}}
      >
        <div className='about-heading'>
          <h3>Profesional, Terpercaya dan Terintegrasi untuk implementasi program promosi berhadiah</h3>
          <p>Kegiatan program promosi berhadiah yang kami tawarkan adalah kegiatan berorientasi strategi push (mendorong ke grosir dan toko) & pull (membuat ketertarikan langsung ke konsumen) pada penjualan yang sangat penting bagi pertumbuhan perusahaan. Aktivitas ini memerlukan pemahaman dan pengalaman terhadap detail di setiap Langkah. RedBox dengan segudang pengalaman selalu memberikan solusi pendampingan, kemudahan dan kenyamanan integrasi di semua tahapan. Revolusi digital pun membawa kami untuk terus melakukan adaptasi, transformasi dan teknologi sesuai perkembangan jaman. Layanan-layanan yang berorientasi teknologi terus ditingkatkan guna memastikan semuanya berjalan lebih akurat, tepat sasaran, dan lebih responsif pada segala perubahan.</p>
        </div>
        <div className='row-about'>
          <Slider {...settings}>
            <div className='image-about'>
              <img src={Image1} />
            </div>
            <div className='image-about'>
              <img src={Image2} />
            </div>
            <div className='image-about'>
              <img src={Image3} />
            </div>
            <div className='image-about'>
              <img src={Image4} />
            </div>
            <div className='image-about image5'>
              <img src={Image5} />
            </div>
            <div className='image-about'>
              <img src={Image6} />
            </div>
          </Slider>
        </div>
      </m.div>
  )
}

export default About;