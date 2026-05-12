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
        <div className="max-w-2xl mx-auto shadow-2xl p-8 rounded-xl bg-[#0f172a] border border-gray-800 my-10">
            <h1 className="text-4xl font-bold mb-8 text-center text-white">
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
                    className="w-full bg-[#1e293b] border border-gray-700 p-3 rounded text-white focus:outline-none focus:border-cyan-400 placeholder-gray-500" required
                />

                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    className="w-full bg-[#1e293b] border border-gray-700 p-3 rounded text-white focus:outline-none focus:border-cyan-400 placeholder-gray-500" required
                />

                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    className="w-full bg-[#1e293b] border border-gray-700 p-3 rounded text-white focus:outline-none focus:border-cyan-400 placeholder-gray-500" required
                />

                <input
                    type="text"
                    name="duration"
                    placeholder="Duration"
                    className="w-full bg-[#1e293b] border border-gray-700 p-3 rounded text-white focus:outline-none focus:border-cyan-400 placeholder-gray-500" required
                />

                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    className="w-full bg-[#1e293b] border border-gray-700 p-3 rounded text-white focus:outline-none focus:border-cyan-400 placeholder-gray-500" required
                />

                <textarea
                    name="description"
                    placeholder="Description"
                    className="w-full bg-[#1e293b] border border-gray-700 p-3 rounded text-white focus:outline-none focus:border-cyan-400 placeholder-gray-500" rows="5"
                    required
                ></textarea>

                <label className="flex gap-3 items-center text-gray-300">
                    <input
                        type="checkbox"
                        name="isFeatured"
                    />

                    Featured Course

                </label>

                <button className="w-full bg-cyan-400 hover:bg-cyan-300 text-black py-3 rounded font-bold duration-300 shadow-lg shadow-cyan-400/20">
                    Add Course

                </button>

            </form>

        </div>
    );
};

export default AddCourse;