import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import ContactUs from "../components/Home/ContactUs";

const Main = () => {
    const location = useLocation();

    const hideNavbarAndFooter = ["/login", "/register", "/about"].includes(location.pathname);

    return (
        <div className="flex flex-col min-h-screen">
            {!hideNavbarAndFooter && <Navbar />}

            <div className="flex-grow">
                <Outlet />
            </div>
            {!hideNavbarAndFooter &&
                <div>
                    <ContactUs />
                    <Footer />
                </div>
            }
        </div>
    );
};

export default Main;

