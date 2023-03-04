import React from 'react';
import './partnership.css';

// Framer Motion
import { motion as m } from 'framer-motion';

// Data
import dataPartnership from './dataPartnership';

// React Router
import { NavLink } from 'react-router-dom';

const Partnership = () => {
    return (
        <m.div
            className='partnership'
            initial={{ y: "25%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "linear" }}
        >
            <h3 className='title-partnership'>Partner Kami</h3>
            <p className="desc-partnership">Berikut merupakan beberapa Partner Promosi Digital Penjualan Konsumen brand kami:</p>

            <div className='row-partnership'>
                {dataPartnership.map((item, index) => (
                    <div className='card-partnership' key={index}>
                        <div className='thumb-image-partnership'>
                            <img src={item.img} alt="image-partnership" />
                        </div>
                        <div className='desc-card-partnership'>
                            <h3>{item.title}</h3>
                            <p><span>{item.type}</span> | {item.period}</p>
                            <NavLink to={`${item.id}`}>Pelajari Lebih Lanjut</NavLink>
                        </div>
                    </div>
                ))}
            </div>
        </m.div>
    )
}

export default Partnership;