import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const Main = () => {
    const location = useLocation();

    const hideNavbarAndFooter = ["/login", "/register"].includes(location.pathname);

    return (
        <div className="flex flex-col min-h-screen">
            {!hideNavbarAndFooter && <Navbar />}

            <div className="flex-grow">
                <Outlet />
            </div>
            {!hideNavbarAndFooter && <Footer />}
        </div>
    );
};

export default Main;

