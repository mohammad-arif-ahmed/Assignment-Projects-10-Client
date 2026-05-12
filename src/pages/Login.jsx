import { useContext } from "react";

import { AuthContext } from "../providers/AuthProvider";

import {
    Link,
    useLocation,
    useNavigate
} from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {

    const {
        loginUser,
        googleLogin
    } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    // email password login
    const handleLogin = (e) => {

        e.preventDefault();

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(() => {

                toast.success("Login Successful");

                navigate(from);
            })
            .catch(error => {

                toast.error(error.message);
            });
    };

    // google login
    const handleGoogleLogin = () => {

        googleLogin()
            .then(() => {

                toast.success("Google Login Successful");

                navigate(from);
            })
            .catch(error => {

                toast.error(error.message);
            });
    };

    return (
        <div className="max-w-md mx-auto shadow-2xl p-8 rounded-xl bg-[#0f172a] border border-gray-800 my-10">
            <h2 className="text-3xl font-bold mb-5 text-center text-white">                Login
            </h2>

            <form
                onSubmit={handleLogin}
                className="space-y-4"
            >

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

                <button className="w-full bg-cyan-400 hover:bg-cyan-300 text-black py-3 rounded font-bold duration-300">
                    Login

                </button>

            </form>

            <button
                onClick={handleGoogleLogin}
                className="w-full border border-gray-700 py-3 rounded mt-4 text-white hover:bg-gray-800 duration-300 flex items-center justify-center gap-2"
            >

                Continue with Google

            </button>

            <p className="mt-5 text-center text-gray-400">
                New here?

                <Link
                    to="/register"
                    className="text-blue-500 ml-2"
                >
                    Register
                </Link>

            </p>

        </div>
    );
};

export default Login;