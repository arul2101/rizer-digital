import React from 'react';
import './notfound.css';

// Icon
import { TfiFaceSad } from "react-icons/tfi";


const NotFound = () => {
    return (
        <div className='notfound'>
            <div className='not-found-emoji'>
                <TfiFaceSad />
            </div>
            <h3 className='not-found-desc'>404 Page Not Found </h3>
        </div>
    )
}

export default NotFound;