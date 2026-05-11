import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../providers/AuthProvider";

import api from "../services/api";

import toast from "react-hot-toast";

const MyCourses = () => {

    const { user } = useContext(AuthContext);

    const [courses, setCourses] = useState([]);

    useEffect(() => {

        if (user?.email) {

            api
                .get(`/my-courses?email=${user.email}`)
                .then(res => {

                    setCourses(res.data);
                });
        }

    }, [user]);

    // delete course
    const handleDelete = (id) => {

        const confirmDelete = confirm("Are you sure?");

        if (confirmDelete) {

            api.delete(`/courses/${id}`)
                .then(() => {

                    toast.success("Course Deleted");

                    const remaining = courses.filter(
                        course => course._id !== id
                    );

                    setCourses(remaining);
                });
        }
    };

    return (
        <div>

            <h1 className="text-4xl font-bold mb-8">

                My Added Courses

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

                            <div className="flex gap-3 mt-5">

                                <button
                                    className="bg-red-500 text-white px-4 py-2 rounded"
                                    onClick={() => handleDelete(course._id)}
                                >

                                    Delete

                                </button>

                                <button
                                    className="bg-black text-white px-4 py-2 rounded"
                                >

                                    Update

                                </button>

                            </div>

                        </div>
                    ))
                }

            </div>

        </div>
    );
};

export default MyCourses;