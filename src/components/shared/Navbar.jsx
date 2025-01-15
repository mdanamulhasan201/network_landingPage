import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CgMenuRight, CgMenuRightAlt } from 'react-icons/cg';
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
// import logo from '../../assets/logoWhite.png';
import logo from '../../assets/logo.png';
import logos from '../../assets/logos.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const toggleDropdown = (dropdownName) => {
        setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
    };

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
        // { label: 'Careers', path: '/careers' }
    ];

    // Dropdown Animations
    const dropdownVariants = {
        closed: {
            opacity: 0,
            x: -20,
            transition: {
                duration: 0.3
            }
        },
        open: {
            opacity: 1,
            x: 0,
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
            x: '100%',
            transition: {
                type: 'tween',
                duration: 0.5
            }
        },
        open: {
            x: 0,
            transition: {
                type: 'tween',
                duration: 0.5
            }
        }
    };

    const iconVariants = {
        closed: { rotate: 0 },
        open: { rotate: 180 },
    };


    const containerVariants = {
        open: {
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.3,
            },
        },
        closed: {},
    };

    const linkVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
            },
        },
        closed: {
            opacity: 0,
            y: -10,
        },
    };

    const getActiveClass = (path) => {
        return location.pathname === path ? 'text-Blue font-bold' : '';
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
                    flex items-center space-x-2 text-black
                    ${isMobile ? 'w-full justify-between text-white' : 'hover:text-gray-500 transform duration-300'}
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
                                : 'absolute z-50 top-full left-0 mt-2 bg-white border text-gray-800 rounded shadow-lg w-48 py-2'}
                        `}
                    >
                        {items.map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}
                                onClick={() => setActiveDropdown(null)}
                                className={`
                                    block ${isMobile
                                        ? 'py-2 text-white hover:text-gray-500 transform duration-300 text-lg'
                                        : 'px-4 py-2 hover:text-Blue transform duration-300'}
                                    ${getActiveClass(item.path)}
                                `}
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
        <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-slate-50 shadow-md py-5' : 'bg-transparent'}`}>
            <div className="py-5 flex items-center justify-between">
                {/* Logo */}

                <motion.div
                className='ms-3'
                    initial={{ opacity: 1, y: 0 }}
                    animate={isScrolled ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}>
                    {!isScrolled && (
                        <Link to="/" className="flex items-center ">
                            <img src={logo} alt="Logo" className="w-40 h-12 md:w-56 md:h-14" />
                        </Link>
                    )}
                </motion.div>

                <div>
                    {/* The motion div that hides on scroll */}
                    {
                        !isScrolled && (
                            <motion.div
                                initial={{ opacity: 1 }}
                                animate={{ opacity: isScrolled ? 0 : 1 }}
                                transition={{ duration: 0.3 }}
                                className="hidden md:block mr-5"
                            >
                                <button
                                    onClick={toggleMenu}
                                    className="z-50 text-white text-3xl"
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >
                                    {isMenuOpen ? (
                                        <></>
                                    ) : isHovered ? (
                                        <motion.div
                                            initial={{ scale: 1 }}
                                            animate={{ scale: 1.2 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <CgMenuRightAlt className="text-white text-4xl" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            initial={{ scale: 1.2 }}
                                            animate={{ scale: 1 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <CgMenuRight className="text-white text-4xl" />
                                        </motion.div>
                                    )}
                                </button>
                            </motion.div>
                        )

                    }

                    {/* The div that shows when scrolling */}
                    {isScrolled && (
                        <div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="fixed top-0 left-0 w-full "
                            >
                                <div>
                                    <div className="flex items-center justify-between ms-2 mr-3 mt-3">
                                        <motion.div
                                            initial={{ y: -20 }}
                                            animate={{ y: 0 }}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                        >
                                            <Link to="/" className="flex items-center">
                                                <img src={logos} alt="Logo" className="w-20 h-12 md:w-32 md:h-14" />
                                            </Link>
                                        </motion.div>
                                        <div className="hidden md:flex items-center space-x-6 font-heebo text-lg">
                                            <Link
                                                to="/"
                                                className={`hover:text-gray-500 transform duration-300 ${getActiveClass("/")}`}
                                            >
                                                Home
                                            </Link>
                                            <Dropdown items={servicesDropdownItems} dropdownName="services" />
                                            <Dropdown items={aboutDropdownItems} dropdownName="about" />
                                            <Link
                                                to="/contact"
                                                className={`hover:text-gray-500 transform duration-300 ${getActiveClass("/contact")}`}
                                            >
                                                Contact
                                            </Link>
                                            <Link
                                               to="https://affclickzen.everflowclient.io/"
                                                className={`px-5 py-1 text-white rounded-full bg-[#113706] hover:bg-[#5742BF] transform duration-300 ${getActiveClass("/login")}`}
                                            >
                                                Login
                                            </Link>
                                        </div>

                                        {/* Always visible on mobile */}
                                        <div className="md:hidden">
                                            <button onClick={toggleMenu} className="z-50 text-white text-3xl">
                                                {isMenuOpen ? (
                                                    <></>
                                                ) : (
                                                    <CgMenuRight className={` text-4xl ${isScrolled ? 'text-Blue' : 'bg-transparent'}`} />
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </motion.div>

                        </div>

                    )}
                </div>

                {
                    !isScrolled && (
                        <div className="md:hidden mr-2">
                            <button onClick={toggleMenu} className="z-50 text-white text-3xl">
                                {isMenuOpen ? (
                                    <></>
                                ) : (
                                    <CgMenuRight className={` text-4xl ${isScrolled ? 'text-Blue' : 'bg-transparent'}`} />
                                )}
                            </button>
                        </div>
                    )
                }

                {/* Sidebar Content */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <>
                            {/* Overlay */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.5 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black z-10"
                                onClick={toggleMenu}
                            />

                            {/* Close Button outside the sidebar */}
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={toggleMenu}
                                className="absolute top-6 left-6 z-20 text-white text-3xl"
                            >
                                <AiOutlineClose />
                            </motion.button>

                            <motion.div
                                variants={sidebarVariants}
                                initial="closed"
                                animate="open"
                                exit="closed"
                                className="fixed overflow-hidden top-0 right-0 w-72 md:w-[500px] lg:w-[650px] xl:w-[800px] h-full bg-[#19192200] text-white z-50 px-10 md:px-20 py-20 overflow-y-auto"
                            >
                                {/* Sidebar Links */}
                                <motion.div
                                    variants={sidebarVariants}
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                    className="fixed top-0 right-0 w-72 md:w-[500px] lg:w-[650px] xl:w-[800px] h-full bg-[#191922ee] text-white z-50 px-10 md:px-20 py-20 overflow-y-auto"
                                >
                                    {/* Sidebar Links */}
                                    <motion.div
                                        variants={containerVariants}
                                        initial="closed"
                                        animate="open"
                                        className="space-y-4 text-xl text-white mt-12"
                                    >
                                        <motion.div variants={linkVariants}>
                                            <Link
                                                to="/"
                                                className={`block py-3 ${getActiveClass('/')}`}
                                                onClick={toggleMenu}
                                            >
                                                Home
                                            </Link>
                                        </motion.div>

                                        <motion.div variants={linkVariants}>
                                            <Dropdown items={servicesDropdownItems} className="mb-8" dropdownName="services" isMobile={true} />
                                            <Dropdown items={aboutDropdownItems} dropdownName="about" isMobile={true} />
                                        </motion.div>

                                        <motion.div variants={linkVariants}>
                                            <Link
                                                to="/contact"
                                                className={`block py-3 hover:text-white ${getActiveClass('/contact')}`}
                                                onClick={toggleMenu}
                                            >
                                                Contact
                                            </Link>
                                        </motion.div>

                                        <motion.div variants={linkVariants}>
                                            <Link
                                                 to="https://affclickzen.everflowclient.io/"
                                                className="block bg-[#113706] hover:bg-[#5742BF] text-white px-6 py-3 rounded transform duration-300"
                                                onClick={toggleMenu}
                                            >
                                                Login
                                            </Link>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

            </div>
        </nav>
    );
};

export default Navbar;
