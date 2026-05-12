import { useEffect, useState } from "react";

import api from "../services/api";
import { Link } from "react-router-dom";

const Courses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {

        api.get("/courses")
            .then(res => {

                setCourses(res.data);
            });

    }, []);

    return (
        <div>

            <h1 className="text-4xl font-bold mb-8">

                All Courses

            </h1>

            <div className="grid md:grid-cols-3 gap-6">

                {
                    courses.map(course => (

                        <div
                            key={course._id}
                            className="border p-5 rounded-xl shadow"
                        >

                            <img
                                src={course.image}
                                alt=""
                                className="h-48 w-full object-cover rounded-lg"
                            />

                            <h2 className="text-2xl font-bold mt-4">

                                {course.title}

                            </h2>

                            <p className="mt-2">

                                Category: {course.category}

                            </p>

                            <p>

                                Price: ${course.price}

                            </p>
                            <Link
                                to={`/course-details/${course._id}`}
                                className="inline-block bg-black text-white px-5 py-2 rounded mt-5"
                            >

                                View Details

                            </Link>

                        </div>
                    ))
                }

            </div>

        </div>
    );
};

export default Courses;