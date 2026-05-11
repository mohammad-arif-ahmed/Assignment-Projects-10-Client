import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div>

            <Navbar />

            <div className="min-h-screen max-w-7xl mx-auto px-4 py-6">
                <Outlet />
            </div>

            <Footer />

        </div>
    );
};

export default MainLayout;