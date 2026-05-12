import { useContext, useState } from "react";

import { AuthContext } from "../providers/AuthProvider";

import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

const Register = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const navigate = useNavigate();

    const [error, setError] = useState("");

    const handleRegister = (e) => {

        e.preventDefault();

        setError("");

        const form = e.target;

        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // password validation
        if (!/[A-Z]/.test(password)) {
            return setError("Must have an uppercase letter");
        }

        if (!/[a-z]/.test(password)) {
            return setError("Must have a lowercase letter");
        }

        if (password.length < 6) {
            return setError("Password must be at least 6 characters");
        }

        createUser(email, password)
            .then(() => {

                updateUserProfile({
                    displayName: name,
                    photoURL: photo,
                });

                toast.success("Registration Successful");

                navigate("/");
            })
            .catch(error => {

                toast.error(error.message);
            });
    };

    return (
        <div className="max-w-md mx-auto shadow-2xl p-8 rounded-xl bg-[#0f172a] border border-gray-800 my-10">
            <h2 className="text-3xl font-bold mb-5 text-center text-white">                Register
            </h2>

            <form onSubmit={handleRegister} className="space-y-4">

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full bg-[#1e293b] border border-gray-700 p-3 rounded text-white focus:outline-none focus:border-cyan-400 placeholder-gray-500" required
                />

                <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
                    className="w-full bg-[#1e293b] border border-gray-700 p-3 rounded text-white focus:outline-none focus:border-cyan-400 placeholder-gray-500" required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full bg-[#1e293b] border border-gray-700 p-3 rounded text-white focus:outline-none focus:border-cyan-400 placeholder-gray-500" required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full bg-[#1e293b] border border-gray-700 p-3 rounded text-white focus:outline-none focus:border-cyan-400 placeholder-gray-500" required
                />

                {
                    error && (
                        <p className="text-red-500">
                            {error}
                        </p>
                    )
                }

                <button className="w-full bg-cyan-400 hover:bg-cyan-300 text-black py-3 rounded font-bold duration-300 shadow-lg shadow-cyan-400/20">
                    Register

                </button>

            </form>

            <p className="mt-5 text-center text-gray-400">
                Already have an account?

                <Link
                    to="/login"
                    className="text-blue-500 ml-2"
                >
                    Login
                </Link>

            </p>

        </div>
    );
};

export default Register;