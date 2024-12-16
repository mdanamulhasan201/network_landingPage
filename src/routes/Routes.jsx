import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home";
import ContactUs from "../page/ContactUs";
import ServiceDetails from "../page/ServiceDetails";


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
            }
        ]
    },
]);