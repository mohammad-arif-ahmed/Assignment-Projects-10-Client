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
        <div className="max-w-md mx-auto shadow-lg p-8 rounded-xl">

            <h2 className="text-3xl font-bold mb-5 text-center">
                Login
            </h2>

            <form
                onSubmit={handleLogin}
                className="space-y-4"
            >

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

                <button className="w-full bg-black text-white py-3 rounded">

                    Login

                </button>

            </form>

            <button
                onClick={handleGoogleLogin}
                className="w-full border py-3 rounded mt-4"
            >

                Continue with Google

            </button>

            <p className="mt-5 text-center">

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