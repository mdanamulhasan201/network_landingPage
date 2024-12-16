import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlinePlus, AiOutlineMinus, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import logo from '../../assets/logoo.png';

const ResponsiveNavbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setActiveDropdown(null);
    };

    const toggleDropdown = (dropdownName) => {
        setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
    };

    // Shared dropdown items
    const servicesDropdownItems = [
        { label: 'Data Management', path: '/services/data-management' },
        { label: 'Affiliate Services', path: '/services/affiliate' },
        { label: 'Legal Marketing', path: '/services/legal-marketing' },
        { label: 'Lead Generation', path: '/services/lead-generation' },
        { label: 'Media Buying', path: '/services/media-buying' }
    ];

    const aboutDropdownItems = [
        { label: 'About Us', path: '/about' },
        { label: 'Our Team', path: '/team' },
        { label: 'Careers', path: '/careers' }
    ];

    // Dropdown Animations
    const dropdownVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3
            }
        },
        open: {
            opacity: 1,
            height: 'auto',
            transition: {
                duration: 0.3
            }
        }
    };

    const desktopDropdownVariants = {
        closed: {
            opacity: 0,
            y: -10,
            visibility: 'hidden'
        },
        open: {
            opacity: 1,
            y: 0,
            visibility: 'visible',
            transition: {
                duration: 0.3
            }
        }
    };

    const sidebarVariants = {
        closed: {
            x: '-100%',
            transition: {
                type: 'tween',
                duration: 0.3
            }
        },
        open: {
            x: 0,
            transition: {
                type: 'tween',
                duration: 0.3
            }
        }
    };

    const iconVariants = {
        closed: { rotate: 0 },
        open: { rotate: 180 },
    };

    // Helper function to add active class
    const getActiveClass = (path) => {
        return location.pathname === path ? 'text-Blue font-semibold' : '';
    };

    // Dropdown Component
    const Dropdown = ({
        items,
        dropdownName,
        isMobile = false,
        className = ''
    }) => (
        <div className={`relative text-black font-heebo group ${className}`}>
            <button
                onClick={() => toggleDropdown(dropdownName)}
                className={`
                    flex items-center space-x-2  text-black
                    ${isMobile ? 'w-full justify-between' : 'hover:text-gray-500 transform duration-300'}
                `}
            >
                <span>{dropdownName.charAt(0).toUpperCase() + dropdownName.slice(1)}</span>
                <motion.div
                    variants={iconVariants}
                    initial="closed"
                    animate={activeDropdown === dropdownName ? 'open' : 'closed'}
                >
                    {activeDropdown === dropdownName ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </motion.div>
            </button>

            <AnimatePresence>
                {activeDropdown === dropdownName && (
                    <motion.div
                        variants={isMobile ? dropdownVariants : desktopDropdownVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className={`
                            ${isMobile
                                ? 'pl-4 mt-2'
                                : 'absolute z-50 top-full left-0 mt-2 bg-white border text-gray-800 rounded shadow-lg w-48 py-2'}`}
                    >
                        {items.map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}
                                className={`
                                    block ${isMobile
                                        ? 'py-2 text-gray-600 hover:text-gray-500 transform duration-300'
                                        : 'px-4 py-2 hover:bg-gray-100 hover:text-Blue transform duration-300'} 
                                    ${getActiveClass(item.path)}
                                `}
                                onClick={() => {
                                    if (isMobile) setIsMobileMenuOpen(false);
                                    setActiveDropdown(null);
                                }}
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
        <nav className="border  ">
            <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2 ">
                    <img src={logo} alt="Logo" className="w-36 h-8 md:w-40 md:h-10" />
                </Link>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={toggleMobileMenu} className="z-50">
                        {isMobileMenuOpen ? <AiOutlineClose className="text-2xl" /> : <AiOutlineMenu className="text-2xl" />}
                    </button>
                </div>

                {/* Mobile Sidebar */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <>
                            {/* Mobile Overlay */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.5 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black z-40 md:hidden"
                                onClick={toggleMobileMenu}
                            />

                            {/* Mobile Sidebar */}
                            <motion.div
                                variants={sidebarVariants}
                                initial="closed"
                                animate="open"
                                exit="closed"
                                className="fixed top-0 left-0 w-64 h-full bg-white text-gray-800 z-50 overflow-y-auto p-6 md:hidden font-heebo"
                            >
                                <div className="space-y-4">
                                    {/* Add the Home link here */}
                                    <Link
                                        to="/"
                                        className={`block py-2 hover:text-gray-500 transform duration-300 ${getActiveClass('/')}`}
                                        onClick={toggleMobileMenu}
                                    >
                                        Home
                                    </Link>

                                    <Dropdown
                                        items={servicesDropdownItems}
                                        dropdownName="services"
                                        isMobile={true}
                                    />
                                    <Dropdown
                                        items={aboutDropdownItems}
                                        dropdownName="about"
                                        isMobile={true}
                                    />

                                    {/* Additional Mobile Links */}
                                    {/* <Link
                                        to="/join"
                                        className={`block py-2 hover:text-gray-500 transform duration-300 ${getActiveClass('/join')}`}
                                        onClick={toggleMobileMenu}
                                    >
                                        Join Us
                                    </Link> */}
                                    <Link
                                        to="/contact"
                                        className={`block py-2 hover:text-gray-500 transform duration-300 ${getActiveClass('/contact')}`}
                                        onClick={toggleMobileMenu}
                                    >
                                        Contact
                                    </Link>
                                    <Link
                                        to="/login"
                                        className={`block bg-Blue hover:bg-Blue-hover transform duration-300 text-white px-4 py-2 rounded  ${getActiveClass('/login')}`}
                                        onClick={toggleMobileMenu}
                                    >
                                        Login
                                    </Link>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

                {/* Desktop and Tablet Navigation */}
                <div className="hidden md:flex items-center space-x-6 w-full justify-end font-heebo">
                    <Link to="/" className={`hover:text-gray-500 transform duration-300 ${getActiveClass('/')}`}>Home</Link>
                    <Dropdown
                        items={servicesDropdownItems}
                        dropdownName="services"
                        className="text-white"
                    />
                    <Dropdown
                        items={aboutDropdownItems}
                        dropdownName="about"
                        className="text-white"
                    />

                    {/* Additional Links */}
                    {/* <Link to="/join" className={`hover:text-gray-500 transform duration-300 ${getActiveClass('/join')}`}>Join Us</Link> */}
                    <Link to="/contact" className={`hover:text-gray-500 transform duration-300 ${getActiveClass('/contact')}`}>Contact</Link>
                    <Link
                        to="/login"
                        className={`px-5 py-1 text-white rounded-full bg-Blue hover:bg-Blue-hover transform duration-300 ${getActiveClass('/login')}`}
                    >
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default ResponsiveNavbar;
