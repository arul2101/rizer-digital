import React from 'react';
import './service.css';

// Icon
import { ImQrcode } from "react-icons/im";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineLoyalty } from "react-icons/md";
import { ImLocation } from "react-icons/im";



const Service = () => {
    return (
        <div className="service">
            <h3 className='service-title'>Fokus Layanan</h3>
            <p className='service-desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quae corporis adipisci excepturi minus, nemo provident maxime cupiditate iusto vero eaque, delectus nisi reprehenderit rem tempora laudantium nihil voluptate exercitationem.</p>

            <div className="service-row">
                <div className="card-service">
                    <div className="icon-card">
                        <ImQrcode />
                    </div>
                    <h3>Raffle Management</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus explicabo, aut corrupti minus unde, ea voluptates laborum quos nihil in maiores amet inventore eius numquam!</p>

                    <a href="/rizer-digital">Pelajari Lebih Lanjut</a>
                </div>
                <div className="card-service">
                    <div className="icon-card">
                        <MdOutlineLoyalty />
                    </div>
                    <h3>Loyalty Program Management</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus explicabo, aut corrupti minus unde, ea voluptates laborum quos nihil in maiores amet inventore eius numquam!</p>

                    <a href="/rizer-digital">Pelajari Lebih Lanjut</a>
                </div>
                <div className="card-service">
                    <div className="icon-card">
                        <FiPhoneCall />
                    </div>
                    <h3>Dedicated Call Center</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus explicabo, aut corrupti minus unde, ea voluptates laborum quos nihil in maiores amet inventore eius numquam!</p>

                    <a href="/rizer-digital">Pelajari Lebih Lanjut</a>
                </div>
                <div className="card-service">
                    <div className="icon-card">
                        <ImLocation />
                    </div>
                    <h3>Prize Delivery Management</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus explicabo, aut corrupti minus unde, ea voluptates laborum quos nihil in maiores amet inventore eius numquam!</p>

                    <a href="/rizer-digital">Pelajari Lebih Lanjut</a>
                </div>
            </div>
        </div>
    )
}

export default Service;