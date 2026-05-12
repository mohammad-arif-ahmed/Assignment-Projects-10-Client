import { useEffect, useState } from "react";

import api from "../services/api";
import { Link } from "react-router-dom";

const Courses = () => {

    const [courses, setCourses] = useState([]);
    const [search, setSearch] = useState("");

    const [category, setCategory] = useState("");

    useEffect(() => {

        api
            .get(`/courses?search=${search}&category=${category}`)
            .then(res => {

                setCourses(res.data);
            });

    }, [search, category]);

    return (
        <div>

            <h1 className="text-4xl font-bold mb-8">

                All Courses

            </h1>
            <div className="flex flex-col md:flex-row gap-4 mb-8">

                <input
                    type="text"
                    placeholder="Search course..."
                    className="border p-3 rounded w-full"
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    className="border p-3 rounded"
                    onChange={(e) => setCategory(e.target.value)}
                >

                    <option value="">

                        All Categories

                    </option>

                    <option value="Web Development">

                        Web Development

                    </option>

                    <option value="Programming">

                        Programming

                    </option>

                    <option value="Design">

                        Design

                    </option>

                    <option value="Marketing">

                        Marketing

                    </option>

                </select>

            </div>

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