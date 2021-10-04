import React from 'react';
import Rating from 'react-rating';
import './Course.css';
import '../../common.css';

const Course = (props) => {
    const { courseTitle, courseInstructor, image, rating, price, enrolled, courseDesc } = props.course;
    return (
        <div className="container">
            <div className="d-flex flex-column flex-lg-row my-4 rounded overflow-hidden custom-bg">
                <div className="pt-2 pt-lg-0"><img height="300" width="450" src={image} alt="" /></div>
                <div className="px-3 px-md-5 py-3 text-start">
                    <div className="d-flex justify-content-between align-items-center">
                        <h3 className="pb-2">{courseTitle}</h3>
                        <div>
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
                    <div className="d-flex justify-content-between">
                        <h5>${price}</h5>
                        <p>
                            <b>{enrolled}</b> Students already enrolled.
                        </p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <button className="btn-generic btn-red"> Enroll Now</button>
                        <button className="btn-generic btn-blue"> Apply for Financial Aid</button>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Course;