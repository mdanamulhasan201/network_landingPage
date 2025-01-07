import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import ContactUs from "../components/Home/ContactUs";

const Main = () => {
    const location = useLocation();

    // Define paths where Navbar and Footer should be hidden
    const hideNavbarAndFooter =
        ["/login", "/register", "/about", "/team"].includes(location.pathname) ||
        /^\/services\/[^/]+$/.test(location.pathname);
    
        const hideContactUs = ["/contact"].includes(location.pathname) || /^\/services\/[^/]+$/.test(location.pathname);

    return (
        <div className="flex flex-col min-h-screen">
            {!hideNavbarAndFooter && <Navbar />}

            <div className="flex-grow">
                <Outlet />
            </div>
            {!hideNavbarAndFooter &&
                <div>
                    {!hideContactUs && <ContactUs />}
                    <Footer />
                </div>
            }
        </div>
    );
};

export default Main;

