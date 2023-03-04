import React from 'react';
import './whyus.css';

// Image
import Whyus1 from './../../img/why-us/1.jpg';
import Whyus2 from './../../img/why-us/2.jpg';
import Whyus3 from './../../img/why-us/3.jpg';

const Whyus = () => {
    return (
        <div className="whyus">
            <h3 className='whyus-title'>Mengapa Kami?</h3>

            <div className="row-whyus">
                <div className="whyus-card">
                    <div className="thumb-whyus-image">
                        <img src={Whyus1} alt="" />
                    </div>
                    <div className="desc-card">
                        <h3>Tim Pengelola Yang Berpengalaman</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, dolorum obcaecati quas dolore labore iusto blanditiis praesentium dolorem. Ea, fuga excepturi exercitationem asperiores perspiciatis reiciendis quas molestiae dolorem impedit suscipit, eveniet ad nobis itaque doloremque?</p>
                    </div>
                </div>
                <div className="whyus-card col-2">
                    <div className="thumb-whyus-image">
                        <img src={Whyus2} alt="" />
                    </div>
                    <div className="desc-card">
                        <h3>Teknologi dengan Dedicated Data Center</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium quae quibusdam repellendus facilis incidunt! Unde praesentium aut inventore fugit accusantium!</p>
                    </div>
                </div>
                <div className="whyus-card">
                    <div className="thumb-whyus-image">
                        <img src={Whyus3} alt="" />
                    </div>
                    <div className="desc-card">
                        <h3>Ekspertis dari Tenaga IT yang reliabel</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quas distinctio blanditiis expedita doloribus consequatur nesciunt ut voluptatum quibusdam provident officiis, aut tempore quae non incidunt harum aspernatur ullam minima quam hic sint, pariatur voluptatibus sed sit. Dolore, ab deleniti!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Whyus;