import { motion } from "framer-motion";
import { Globe, Star, Target } from "lucide-react";
import img from "../../assets/img.svg";
import { TiArrowRight } from "react-icons/ti";
import { Link } from "react-router-dom";

const Banner = () => {
    const headline = "Connecting for Results";

    // Animation variants for right side icons
    const iconVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: (custom) => ({
            opacity: 1,
            scale: 1,
            rotate: 360,
            transition: {
                delay: custom * 0.3,
                duration: 0.8,
                type: "spring",
                stiffness: 120,
            }
        })
    };

    // Animation variant for the image fade-in effect
    const imageVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 2,
            transition: {
                duration: 2,
                ease: "easeOut",
            }
        }
    };

    return (
        <motion.div className="relative overflow-hidden py-10 bg-slate-50 text-black group">
            {/* Dotted Background Pattern */}
            <div
                className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 opacity-50
                [background-image:radial-gradient(circle,rgba(0,0,0,0.4)_1px,transparent_1px)] 
                [background-size:20px_20px] animate-scroll"
            ></div>

            {/* Centered Content */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-10 z-10 px-4 max-w-screen-xl mx-auto">
                {/* Left side */}
                <div className="text-center md:text-left md:w-full">
                    {/* Animated Headline */}
                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight font-heebo text-[#000872] flex flex-wrap justify-center md:justify-start"
                        aria-label={headline}
                    >
                        {headline.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                className="inline-block"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ rotateX: 360 }}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeOut",
                                    delay: index * 0.1,
                                }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto md:mx-0"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        Unlocking unlimited potential with data and technology-driven marketing.
                    </motion.p>

                    <div className="mt-8 flex justify-center md:justify-start space-x-6">
                        <motion.div
                            custom={0}
                            variants={iconVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="bg-blue-100 p-4 rounded-full shadow-lg"
                            whileHover={{
                                scale: 1.2,
                                rotate: 180,
                                transition: { type: "spring", stiffness: 300 },
                            }}
                        >
                            <Globe size={40} className="text-blue-600" />
                        </motion.div>
                        <motion.div
                            custom={1}
                            variants={iconVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="bg-green-100 p-4 rounded-full shadow-lg"
                            whileHover={{
                                scale: 1.2,
                                rotate: 180,
                                transition: { type: "spring", stiffness: 300 },
                            }}
                        >
                            <Target size={40} className="text-green-600" />
                        </motion.div>
                        <motion.div
                            custom={2}
                            variants={iconVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="bg-purple-100 p-4 rounded-full shadow-lg"
                            whileHover={{
                                scale: 1.2,
                                rotate: 180,
                                transition: { type: "spring", stiffness: 300 },
                            }}
                        >
                            <Star size={40} className="text-purple-600" />
                        </motion.div>
                    </div>

                    <Link to='/contact' className="flex justify-center md:justify-start items-center">
                        <motion.button
                            className=" uppercase mt-8 flex  items-center bg-Blue hover:bg-Blue-hover transform duration-300 text-white px-4 py-2 rounded"
                            whileHover={{ scale: 1.05 }}
                        >
                            <span>Contact Us</span>

                            <motion.div
                                className="ml-1"
                                initial={{ x: 0 }}
                                whileHover={{ x: 8 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <TiArrowRight className="text-xl" />
                            </motion.div>
                        </motion.button>
                    </Link>

                </div>

                {/* Right side with image */}
                <motion.div
                    className="flex justify-end items-center w-full md:w-full"
                    variants={imageVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <img src={img} alt="Banner Image" className="w-full max-w-full h-auto" />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Banner;
