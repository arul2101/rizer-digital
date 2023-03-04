import React from 'react';
import './contact.css';

// Framer Motion
import { motion as m } from 'framer-motion';

const Contact = () => {
  return (
    <m.div
      className='contact'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "linear" }}
    >
      <m.div
        className='contact-row1'
        initial={{ y: "-25%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "linear" }}
      >
        <h3>Hubungi Kami</h3>
        <p><span>Phone : </span>+62-21-7251855</p>
        <p><span>Address : </span>Jl. H. Jeni II No. 35, Kebayoran Baru,Jakarta Utara 99210</p>
        <p><span>Email : </span>info@rizerdigital.id</p>
        <p><span>Open Hours : </span>Senin - Jum'at : 08:30 - 17:00</p>
      </m.div>

      <m.div
        className='contact-row-center'
        initial={{ x: "25%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "linear" }}
      >
        <div className='row-div'></div>
        <p>Atau tinggalkan pesan!</p>
        <div className='row-div'></div>
      </m.div>

      <m.div
        className='contact-row2'
        initial={{ y: "25%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "linear" }}
      >
        <form>
          <input type="text" placeholder='Name*' required />
          <input type="email" placeholder='Email*' required />
          <textarea name="message" id="" placeholder='Message' className='message' required></textarea>
          <button type='submit'>Submit</button>
        </form>
      </m.div>
    </m.div>
  )
}

export default Contact;