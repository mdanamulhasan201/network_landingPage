import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CgMenuRight } from 'react-icons/cg';
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import logo from '../../assets/logoo.png';

const ResponsiveNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);

    // Toggle the sidebar
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setActiveDropdown(null);
    };

    // Handle scroll event for navbar transparency
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Dropdown Items
    const servicesDropdownItems = [
        { label: 'Data Management', path: '/services/data-management' },
        { label: 'Affiliate Services', path: '/services/affiliate-services' },
        { label: 'Legal Marketing', path: '/services/legal-marketing' },
        { label: 'Lead Generation', path: '/services/lead-generation' },
        { label: 'Media Buying', path: '/services/media-buying' },
    ];

    const aboutDropdownItems = [
        { label: 'About Us', path: '/about' },
        { label: 'Our Team', path: '/team' },
        { label: 'Careers', path: '/careers' }
    ];

    // Sidebar Animation
    const sidebarVariants = {
        closed: { x: '-100%', transition: { type: 'tween', duration: 0.3 } },
        open: { x: 0, transition: { type: 'tween', duration: 0.3 } }
    };

    // Dropdown Animation
    const dropdownVariants = {
        closed: { height: 0, opacity: 0, transition: { duration: 0.3 } },
        open: { height: 'auto', opacity: 1, transition: { duration: 0.3 } },
    };

    const getActiveClass = (path) => {
        return location.pathname === path ? 'text-Blue font-bold' : 'font-bold';
    };

    // Dropdown Component
    const Dropdown = ({ items, dropdownName }) => (
        <div className="relative text-black font-heebo group">
            <button
                onClick={() => setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName)}
                className="flex items-center space-x-2 text-black hover:text-gray-500 transition duration-300 w-full"
            >
                <span>{dropdownName.charAt(0).toUpperCase() + dropdownName.slice(1)}</span>
                {activeDropdown === dropdownName ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>

            <AnimatePresence>
                {activeDropdown === dropdownName && (
                    <motion.div
                        variants={dropdownVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="pl-4 mt-2"
                    >
                        {items.map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}
                                className={`block py-2 hover:text-gray-500 transition duration-300 ${getActiveClass(item.path)}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? '' : 'bg-transparent'}`}>
            <div className="px-10 2xl:px-20 py-6 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2">
                    <img src={logo} alt="Logo" className="w-36 h-8 md:w-40 md:h-10" />
                </Link>

                <button onClick={toggleMenu} className="z-50 text-white text-3xl">
                    {isMenuOpen ? (
                        <AiOutlineClose className={`${isScrolled ? 'text-white' : 'text-white'} text-4xl`} />
                    ) : (
                        <CgMenuRight className={`${isScrolled ? 'text-Blue' : 'text-white'} text-4xl`} />
                    )}
                </button>


                {/* Sidebar */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <>
                            {/* Overlay */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.5 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black z-40"
                                onClick={toggleMenu}
                            />

                            {/* Sidebar Content */}
                            <motion.div
                                variants={sidebarVariants}
                                initial="closed"
                                animate="open"
                                exit="closed"
                                className="fixed top-0 left-0 w-64 h-full bg-white text-gray-800 z-50 p-6 overflow-y-auto"
                            >
                                <div className="space-y-4">
                                    <Link
                                        to="/"
                                        className={`block py-2 ${getActiveClass('/')}`}
                                        onClick={toggleMenu}
                                    >
                                        Home
                                    </Link>

                                    <Dropdown items={servicesDropdownItems} dropdownName="services" />
                                    <Dropdown items={aboutDropdownItems} dropdownName="about" />

                                    <Link
                                        to="/contact"
                                        className={`block py-2 hover:text-gray-500 ${getActiveClass('/contact')}`}
                                        onClick={toggleMenu}
                                    >
                                        Contact
                                    </Link>
                                    <Link
                                        to="/login"
                                        className="block bg-Blue text-white px-4 py-2 rounded hover:bg-Blue-hover transition duration-300"
                                        onClick={toggleMenu}
                                    >
                                        Login
                                    </Link>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default ResponsiveNavbar;
