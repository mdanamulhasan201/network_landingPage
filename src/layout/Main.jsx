import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet />
            <h1>Footer</h1>
        </div>
    );
};

export default Main;