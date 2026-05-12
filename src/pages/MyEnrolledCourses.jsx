import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../providers/AuthProvider";

import api from "../services/api";

const MyEnrolledCourses = () => {

    const { user } = useContext(AuthContext);

    const [courses, setCourses] = useState([]);

    useEffect(() => {

        if (user?.email) {

            api
                .get(`/my-enrolled-courses?email=${user.email}`)
                .then(res => {

                    setCourses(res.data);
                });
        }

    }, [user]);

    return (
        <div>

            <h1 className="text-4xl font-bold mb-8">

                My Enrolled Courses

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

                        </div>
                    ))
                }

            </div>

        </div>
    );
};

export default MyEnrolledCourses;