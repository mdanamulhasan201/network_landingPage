import { TiArrowRight } from "react-icons/ti";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const ContactUs = () => {
    useEffect(() => {
        AOS.init({
            duration: 10000,
            once: false,
            mirror: true,
        });
    }, []);
    return (
        <div className="bg-Blue ">
            <div className="max-w-screen-xl mx-auto px-4 py-16" data-aos="fade-up">
                <h1 className="text-2xl xl:text-4xl font-heebo font-bold text-white text-center">
                    Ready To Talk? Get In Touch!
                </h1>
                <p className="font-heebo text-lg mt-5 text-center text-white max-w-screen-md mx-auto">Let’s collaborate to achieve exceptional results. Our dedicated team of experts is here to support you. Whatever your needs, we’re ready to discuss!</p>

                <Link to='/contact' className="flex justify-center items-center">
                    <motion.button
                        className=" uppercase mt-8 flex  items-center border  transform duration-300 text-white px-4 py-2 rounded"
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