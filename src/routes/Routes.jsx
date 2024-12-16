import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home";
import ContactUs from "../page/ContactUs";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "contact",
                element: <ContactUs/>
            }
        ]
    },
]);