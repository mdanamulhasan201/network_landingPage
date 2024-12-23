import { useEffect } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaDatabase, FaHandHoldingUsd, FaGavel, FaUsers, FaBroadcastTower } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";


const Our_Services = () => {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
            offset: 120,
            debug: true,
        });
        return () => {
            AOS.refresh();
        };
    }, []);



    const services = [
        {
            id: 1,
            icon: <FaDatabase size={96} />,
            title: "Data Management",
            alt: "Data Management",
            slug: "data-management",
        },
        {
            id: 2,
            icon: <FaHandHoldingUsd size={96} />,
            title: "Affiliate Services",
            alt: "Affiliate Services",
            slug: "affiliate-services",
        },
        {
            id: 3,
            icon: <FaGavel size={96} />,
            title: "Legal Marketing",
            slug: "legal-marketing",
            alt: "Legal Marketing",
        },
        {
            id: 4,
            icon: <FaUsers size={96} />,
            title: "Lead Generation",
            slug: "lead-generation",
            alt: "Lead Generation",
        },
        {
            id: 5,
            icon: <FaBroadcastTower size={96} />,
            title: "Media Buying",
            slug: "media-buying",
            alt: "Media Buying",
        },
    ];

    const NextArrow = ({ onClick }) => (
        <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-[#000872] p-2 rounded-full shadow-lg hover:bg-[#1a1a8c] transition"
            onClick={onClick}
        >
            <IoIosArrowForward size={24} className="text-white" />
        </button>
    );

    const PrevArrow = ({ onClick }) => (
        <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-[#000872] p-2 rounded-full shadow-lg hover:bg-[#1a1a8c] transition"
            onClick={onClick}
        >
            <IoIosArrowBack size={24} className="text-white" />
        </button>
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    const handleCardClick = (slug) => {
        navigate(`/services/${slug}`);
    };

    return (
        <div className="bg-slate-50 relative">
            <div className="max-w-screen-xl px-4 py-16 mx-auto ">
                <h1
                    className="text-center font-bold font-heebo text-3xl text-titleColor relative"
                    data-aos="fade-down"
                >
                    Our Services
                    <span
                        className="block mx-auto mt-2 h-1 w-16 bg-titleColor rounded-full"
                        data-aos="fade-up"
                    ></span>
                </h1>

                {/* Services Slider */}
                <div className="mt-8 relative" data-aos="fade-up">
                    <Slider {...settings}>
                        {services.map((service) => (
                            <motion.div
                                key={service.id}
                                onClick={() => handleCardClick(service.slug)}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 50 }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
                                    transition: { duration: 0.3 },
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="p-6 mx-4 hover:bg-white hover:border my-10 space-y-4 cursor-pointer rounded-lg"
                                data-aos="zoom-in"
                            >
                                <motion.div
                                    className="text-[#0B302C] flex items-center justify-center"
                                    whileHover={{
                                        rotate: [0, 15, -15, 0],
                                        transition: { type: "spring", duration: 0.5 },
                                    }}
                                >
                                    {service.icon}
                                </motion.div>
                                <h2 className="font-heebo text-xl font-bold text-center text-[#000872]">
                                    {service.title}
                                </h2>
                            </motion.div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Our_Services;
