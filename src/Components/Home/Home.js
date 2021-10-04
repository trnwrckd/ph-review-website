import React from 'react';
import useCourses from '../../hooks/useCourses';
import CourseCard from '../CourseCard/CourseCard';
import './Home.css';
import '../../common.css';

const Home = () => {
    const [courses] = useCourses();
    const reducedCourses = courses.slice(0, 4);

    return (
        <div className="container pb-5 mb-5 mt-4 ">
            <div className="bg-instructor p-3">
                <h2 >Become an Instructor Today!</h2>
                <p className="pt-3 fs-5 w-50 mx-auto">Are you skilled and knowledgeable? We are providing you with an opportunity to spread the knowledge you have.</p>
                <p className="py-2 fs-6"> Become a part of our teaching faculty and earn from home!</p>
                <button className="btn-generic"> Sign Up as an Instructor</button>
            </div>
            <div className="my-3">
                <h3 className="pb-3">Most Popular Courses</h3>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    {
                        reducedCourses.map(course => <CourseCard course={course}></CourseCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;