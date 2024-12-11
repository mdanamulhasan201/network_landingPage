import  { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact } from 'react-icons/fa';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!event.target.closest('.dropdown')) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener('click', handleOutsideClick);
        return () => document.removeEventListener('click', handleOutsideClick);
    }, []);

    const dropdownVariants = {
        hidden: {
            opacity: 0,
            y: -10,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
            },
        },
    };

    const iconVariants = {
        closed: { rotate: 0 },
        open: { rotate: 180 },
    };

    return (
        <nav className=" bg-gray-800">
            <div className='max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4 text-white shadow-md'>
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <FaReact className="text-blue-400 text-2xl" />
                    <span className="text-lg font-bold">Navbar</span>
                </div>

                {/* Navigation Links */}
                <div className="flex items-center space-x-6">
                    {/* Services Dropdown */}
                    <div className="relative dropdown">
                        <button
                            onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                            className="flex items-center hover:text-blue-400"
                        >
                            Services
                            <motion.div
                                className="ml-2"
                                variants={iconVariants}
                                initial="closed"
                                animate={activeDropdown === 'services' ? 'open' : 'closed'}
                            >
                                {activeDropdown === 'services' ? <AiOutlineMinus /> : <AiOutlinePlus />}
                            </motion.div>
                        </button>
                        <AnimatePresence>
                            {activeDropdown === 'services' && (
                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    variants={dropdownVariants}
                                    className="absolute right-0 mt-2 bg-white text-gray-800 rounded shadow-lg w-48"
                                >
                                    <ul>
                                        <li className="px-4 py-2 hover:bg-gray-200">Data Management</li>
                                        <li className="px-4 py-2 hover:bg-gray-200">Affiliate Services</li>
                                        <li className="px-4 py-2 hover:bg-gray-200">Legal Marketing</li>
                                        <li className="px-4 py-2 hover:bg-gray-200">Lead Generation</li>
                                        <li className="px-4 py-2 hover:bg-gray-200">Media Buying</li>
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* About Dropdown */}
                    <div className="relative dropdown">
                        <button
                            onClick={() => setActiveDropdown(activeDropdown === 'about' ? null : 'about')}
                            className="flex items-center hover:text-blue-400"
                        >
                            About
                            <motion.div
                                className="ml-2"
                                variants={iconVariants}
                                initial="closed"
                                animate={activeDropdown === 'about' ? 'open' : 'closed'}
                            >
                                {activeDropdown === 'about' ? <AiOutlineMinus /> : <AiOutlinePlus />}
                            </motion.div>
                        </button>
                        <AnimatePresence>
                            {activeDropdown === 'about' && (
                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    variants={dropdownVariants}
                                    className="absolute right-0 mt-2 bg-white text-gray-800 rounded shadow-lg w-48"
                                >
                                    <ul>
                                        <li className="px-4 py-2 hover:bg-gray-200">About Us</li>
                                        <li className="px-4 py-2 hover:bg-gray-200">Our Team</li>
                                        <li className="px-4 py-2 hover:bg-gray-200">Careers</li>
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Additional Links */}
                    <ul className="flex items-center space-x-4">
                        <li className="px-4 py-2 hover:bg-gray-200">Join Us</li>
                        <li className="px-4 py-2 hover:bg-gray-200">Contact</li>
                    </ul>

                    {/* Login Button */}
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Login
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
