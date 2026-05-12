import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import api from "../services/api";

import toast from "react-hot-toast";

const UpdateCourse = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const [course, setCourse] = useState({});

    useEffect(() => {

        api.get("/courses")
            .then(res => {

                const foundCourse = res.data.find(
                    course => course._id === id
                );

                setCourse(foundCourse);
            });

    }, [id]);

    const handleUpdate = (e) => {

        e.preventDefault();

        const form = e.target;

        const updatedCourse = {
            title: form.title.value,
            image: form.image.value,
            price: form.price.value,
            duration: form.duration.value,
            category: form.category.value,
            description: form.description.value,
        };

        api.put(`/courses/${id}`, updatedCourse)
            .then(() => {

                toast.success("Course Updated");

                navigate("/my-courses");
            });
    };

    return (
        <div className="max-w-2xl mx-auto shadow-lg p-8 rounded-xl">

            <h1 className="text-4xl font-bold mb-8 text-center">

                Update Course

            </h1>

            <form
                onSubmit={handleUpdate}
                className="space-y-5"
            >

                <input
                    type="text"
                    name="title"
                    defaultValue={course.title}
                    className="w-full border p-3 rounded"
                    required
                />

                <input
                    type="text"
                    name="image"
                    defaultValue={course.image}
                    className="w-full border p-3 rounded"
                    required
                />

                <input
                    type="number"
                    name="price"
                    defaultValue={course.price}
                    className="w-full border p-3 rounded"
                    required
                />

                <input
                    type="text"
                    name="duration"
                    defaultValue={course.duration}
                    className="w-full border p-3 rounded"
                    required
                />

                <input
                    type="text"
                    name="category"
                    defaultValue={course.category}
                    className="w-full border p-3 rounded"
                    required
                />

                <textarea
                    name="description"
                    defaultValue={course.description}
                    className="w-full border p-3 rounded"
                    rows="5"
                    required
                ></textarea>

                <button className="w-full bg-black text-white py-3 rounded">

                    Update Course

                </button>

            </form>

        </div>
    );
};

export default UpdateCourse;