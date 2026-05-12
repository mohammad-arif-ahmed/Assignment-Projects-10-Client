import { Link } from "react-router-dom";

const ErrorPage = () => {

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">

            <h1 className="text-7xl font-bold">

                404

            </h1>

            <p className="text-2xl mt-4">

                Page Not Found

            </p>

            <Link
                to="/"
                className="bg-black text-white px-6 py-3 rounded mt-6"
            >

                Back Home

            </Link>

        </div>
    );
};

export default ErrorPage;