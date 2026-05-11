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
        <div className="max-w-md mx-auto shadow-lg p-8 rounded-xl">

            <h2 className="text-3xl font-bold mb-5 text-center">
                Register
            </h2>

            <form onSubmit={handleRegister} className="space-y-4">

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full border p-3 rounded"
                    required
                />

                <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
                    className="w-full border p-3 rounded"
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full border p-3 rounded"
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full border p-3 rounded"
                    required
                />

                {
                    error && (
                        <p className="text-red-500">
                            {error}
                        </p>
                    )
                }

                <button className="w-full bg-black text-white py-3 rounded">

                    Register

                </button>

            </form>

            <p className="mt-5 text-center">

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