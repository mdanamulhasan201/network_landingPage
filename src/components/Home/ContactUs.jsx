import { TiArrowRight } from "react-icons/ti";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
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

    return (
        <div className="relative bg-[#004AAD] text-white">
            {/* Angled Background */}
            <div
                className="absolute inset-0 bg-[#1570e7a9]"
                style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 100%)",
                }}
            ></div>

            {/* Content */}
            <div className="relative max-w-screen-xl mx-auto px-5 py-40" data-aos="fade-up">
                <h1 className="text-2xl xl:text-4xl font-heebo font-bold text-center">
                    Ready To Talk? Get In Touch!
                </h1>
                <p className="font-heebo text-lg mt-5 text-center max-w-screen-md mx-auto">
                    Let’s collaborate to achieve exceptional results. Our dedicated team of experts is here to support you. Whatever your needs, we’re ready to discuss!
                </p>

                <Link to='/contact' className="flex justify-center items-center">
                    <motion.button
                        className="uppercase mt-8 flex items-center bg-yellow-500 text-black px-6 py-3 rounded transform duration-300 shadow-md"
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
        </div>
    );
};

export default ContactUs;
