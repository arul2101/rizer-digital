import React, { useEffect, useState } from 'react';
import './innerpartnership.css';

// Framer Motion
import { motion as m } from 'framer-motion';

// React Router
import { NavLink, useParams } from 'react-router-dom';

// Data
import dataPartnership from '../partnership/dataPartnership';

// Pages
import NotFound from './../notfound/NotFound';


const InnerPartnership = () => {
    const { id } = useParams();

    const [data, setData] = useState(null);

    useEffect(() => {
        let data = dataPartnership.find((data) => data.id === parseInt(id));

        if (data) {
            setData(data);
        }
    }, []);

    return (
        <m.div
            className="partnership"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "linear" }}
        >
            {data ? (
                <>
                    <NavLink to="/rizer-digital/partnership" className='back-to'>&#8592; Back</NavLink>
                    <div className="thumb-image-partnership">
                        <img src={data.img} alt="image-partnership" />
                    </div>

                    <h3 className='partnership-title'>{data.title}</h3>
                    <p className='partnership-periode'><span>{data.type}</span> | {data.period}</p>

                    <div className="partnership-description">
                        <p>{data.desc[0]}</p>
                        <p>{data.desc[1]}</p>
                        <p>{data.desc[2]}</p>
                        <ol>
                            <li>{data.desc[3][0]}</li>
                            <li>{data.desc[3][1]}</li>
                            <li>{data.desc[3][2]}</li>
                        </ol>
                        <p>{data.desc[4]}</p>
                        <p>{data.desc[5]}</p>
                        <ul>
                            <li>{data.desc[6][0]}</li>
                            <li>{data.desc[6][1]}</li>
                            <li>{data.desc[6][2]}</li>
                        </ul>
                        <p><span>{data.desc[7]}</span></p>
                    </div>
                </>
            ) : (
                <NotFound />
            )}
        </m.div>
    )
}

export default InnerPartnership;