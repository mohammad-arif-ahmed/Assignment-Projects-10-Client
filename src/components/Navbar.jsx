import { useContext } from "react";

import { Link } from "react-router-dom";

import { AuthContext } from "../providers/AuthProvider";

import toast from "react-hot-toast";

const Navbar = () => {

    const {
        user,
        logoutUser
    } = useContext(AuthContext);

    const handleLogout = () => {

        logoutUser()
            .then(() => {

                toast.success("Logout Successful");
            })
            .catch(error => {

                toast.error(error.message);
            });
    };

    return (
        <div className="bg-black text-white p-4">

            <div className="max-w-7xl mx-auto flex justify-between items-center">

                <h1 className="text-2xl font-bold">
                    LearnHub
                </h1>

                <div className="flex gap-5 items-center">

                    <Link to="/">Home</Link>

                    <Link to="/courses">Courses</Link>

                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/add-course">

                        Add Course

                    </Link>

                    {
                        user ? (
                            <>

                                <img
                                    src={user.photoURL}
                                    alt=""
                                    className="w-10 h-10 rounded-full"
                                />

                                <button onClick={handleLogout}>

                                    Logout

                                </button>

                            </>
                        ) : (
                            <Link to="/login">

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