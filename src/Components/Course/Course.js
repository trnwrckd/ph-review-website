import React from 'react';
import Rating from 'react-rating';

import '../../common.css';

const Course = (props) => {
    const { courseTitle, courseInstructor, image, rating, price, enrolled, courseDesc } = props.course;
    return (
        <div className="container">
            <div className="d-flex flex-column flex-lg-row my-4 rounded overflow-hidden custom-bg">
                {/* course image */}
                <div className="pt-2 pt-lg-0">
                    <img height="300" width="450" src={image} alt="" />
                </div>

                {/* course details*/}
                <div className="px-3 px-md-5 py-3 text-start">

                    {/* title and rating */}
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                        <h3 className="pb-2">{courseTitle}</h3>
                        <div className="text-center px-2 pb-2 pb-md-2">
                            <span className="pe-1">({rating})</span>
                            <Rating
                                initialRating={rating}
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                                readonly>
                            </Rating>
                        </div>
                    </div>

                    <h5><small>By</small> {courseInstructor}</h5>

                    <p> <b>Description </b>: {courseDesc}</p>
                    <hr />

                    {/* price and enrollments */}
                    <div className="d-flex justify-content-between">
                        <h5 className="fs-4 me-3 me-md-0">${price}</h5>
                        <p>
                            <b>{enrolled}</b> Students already enrolled.
                        </p>
                    </div>

                    <div className="d-flex justify-content-between">
                        <button className="btn-generic btn-red me-3 me-md-0"> Enroll Now</button>
                        <button className="btn-generic btn-blue"> Apply for Financial Aid</button>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Course;