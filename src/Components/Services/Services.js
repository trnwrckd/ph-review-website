import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Services.css';

const Services = () => {
    const [courses, setCourses] = useState([]);
    const loadData = () => {
        fetch('./data.JSON').then(res => res.json()).then(data => setCourses(data));
    }
    useEffect(loadData, []);

    return (
        <div>
            <h1>Services</h1>
            <div>
                {
                    courses.map(course => <Course key={course.courseID} course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Services;