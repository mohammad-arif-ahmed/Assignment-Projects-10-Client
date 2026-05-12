import { useEffect, useState } from "react";

import api from "../services/api";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const Home = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {

        document.title = "LearnHub";

        api.get("/featured-courses")
            .then(res => {

                setCourses(res.data);
            });

    }, []);

    return (

        <div className="bg-[#020617] text-white min-h-screen">

            {/* hero section */}

            <div className="max-w-7xl mx-auto px-6 py-20">

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="grid md:grid-cols-2 gap-10 items-center"
                >

                    <div>

                        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">

                            Learn New Skills
                            <span className="text-cyan-400">

                                {" "}Online

                            </span>

                        </h1>

                        <p className="mt-6 text-lg text-gray-300 leading-8">

                            Explore high quality online courses and improve your future career with professional instructors.

                        </p>

                        <div className="mt-8 flex gap-5">

                            <Link
                                to="/courses"
                                className="bg-cyan-400 hover:bg-cyan-300 text-black px-8 py-4 rounded-xl font-bold duration-300"
                            >

                                Explore Courses

                            </Link>

                            <Link
                                to="/register"
                                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-bold hover:bg-cyan-400 hover:text-black duration-300"
                            >

                                Join Now

                            </Link>

                        </div>

                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                    >

                        <img
                            src="https://i.ibb.co/Xz0Q6Dq/online-learning.png"
                            alt=""
                            className="rounded-3xl shadow-2xl"
                        />

                    </motion.div>

                </motion.div>

            </div>

            {/* featured courses */}

            <div className="max-w-7xl mx-auto px-6 py-16">

                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-4xl md:text-5xl font-bold text-center mb-14"
                >

                    Popular Courses

                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">

                    {
                        courses.map(course => (

                            <motion.div
                                key={course._id}
                                whileHover={{ y: -10 }}
                                className="bg-[#0f172a] border border-gray-800 rounded-3xl overflow-hidden shadow-2xl"
                            >

                                <img
                                    src={course.image}
                                    alt=""
                                    className="h-56 w-full object-cover"
                                />

                                <div className="p-6">

                                    <h3 className="text-2xl font-bold">

                                        {course.title}

                                    </h3>

                                    <p className="mt-3 text-gray-400">

                                        {course.category}

                                    </p>

                                    <p className="mt-2 text-cyan-400 text-xl font-bold">

                                        ${course.price}

                                    </p>

                                    <Link
                                        to={`/course-details/${course._id}`}
                                        className="inline-block mt-5 bg-cyan-400 hover:bg-cyan-300 text-black px-6 py-3 rounded-xl font-semibold duration-300"
                                    >

                                        View Details

                                    </Link>

                                </div>

                            </motion.div>
                        ))
                    }

                </div>

            </div>

            {/* why choose us */}

            <div className="max-w-7xl mx-auto px-6 py-16">

                <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">

                    Why Choose Us

                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-[#0f172a] border border-gray-800 p-8 rounded-3xl"
                    >

                        <h3 className="text-3xl font-bold mb-4">

                            Expert Mentors

                        </h3>

                        <p className="text-gray-400 leading-8">

                            Learn from experienced instructors and industry professionals.

                        </p>

                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-[#0f172a] border border-gray-800 p-8 rounded-3xl"
                    >

                        <h3 className="text-3xl font-bold mb-4">

                            Flexible Learning

                        </h3>

                        <p className="text-gray-400 leading-8">

                            Study anytime anywhere with complete flexibility.

                        </p>

                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-[#0f172a] border border-gray-800 p-8 rounded-3xl"
                    >

                        <h3 className="text-3xl font-bold mb-4">

                            Affordable Courses

                        </h3>

                        <p className="text-gray-400 leading-8">

                            Get premium quality education at affordable pricing.

                        </p>

                    </motion.div>

                </div>

            </div>

            {/* instructors */}

            <div className="max-w-7xl mx-auto px-6 py-16">

                <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">

                    Top Instructors

                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    {
                        [
                            {
                                name: "John Smith",
                                image: "https://i.ibb.co/jr8fB3W/man1.jpg"
                            },
                            {
                                name: "Sarah Johnson",
                                image: "https://i.ibb.co/Tc5k3M2/woman.jpg"
                            },
                            {
                                name: "David Miller",
                                image: "https://i.ibb.co/7v7g7YH/man2.jpg"
                            }
                        ].map((teacher, index) => (

                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="bg-[#0f172a] border border-gray-800 p-8 rounded-3xl text-center"
                            >

                                <img
                                    src={teacher.image}
                                    alt=""
                                    className="w-40 h-40 rounded-full object-cover mx-auto border-4 border-cyan-400"
                                />

                                <h3 className="text-3xl font-bold mt-6">

                                    {teacher.name}

                                </h3>

                            </motion.div>
                        ))
                    }

                </div>

            </div>

        </div>
    );
};

export default Home;