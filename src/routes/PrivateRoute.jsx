import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";

import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({ children }) => {

    const {
        user,
        loading
    } = useContext(AuthContext);

    const location = useLocation();

    // loading spinner
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">

                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    // if logged in
    if (user) {
        return children;
    }

    // redirect login
    return (
        <Navigate
            to="/login"
            state={{ from: location }} />
    );
};

export default PrivateRoute;