import { Link } from "react-router-dom";

import { useContext } from "react";

import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {

    const { user, logoutUser } = useContext(AuthContext);

    const handleLogout = () => {

        logoutUser();
    };

    return (
        <div className="sticky top-0 z-50 bg-[#0f172a]/90 backdrop-blur border-b border-gray-800">

            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

                {/* logo */}

                <Link
                    to="/"
                    className="text-3xl font-extrabold text-white"
                >

                    Learn<span className="text-cyan-400">Hub</span>

                </Link>

                {/* nav links */}

                <div className="flex items-center gap-6 text-white font-medium">

                    <Link
                        to="/"
                        className="hover:text-cyan-400 duration-300"
                    >
                        Home
                    </Link>

                    <Link
                        to="/courses"
                        className="hover:text-cyan-400 duration-300"
                    >
                        Courses
                    </Link>

                    {
                        user && (
                            <>
                                <Link
                                    to="/add-course"
                                    className="hover:text-cyan-400 duration-300"
                                >
                                    Add Course
                                </Link>

                                <Link
                                    to="/my-courses"
                                    className="hover:text-cyan-400 duration-300"
                                >
                                    My Courses
                                </Link>

                                <Link
                                    to="/my-enrolled-courses"
                                    className="hover:text-cyan-400 duration-300"
                                >
                                    Enrolled
                                </Link>
                            </>
                        )
                    }

                </div>

                {/* auth */}

                <div>

                    {
                        user ? (
                            <button
                                onClick={handleLogout}
                                className="bg-cyan-400 hover:bg-cyan-300 text-black px-6 py-2 rounded-full font-semibold duration-300"
                            >

                                Logout

                            </button>
                        ) : (
                            <Link
                                to="/login"
                                className="bg-cyan-400 hover:bg-cyan-300 text-black px-6 py-2 rounded-full font-semibold duration-300"
                            >

                                Login

                            </Link>
                        )
                    }

                </div>

            </div>

        </div>
    );
};

export default Navbar;