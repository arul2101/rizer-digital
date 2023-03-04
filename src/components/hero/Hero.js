import React from 'react'
import './hero.css'

// Framer Motion
import {motion as m} from 'framer-motion';

// Image
import ImageHero from './../../img/hero/image-hero.png';

// Router
import { NavLink } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="hero">
            <m.div 
                className="hero-image"
                initial={{x: "-25%", opacity: 0}}
                animate={{x: "0%", opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 1, ease: "easeOut"}}
            >
                <img src={ImageHero} alt="" />
            </m.div>

            <m.div
                className="hero-desc"
                initial={{x: "25%", opacity: 0}}
                animate={{x: "0%", opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 1, ease: "easeOut"}}
            >
                <h3>Lebih dari 15 tahun dengan Pelayanan Terbaik. Promosi Berhadiah melalui Sarana Digital yang Terintegrasi</h3>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores consequatur eum laboriosam velit blanditiis? Labore harum quos ea deleniti voluptatum quo sequi aut quaerat ex ullam, iste veniam perferendis reiciendis ad! Velit incidunt maiores expedita culpa cum voluptas possimus voluptatum laboriosam voluptate totam. Minus beatae, unde odio laboriosam distinctio soluta.</p>

                <NavLink to="/contact">Hubungi Kami!</NavLink>
            </m.div>
        </div>
    )
}

export default Hero;