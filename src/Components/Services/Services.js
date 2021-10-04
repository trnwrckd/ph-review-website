import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';
import './Services.css';

const Services = () => {
    const [courses] = useCourses();

    return (
        <div>
            <div>
                <h2 className="mt-4">All Courses</h2>
                {
                    courses.map(course => <Course key={course.courseID} course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Services;