import React from 'react';
import './footer.css';

// Icon
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import { FiMail } from "react-icons/fi";



const Footer = () => {
    return (
        <footer>
            <div className="row-footer">
                <div className='footer-left-side'>
                    <h2>Contact Us</h2>
                    <p><span><FiPhone /> Phone: </span>+62-21-7251855</p>
                    <p><span><FiHome /> Address: </span>Jl. H. Jeni II No. 35, Kebayoran Baru,Jakarta Utara 99210</p>
                    <p><span><FiMail /> Email: </span>info@rizerdigital.id</p>
                </div>
                <div className='footer-right-side'>
                    <div>
                        <a href="/rizer-digital"><FiFacebook /></a>
                        <a href="/rizer-digital"><FiInstagram /></a>
                    </div>
                </div>
            </div>
            <p className='copyright'>Copyright © 2023 RizerDigital - All Rights Reserved</p>
        </footer>
    )
}

export default Footer;