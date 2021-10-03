import React from 'react';
import Rating from 'react-rating';
import './Course.css';

const Course = (props) => {
    const { courseTitle, courseInstructor, image, rating, price, enrolled, courseDesc } = props.course;
    return (
        <div className="border border-dark d-flex">
            <div><img height="300" width="450" src={image} alt="" /></div>
            <div className="px-5">
                <h3>{courseTitle}</h3>
                <h5>{courseInstructor}</h5>
                <h5>${price}</h5>
                <p> Description : {courseDesc}</p>
                <p>
                    enrolled : {enrolled}
                </p>
                <Rating
                    initialRating={rating}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly>
                </Rating>
            </div>
        </div >
    );
};

export default Course;