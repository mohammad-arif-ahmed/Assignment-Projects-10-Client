import { useContext } from "react";

import { AuthContext } from "../providers/AuthProvider";

import api from "../services/api";

import toast from "react-hot-toast";

const AddCourse = () => {

    const { user } = useContext(AuthContext);

    const handleAddCourse = (e) => {

        e.preventDefault();

        const form = e.target;

        const newCourse = {
            title: form.title.value,
            image: form.image.value,
            price: form.price.value,
            duration: form.duration.value,
            category: form.category.value,
            description: form.description.value,
            isFeatured: form.isFeatured.checked,

            instructorName: user?.displayName,
            instructorEmail: user?.email,
            instructorPhoto: user?.photoURL,
        };

        api.post("/courses", newCourse)
            .then(() => {

                toast.success("Course Added Successfully");

                form.reset();
            })
            .catch(error => {

                toast.error(error.message);
            });
    };

    return (
        <div className="max-w-2xl mx-auto shadow-lg p-8 rounded-xl">

            <h1 className="text-4xl font-bold mb-8 text-center">

                Add Course

            </h1>

            <form
                onSubmit={handleAddCourse}
                className="space-y-5"
            >

                <input
                    type="text"
                    name="title"
                    placeholder="Course Title"
                    className="w-full border p-3 rounded"
                    required
                />

                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    className="w-full border p-3 rounded"
                    required
                />

                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    className="w-full border p-3 rounded"
                    required
                />

                <input
                    type="text"
                    name="duration"
                    placeholder="Duration"
                    className="w-full border p-3 rounded"
                    required
                />

                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    className="w-full border p-3 rounded"
                    required
                />

                <textarea
                    name="description"
                    placeholder="Description"
                    className="w-full border p-3 rounded"
                    rows="5"
                    required
                ></textarea>

                <label className="flex gap-3 items-center">

                    <input
                        type="checkbox"
                        name="isFeatured"
                    />

                    Featured Course

                </label>

                <button className="w-full bg-black text-white py-3 rounded">

                    Add Course

                </button>

            </form>

        </div>
    );
};

export default AddCourse;