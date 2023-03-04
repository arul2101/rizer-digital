import React from 'react';
import './cases.css';

// Components
import CaseItems from './../caseitems/CaseItems';


const Cases = () => {
    return (
        <div className="cases">
            <div className="cases-heading">
                <h3>Studi Kasus</h3>
                <p>Beberapa contoh implementasi project-project yang kami lakukan</p>
            </div>

            <div className="row-cases">
                <CaseItems />
            </div>
        </div>
    )
}

export default Cases;