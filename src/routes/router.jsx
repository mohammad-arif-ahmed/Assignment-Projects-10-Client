import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Courses from "../pages/Courses";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([

    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [

            {
                path: "/",
                element: <Home />
            },

            {
                path: "/courses",
                element: <Courses />
            },

            {
                path: "/dashboard",
                element: <Dashboard />
            },

            {
                path: "/login",
                element: <Login />
            },

            {
                path: "/register",
                element: <Register />
            }

        ]
    }

]);