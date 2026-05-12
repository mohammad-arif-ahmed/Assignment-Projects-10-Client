import { useContext, useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import api from "../services/api";

import toast from "react-hot-toast";

import { AuthContext } from "../providers/AuthProvider";

const CourseDetails = () => {

    const { id } = useParams();

    const { user } = useContext(AuthContext);

    const [course, setCourse] = useState({});

    useEffect(() => {

        api.get(`/courses/${id}`)
            .then(res => {

                setCourse(res.data);
            });

    }, [id]);

    // enroll
    const handleEnroll = () => {

        const enrolledData = {
            courseId: course._id,
            title: course.title,
            image: course.image,
            price: course.price,
            category: course.category,

            studentEmail: user?.email,
            studentName: user?.displayName,
        };

        api.post("/enroll", enrolledData)
            .then(() => {

                toast.success("Enrollment Successful");
            });
    };

    return (
        <div className="max-w-5xl mx-auto">

            <img
                src={course.image}
                alt=""
                className="w-full h-[450px] object-cover rounded-xl"
            />

            <div className="mt-8">

                <h1 className="text-5xl font-bold">

                    {course.title}

                </h1>

                <p className="mt-5 text-lg">

                    {course.description}

                </p>

                <div className="mt-5 space-y-2">

                    <p>
                        Category: {course.category}
                    </p>

                    <p>
                        Duration: {course.duration}
                    </p>

                    <p>
                        Price: ${course.price}
                    </p>

                </div>

                <button
                    onClick={handleEnroll}
                    className="bg-black text-white px-8 py-3 rounded mt-8"
                >

                    Enroll Now

                </button>

            </div>

        </div>
    );
};

export default CourseDetails;