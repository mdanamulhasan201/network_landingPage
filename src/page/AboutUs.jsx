import ContactUs from '../components/Home/ContactUs';
import Footer from '../components/shared/Footer';
import Nav from '../components/shared/Nav';
import successImg from '../assets/aboutus/success.png'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from 'react-helmet-async';
import { FaSmile, FaUsers, FaLightbulb, FaHandsHelping, FaHandshake, FaPaintBrush } from "react-icons/fa";

const AboutUs = () => {
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
        <>
            <Helmet>
                <title>Cash Media | About Us</title>
            </Helmet>
            <Nav />
            <div className="relative w-full h-auto">
                {/* Background Color with Angled Division */}
                <div
                    className="w-full h-96"
                    style={{
                        clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 100%)",
                        background: "linear-gradient(to bottom right, #733FC5 , #4244BB)",
                    }}
                ></div>

                {/* Overlay Content */}
                <div
                    className="absolute inset-0 flex items-center shadow-lg backdrop-blur-[3px]"
                    style={{
                        clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 100%)",
                    }}
                >
                    <div className="max-w-screen-xl px-5 sm:px-10 xl:px-5 w-full mx-auto">
                        <div className="text-left font-heebo" data-aos="fade-down">
                            <h1 className="uppercase font-heebo font-bold text-xl xl:text-2xl text-gray-300">About</h1>
                            <h1 className="text-4xl md:text-5xl xl:text-6xl mb-4 mt-1 font-semibold text-white">
                                Who We Are
                            </h1>
                            <p className="text-lg text-white max-w-screen-sm">We live for strategy, thrive on data, deliver results, and most importantly, enjoy every moment of the journey.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* about sections */}
            <div className="max-w-screen-xl px-5 sm:px-10 xl:px-5 w-full mx-auto  my-5 pb-20">
                <div className='flex flex-col md:flex-row justify-between items-center gap-10' data-aos="fade-up">
                    <div className='w-full md:w-1/2 '>
                        <p className="text-lg md:text-xl font-heebo leading-8 text-gray-600">Our dedicated team combines intelligence with creativity to tackle challenges effectively, setting a new benchmark for what a performance marketing partner can achieve for your business.
                            <br />
                            We foster a culture grounded in trust, respect, open communication, and a deep commitment to supporting both our clients and our people. It’s this shared ethos that unites the Diablo team and drives our success.</p>
                        <h1 className="text-2xl md:text-3xl font-heebo font-semibold my-5 text-titleColor">Our Mission</h1>
                        <p className="text-lg md:text-xl font-heebo leading-8 text-gray-600">Our mission, driven by integrity and determination, is to lead the way in performance marketing. We strive to empower our clients to succeed through our expertise, consultative approach, and innovative technology, creating meaningful connections between consumers and trusted brands.</p>
                    </div>
                    <div className='w-full md:w-1/2 '>
                        <img src={successImg} alt="" />
                    </div>
                </div>

                {/* What We Value */}
                <div className='flex flex-col md:flex-row justify-between mt-10 gap-10' data-aos="fade-up">
                    <div className='w-full md:w-6/12'>
                        <h1 className="text-2xl md:text-3xl font-heebo font-semibold my-5 text-titleColor">What We Value</h1>
                        <p className="text-lg md:text-xl font-heebo leading-8 text-gray-600">We excel at building a dynamic and enjoyable workplace, balancing hard work and dedication to deliver exceptional data-driven solutions for our clients while fostering professional growth for our team.
                        </p>
                        <p className="text-lg md:text-xl font-heebo leading-8 text-gray-600 mt-2">
                            It all begins with our people—they truly understand what matters. At our core, we value accountability, kindness, authenticity, confidence, vulnerability, transparency, and selflessness.
                        </p>
                    </div>
                    {/* right side */}
                    <div className='w-full md:w-6/12'>
                        <div className="flex flex-col gap-5">
                            <div className="flex items-center gap-5">
                                <FaSmile className="text-3xl text-blue-500" />
                                <div>
                                    <h2 className='text-lg font-heebo font-semibold text-Blue'>Be Positive</h2>
                                    <p className='text-md font-heebo '>Elevate open dialogue through listening, humility, respect, trust, and truth.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5">
                                <FaUsers className="text-3xl text-green-500" />
                                <div>
                                    <h2 className='text-lg font-heebo font-semibold text-Blue'>Be Community-Minded</h2>
                                    <p className='text-md font-heebo '>We listen, learn, support, and elevate each other to work collectively toward solutions.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5">
                                <FaLightbulb className="text-3xl text-yellow-500" />
                                <div>
                                    <h2 className='text-lg font-heebo font-semibold text-Blue'>Have Fun</h2>
                                    <p className='text-md font-heebo '>Stay curious, enjoy yourself, and build something you are proud of.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5">
                                <FaHandsHelping className="text-3xl text-purple-500" />
                                <div>
                                    <h2 className='text-lg font-heebo font-semibold text-Blue'>Take Responsibility</h2>
                                    <p className='text-md font-heebo '>Take ownership of problems, not just your own.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5">
                                <FaHandshake className="text-3xl text-red-500" />
                                <div>
                                    <h2 className='text-lg font-heebo font-semibold text-Blue'>Be Respectful</h2>
                                    <p className='text-md font-heebo '>Honor the experience of your fellow team members.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5">
                                <FaPaintBrush className="text-3xl text-indigo-500" />
                                <div>
                                    <h2 className='text-lg font-heebo font-semibold text-Blue'>Be Creative</h2>
                                    <p className='text-md font-heebo '>Bring fresh perspectives and creativity to inspire and activate your next best idea.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactUs />
            <Footer />
        </>
    );
};

export default AboutUs;