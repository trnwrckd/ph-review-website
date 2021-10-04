import { useEffect } from "react";
import { useState } from "react";

const useCourses = () => {
    const [courses, setCourses] = useState([]);

    const loadData = () => {
        fetch('./courses.JSON').then(res => res.json()).then(data => setCourses(data));
    };

    useEffect(loadData, []);

    return [courses, setCourses];
}

export default useCourses;