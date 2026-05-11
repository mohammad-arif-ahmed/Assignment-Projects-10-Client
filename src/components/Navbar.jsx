import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-black text-white p-4">

            <div className="max-w-7xl mx-auto flex justify-between">

                <h1 className="text-2xl font-bold">
                    LearnHub
                </h1>

                <div className="flex gap-5">

                    <Link to="/">Home</Link>

                    <Link to="/courses">Courses</Link>

                    <Link to="/dashboard">Dashboard</Link>

                    <Link to="/login">Login</Link>

                </div>

            </div>

        </div>
    );
};

export default Navbar;