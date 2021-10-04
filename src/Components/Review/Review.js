import React, { useEffect, useState } from 'react';
// react-slick package
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Review.css';

const Review = () => {
    // setting up slick carousel
    const slickSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            }
        ]
    };

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('./review.JSON').then(res => res.json()).then(data => setReviews(data));
    }, []);

    return (
        <div className="container py-5 my-5">
            <div className='bg-review p-3 rounded'>
                <h2>See what people are saying</h2>
                <hr />
                <p className="fs-5">Our users matter to us. <br />    We are doing our best to give you an unmatched learning experience,<br /> And it feels amazing when our users talk about how they're benefitted.
                </p>
            </div>

            {/* slider carousel */}
            <Slider {...slickSettings}>
                {
                    reviews.map(review =>
                        <div key={review.id} className="d-flex flex-column align-items-center py-5">
                            <img className="user-img" src={review.headshot} alt="" />
                            <h3 className="pt-3">{review.name}</h3>
                            <div className="d-flex rounded overflow-hidden">
                                <span className="d-block bg-profession px-4 py-1">{review.profession}</span><span className="d-block bg-country px-4 py-1">{review.country}</span>
                            </div>
                            <p className="p-4">{review.review}</p>
                        </div>
                    )
                }
            </Slider>
        </div>
    );
};

export default Review;