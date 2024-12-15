import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaDatabase, FaHandHoldingUsd, FaGavel, FaUsers, FaBroadcastTower } from "react-icons/fa";

const Our_Services = () => {
    const services = [
        {
            id: 1,
            icon: <FaDatabase size={96} />,
            title: "Data Management",
            alt: "Data Management",
        },
        {
            id: 2,
            icon: <FaHandHoldingUsd size={96} />,
            title: "Affiliate Services",
            alt: "Affiliate Services",
        },
        {
            id: 3,
            icon: <FaGavel size={96} />,
            title: "Legal Marketing",
            alt: "Legal Marketing",
        },
        {
            id: 4,
            icon: <FaUsers size={96} />,
            title: "Lead Generation",
            alt: "Lead Generation",
        },
        {
            id: 5,
            icon: <FaBroadcastTower size={96} />,
            title: "Media Buying",
            alt: "Media Buying",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    };

    const handleCardClick = (id) => {
        console.log(`Card with id ${id} is clicked`);
    };

    return (
        <div className="bg-slate-50">
            <div className="max-w-screen-xl px-4 py-12 mx-auto">
                <h1 className="text-center font-bold font-heebo text-3xl text-[#000872] relative">
                    Our Services
                    <span className="block mx-auto mt-2 h-1 w-16 bg-[#000872] rounded-full"></span>
                </h1>

                {/* Services Slider */}
                <div className="mt-8">
                    <Slider {...settings}>
                        {services.map((service) => (
                            <motion.div
                                key={service.id}
                                onClick={() => handleCardClick(service.id)}
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
                            >
                                {/* Icon with Animation */}
                                <motion.div
                                    className="text-Blue flex items-center justify-center"
                                    whileHover={{
                                        rotate: [0, 15, -15, 0],
                                        transition: { type: "spring", duration: 0.5 },
                                    }}
                                >
                                    {service.icon}
                                </motion.div>
                                {/* Title */}
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
