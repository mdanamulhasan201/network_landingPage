import { motion } from "framer-motion";
// import { Globe, Star, Target } from "lucide-react";
// import { TiArrowRight } from "react-icons/ti";
// import { Link } from "react-router-dom";
import bottomCircle from "../../assets/banner/bottomCircle.png";
import bottomDot from "../../assets/banner/dotBottom.png";
import topbigCircl from "../../assets/banner/topbigCircle.png";
import toptransparentCircle from "../../assets/banner/toptransparentCircle.png";
import topDotStyle from "../../assets/banner/topDotStyle.png";
import rightSidePhn from "../../assets/banner/banner.png";
import dollarBottom from "../../assets/banner/dollarBottom.png";
import dollarTop from "../../assets/banner/dollarTop.png";
// import { Tooltip as ReactTooltip } from 'react-tooltip';
// import 'react-tooltip/dist/react-tooltip.css'; 
import { FaUser } from "react-icons/fa";
// import { Link } from "react-router-dom";
import CountUp from "react-countup";

const Hero = () => {
    const headline = "Target The World";
    const Subheadline = "What can smart advertising do for you";
    // const headline = "Performance marketing that delivers the results you define.";

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
        <motion.div className="relative overflow-hidden py-5 bg-gradient-to-r from-[#f8ecfc] to-[#ffffff] text-black group ">
            {/* shaves bg style added */}
            <div>

                <div className="absolute z-10 -right-[780px] -top-[600px] sm:-right-[550px] sm:-top-[500px] md:-right-96 md:-top-[500px] lg:-right-96 lg:-top-96 xl:-right-80 xl:-top-96 2xl:-right-28 2xl:-top-[380px]">
                    <img src={topbigCircl} alt="" className="w-full h-full" />
                </div>
                <div className="absolute z-0  -right-[780px] -top-[600px] sm:-right-[620px] sm:-top-[400px] md:-right-[480px] md:-top-[450px] lg:-right-[460px] lg:-top-[350px] xl:-right-[400px] xl:-top-[340px] 2xl:-right-48 2xl:-top-[350px]  ">
                    <img src={toptransparentCircle} alt="" className="w-full h-full" />
                </div>

                <div className="absolute z-20 right-[580px] top-36  xl:right-[640px] 2xl:right-[850px] 2xl:top-36 hidden lg:block">
                    <img src={dollarTop} alt="" className="w-full h-full" />
                </div>
                <div className="absolute z-20 right-28 bottom-32 xl:right-36 xl:bottom-30 2xl:right-44 2xl:bottom-32 hidden lg:block">
                    <img src={dollarBottom} alt="" className="w-full h-full" />
                </div>

                <div className="absolute z-10  right-52 top-36 hidden 2xl:block">
                    <img src={topDotStyle} alt="" />
                </div>
                <div className="absolute  z-0 -left-24 -bottom-20 hidden lg:block">
                    <img src={bottomCircle} alt="" />
                </div>
                <div className="absolute z-0  -left-20 bottom-12 hidden lg:block">
                    <img src={bottomDot} alt="" className="h-24" />
                </div>

            </div>


            {/* Centered Content */}
            <div className="relative py-20 sm:py-32 lg:py-20 grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-10 z-10 px-5 sm:px-10 xl:px-5 max-w-screen-xl mx-auto ">
                {/* Left side */}
                <div className="text-center md:text-left md:w-full mt-20">
                    {/* Animated Headline */}


                    <div>
                        <motion.h1
                            className="text-[34px] sm:text-4xl md:text-3xl lg:text-[38px] xl:text-[54px] font-extrabold font-heebo text-[#ffab2e] flex flex-wrap justify-center "
                            aria-label={headline}
                            id="headline"
                        >
                            {headline.split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    className="inline-block xl:leading-[60px]"
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
                        <motion.h1
                            className="text-[27px] sm:text-4xl md:text-xl lg:text-[26px] xl:text-[35px] font-extrabold font-heebo text-[#0B302D] flex flex-wrap justify-center md:justify-start"
                            aria-label={Subheadline}
                            id="headline"
                        >
                            {Subheadline.split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    className="inline-block xl:leading-[60px]"
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
                        {/* <ReactTooltip
                            anchorId="headline"
                            content="Welcome to McashMedia"
                            place="top"
                            isOpen={true}
                            style={{
                                backgroundColor: "#0B302C",
                                color: "#FFFF",
                                fontSize: "19px",
                                borderRadius: "4px",
                                padding: "20px",
                                fontWeight: "bold",
                            }}
                        /> */}


                    </div>
                    {/* Subheading */}
                    <div className="flex flex-col items-center md:items-start mt-10">
                        <motion.div

                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            <div className="relative flex items-center overflow-hidden ">
                                {/* Left Section */}
                                <div className="flex w-full md:w-[200px] lg:w-[280px] xl:w-[400px] 2xl:w-[400px] items-center flex-col bg-transparent px-4 py-2 border-2 border-[#0C302B] rounded-s-full">

                                    <p className="text-sm uppercase font-heebo">Work With Us As An</p>
                                    <h2 className="text-lg text-[20px] font-bold uppercase font-heebo">Affiliates</h2>

                                </div>

                                {/* Right Section */}
                                <button className="bg-[#0C302B] w-[200px]  hover:bg-[#25219a] transform rounded-r-full duration-300 text-white px-6 py-[22px] font-bold h-full font-heebo uppercase">
                                    Apply
                                </button>
                            </div>
                            <div className="relative flex items-center overflow-hidden mt-10">
                                {/* Left Section */}
                                <div className="flex w-full md:w-[200px] lg:w-[280px] xl:w-[400px] 2xl:w-[400px] items-center flex-col bg-transparent px-4 py-2 border-2 border-[#0C302B] rounded-s-full">

                                    <p className="text-sm uppercase font-heebo">Work With Us As An</p>
                                    <h2 className="text-lg text-[20px] font-bold uppercase font-heebo">Advertiser</h2>

                                </div>

                                {/* Right Section */}
                                <button className="bg-[#0C302B] w-[200px]  hover:bg-[#25219a] transform rounded-r-full duration-300 text-white px-6 py-[22px] font-bold h-full font-heebo uppercase">
                                    Apply
                                </button>
                            </div>
                            {/* <div className="relative flex items-center overflow-hidden mt-10 ">
                             
                                <button className="bg-[#0C302B] w-[200px]  hover:bg-[#25219a] transform rounded-s-full duration-300 text-white px-6 py-[22px] font-bold h-full font-heebo uppercase">
                                    Apply
                                </button>
                                <div className="flex w-[400px] items-center flex-col bg-transparent px-4 py-2 border-2 border-[#0C302B] rounded-r-full">

                                    <p className="text-sm uppercase font-heebo">Work With Us As An</p>
                                    <h2 className="text-lg font-bold uppercase font-heebo">Advertiser</h2>

                                </div>


                            </div> */}
                            {/* <div className="relative flex items-center overflow-hidden ">
                                <button className="bg-[#4944BD] hover:bg-[#25219a] transform duration-300 text-white px-6 py-[22px] font-bold h-full font-heebo uppercase">
                                    Apply
                                </button>

                                <div className="flex flex-col bg-transparent px-4 py-2 border-2 border-[#4944BD] rounded-r-full">

                                    <p className="text-sm uppercase font-heebo">Work With Us As An</p>
                                    <h2 className="text-lg font-bold uppercase font-heebo">AFFILIATE</h2>

                                </div>

                            </div> */}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="flex flex-col lg:flex-row justify-between  gap-5 lg:gap-24 mt-12">
                            <div className="flex items-center space-x-3  p-2 ">
                                <div className="bg-[#0C302B] p-3 rounded">
                                    <FaUser className="text-white text-xl" />
                                </div>
                                <h1 className="text-xl font-bold">
                                    <CountUp end={15000} duration={2.5} separator="," />+
                                    <span className="capitalize font-semibold"> Affiliates</span>
                                </h1>
                            </div>
                            <div className="flex items-center space-x-3  p-2 ">

                                <div className="bg-[#0C302B] p-3 rounded">
                                    <FaUser className="text-white text-xl" />
                                </div>
                                <h1 className="text-xl font-bold">
                                    <CountUp end={10000} duration={2.5} separator="," />+
                                    <span className="capitalize font-semibold">  Campaigns</span>
                                </h1>
                                {/* <h1 className=" text-xl font-bold">
                                    10,000+ <span className="capitalize font-semibold"> Active </span>
                                </h1> */}
                            </div>
                        </motion.div>
                    </div>

                    {/* <motion.p
                        className=" text-lg sm:text-xl  xl:text-2xl text-gray-700 max-w-2xl mx-auto md:mx-0"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        Unlocking unlimited potential with data and technology-driven marketing.
                    </motion.p> */}
                    {/* <motion.p
                        className="mt-6 text-xl  text-gray-500 max-w-2xl mx-auto md:mx-0"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        Harness data and technology to optimize strategies, reach the right audience, and drive measurable growth with precision and impact.
                    </motion.p> */}

                    {/* <div className="mt-8 flex justify-center md:justify-start space-x-6">
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
                    </div> */}

                    {/* <Link to='/contact' className="flex justify-center md:justify-start items-center">
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
                    </Link> */}

                </div>
                {/* Right side with image */}
                <motion.div
                    className="flex order-first md:order-last justify-center items-center w-full"
                    variants={imageVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    animate={{
                        y: [0, -20, 0], // Moves up and down
                        transition: {
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }
                    }}
                >
                    <motion.img
                        src={rightSidePhn}
                        alt="Banner Image"
                        className="z-50 max-w-full h-auto lg:max-w-[500px] object-contain"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            transition: {
                                duration: 1
                            }
                        }}

                    />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Hero;
