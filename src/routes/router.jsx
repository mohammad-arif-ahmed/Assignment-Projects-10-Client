import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Courses from "../pages/Courses";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import AddCourse from "../pages/AddCourse";
import MyCourses from "../pages/MyCourses";
import UpdateCourse from "../pages/UpdateCourse";
import CourseDetails from "../pages/CourseDetails";
import MyEnrolledCourses from "../pages/MyEnrolledCourses";

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
                element: (
                    <PrivateRoute>

                        <Dashboard />

                    </PrivateRoute>
                )
            },
            {
                path: "/add-course",
                element: (
                    <PrivateRoute>

                        <AddCourse />

                    </PrivateRoute>
                )
            },
            {
                path: "/my-courses",
                element: (
                    <PrivateRoute>

                        <MyCourses />

                    </PrivateRoute>
                )
            },
            {
                path: "/update-course/:id",
                element: (
                    <PrivateRoute>

                        <UpdateCourse />

                    </PrivateRoute>
                )
            },
            {
                path: "/course-details/:id",
                element: (
                    <PrivateRoute>

                        <CourseDetails />

                    </PrivateRoute>
                )
            },
            {
                path: "/my-enrolled-courses",
                element: (
                    <PrivateRoute>

                        <MyEnrolledCourses />

                    </PrivateRoute>
                )
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