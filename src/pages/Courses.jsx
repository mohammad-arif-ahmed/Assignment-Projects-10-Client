import { useEffect, useState } from "react";

import api from "../services/api";
import { Link } from "react-router-dom";

const Courses = () => {

    const [courses, setCourses] = useState([]);
    const [search, setSearch] = useState("");

    const [category, setCategory] = useState("");

    useEffect(() => {
        document.title = "Courses | LearnHub";

        api
            .get(`/courses?search=${search}&category=${category}`)
            .then(res => {

                setCourses(res.data);
            });

    }, [search, category]);

    return (
        <div>

            <h1 className="text-4xl font-bold mb-8 text-white">
                All Courses

            </h1>
            <div className="flex flex-col md:flex-row gap-4 mb-8">

                <input
                    type="text"
                    placeholder="Search course..."
                    className="w-full bg-[#1e293b] border border-gray-700 p-3 rounded text-white focus:outline-none focus:border-cyan-400 placeholder-gray-500" onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    className="bg-[#1e293b] border border-gray-700 p-3 rounded text-white focus:outline-none focus:border-cyan-400 cursor-pointer"
                    onChange={(e) => setCategory(e.target.value)}
                >

                    <option value="">

                        All Categories

                    </option>

                    <option value="Web Development">

                        Web Development

                    </option>

                    <option value="Network">

                        Network

                    </option>

                    <option value="Service">

                        Service

                    </option>

                    <option value="English">

                        English

                    </option>

                </select>

            </div>

            <div className="grid md:grid-cols-3 gap-6">

                {
                    courses.map(course => (

                        <div
                            key={course._id}
                            className="bg-[#0f172a] border border-gray-800 p-5 rounded-xl shadow-xl hover:border-cyan-400/50 transition-all"                        >

                            <img
                                src={course.image}
                                alt=""
                                className="h-48 w-full object-cover rounded-lg"
                            />

                            <h2 className="text-2xl font-bold mt-4 text-white">
                                {course.title}

                            </h2>

                            <p className="mt-2 text-gray-400">
                                Category: {course.category}

                            </p>

                            <p>

                                Price: ${course.price}

                            </p>
                            <Link
                                to={`/course-details/${course._id}`}
                                className="inline-block bg-cyan-400 hover:bg-cyan-300 text-black font-bold px-5 py-2 rounded mt-5 transition-colors"                            >

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