import React from 'react';
import './bffooter.css';

// React Router
import { NavLink } from 'react-router-dom';


const BfFooter = () => {
    return (
        <div className='bf-footer'>
            <h3>Akselerasikan Bisnis Anda bersama Kami</h3>

            <p>Kami telah dipercaya oleh klien-klien besar, menengah maupun yang sedang bertumbuh. Kini giliran Anda untuk bergabung, kami selalu senantiasa hadir untuk melayani Anda.</p>
            <NavLink to="/contact">Hubungi Kami</NavLink>
        </div>
    )
}

export default BfFooter;