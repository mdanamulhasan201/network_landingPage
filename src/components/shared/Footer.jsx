import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className=" py-5 bg-[#004AAD] border-t border-gray-500 text-gray-300 flex flex-col md:flex-row gap-2 justify-between items-center px-5">
            <p className="font-heebo"> © {currentYear} MCash Media. All rights reserved.</p>

            <ul className="flex items-center gap-5 font-heebo ">
                <li>
                    <Link to='/' className="hover:underline hover:text-white transform duration-300">Privacy Policy</Link>
                </li>
                <li>
                    <Link to='/' className="hover:underline hover:text-white transform duration-300">Terms of Us</Link>
                </li>
            </ul>
        </div>
    );
};

export default Footer;
