import React from 'react';

// Data
import dataCase from './data';

// React Slick
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Icon
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const SlickArrowLeft = ({ onClick }) => (
    <div className='arrow-icon prev-icon'>
        <IoIosArrowBack onClick={onClick} />
    </div>
);

const SlickArrowRight = ({ onClick }) => (
    <div className='arrow-icon next-icon'>
        <IoIosArrowForward onClick={onClick} />
    </div>
);

const CaseItems = () => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToScroll: 1,
        initialSlide: 0,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        slidesToShow: 3,
        swipeToSlide: true,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        },
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <Slider {...settings}>
                {dataCase.map(item => (
                    <div className='card-case' key={item.id}>
                        <h1>{item.title}</h1>
                        <div className='thumb-image'>
                            <img src={item.img} alt="image-silder-1" />
                        </div>

                        <div className='desc-card'>
                            <p>{item.periode}</p>
                            <p>{item.type}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </>
    )
}

export default CaseItems;