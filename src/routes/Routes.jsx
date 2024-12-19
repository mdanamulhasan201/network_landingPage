import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home";
import ContactUs from "../page/ContactUs";
import ServiceDetails from "../page/ServiceDetails";
import Login from "../page/Login";
import Register from "../page/Register";
import TeamMembers from "../page/TeamMembers";
import Career from "../page/Career";
import AboutUs from "../page/AboutUs";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/services/:slug",
                element: <ServiceDetails />
            },

            {
                path: "contact",
                element: <ContactUs />
            },
            {
                path: "about",
                element: <AboutUs/>
            },
            {
                path: "team",
                element: <TeamMembers />
            },
            {
                path: "careers",
                element: <Career />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            }
        ]
    },
]);