import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';
import './Services.css';

const Services = () => {
    const [courses] = useCourses();

    return (
        <div>
            <div>
                {
                    courses.map(course => <Course key={course.courseID} course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Services;