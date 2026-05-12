import { useEffect, useState } from "react";

import api from "../services/api";

import { Link } from "react-router-dom";

const Home = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {

        api.get("/featured-courses")
            .then(res => {

                setCourses(res.data);
            });

    }, []);

    return (
        <div>

            {/* hero section */}

            <div
                className="hero min-h-[500px] rounded-2xl"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co/zrN5G4H/online-learning.jpg)"
                }}
            >

                <div className="hero-overlay bg-black bg-opacity-60 rounded-2xl"></div>

                <div className="hero-content text-center text-white">

                    <div className="max-w-2xl">

                        <h1 className="text-5xl md:text-7xl font-bold">

                            Learn Without Limits

                        </h1>

                        <p className="py-6 text-lg">

                            Explore premium online courses and improve your skills anytime anywhere.

                        </p>

                        <Link
                            to="/courses"
                            className="bg-white text-black px-8 py-3 rounded-lg font-semibold"
                        >

                            Explore Courses

                        </Link>

                    </div>

                </div>

            </div>

            {/* featured courses */}

            <div className="mt-20">

                <h2 className="text-4xl font-bold text-center mb-10">

                    Popular Courses

                </h2>

                <div className="grid md:grid-cols-3 gap-6">

                    {
                        courses.map(course => (

                            <div
                                key={course._id}
                                data-aos="fade-up"
                                className="border p-5 rounded-xl shadow-lg"
                            >

                                <img
                                    src={course.image}
                                    alt=""
                                    className="h-52 w-full object-cover rounded-xl"
                                />

                                <h3 className="text-2xl font-bold mt-4">

                                    {course.title}

                                </h3>

                                <p className="mt-2">

                                    {course.category}

                                </p>

                                <p className="mt-2">

                                    ${course.price}

                                </p>

                            </div>
                        ))
                    }

                </div>

            </div>

            {/* why choose us */}

            <div className="mt-24">

                <h2 className="text-4xl font-bold text-center mb-10">

                    Why Choose Us

                </h2>

                <div className="grid md:grid-cols-3 gap-6">

                    <div
                        data-aos="zoom-in"
                        className="border p-8 rounded-xl shadow"
                    >

                        <h3 className="text-2xl font-bold mb-4">

                            Expert Instructors

                        </h3>

                        <p>

                            Learn from highly experienced industry experts.

                        </p>

                    </div>

                    <div
                        data-aos="zoom-in"
                        className="border p-8 rounded-xl shadow"
                    >

                        <h3 className="text-2xl font-bold mb-4">

                            Lifetime Access

                        </h3>

                        <p>

                            Access your courses anytime from anywhere.

                        </p>

                    </div>

                    <div
                        data-aos="zoom-in"
                        className="border p-8 rounded-xl shadow"
                    >

                        <h3 className="text-2xl font-bold mb-4">

                            Affordable Price

                        </h3>

                        <p>

                            Premium quality courses at affordable pricing.

                        </p>

                    </div>

                </div>

            </div>

            {/* instructors */}

            <div className="mt-24 mb-20">

                <h2 className="text-4xl font-bold text-center mb-10">

                    Top Instructors

                </h2>

                <div className="grid md:grid-cols-3 gap-6">

                    <div
                        data-aos="flip-left"
                        className="border p-5 rounded-xl shadow text-center"
                    >

                        <img
                            src="https://i.ibb.co/jr8fB3W/man1.jpg"
                            alt=""
                            className="w-40 h-40 rounded-full mx-auto object-cover"
                        />

                        <h3 className="text-2xl font-bold mt-4">

                            John Smith

                        </h3>

                    </div>

                    <div
                        data-aos="flip-left"
                        className="border p-5 rounded-xl shadow text-center"
                    >

                        <img
                            src="https://i.ibb.co/Tc5k3M2/woman.jpg"
                            alt=""
                            className="w-40 h-40 rounded-full mx-auto object-cover"
                        />

                        <h3 className="text-2xl font-bold mt-4">

                            Sarah Johnson

                        </h3>

                    </div>

                    <div
                        data-aos="flip-left"
                        className="border p-5 rounded-xl shadow text-center"
                    >

                        <img
                            src="https://i.ibb.co/7v7g7YH/man2.jpg"
                            alt=""
                            className="w-40 h-40 rounded-full mx-auto object-cover"
                        />

                        <h3 className="text-2xl font-bold mt-4">

                            David Miller

                        </h3>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Home;