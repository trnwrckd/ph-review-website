import React from 'react';
import Rating from 'react-rating';

import './CourseCard.css';
import '../../common.css';

const CourseCard = (props) => {
    const { courseTitle, image, rating, courseInstructor, price } = props.course;

    return (
        <div className="col">
            <div className="d-flex flex-column justify-content-between pb-3 custom-bg  h-100 rounded">
                <div>
                    <img className="course-card-image text-align rounded my-2 img-fluid" src={image} alt="" />
                </div>

                <span className="fs-4 pt-2">{courseTitle}</span>

                <div>
                    <div className="d-flex justify-content-evenly my-2">
                        <span className="fs-6">{courseInstructor}</span>
                        <Rating
                            initialRating={rating}
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                            readonly>
                        </Rating>
                    </div>
                    <div className="d-flex justify-content-evenly">
                        <button className="btn-generic btn-red">Enroll Now</button>
                        <span className="d-block fs-4">${price}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;