import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { TiArrowRight } from 'react-icons/ti';
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from 'react-helmet-async';

const ContactUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


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

    const socialLinks = [
        { id: 1, icon: <FaFacebookF />, url: "https://www.facebook.com" },
        { id: 2, icon: <FaTwitter />, url: "https://www.twitter.com" },
        { id: 3, icon: <FaLinkedinIn />, url: "https://www.linkedin.com" },
        { id: 4, icon: <FaInstagram />, url: "https://www.instagram.com" },
    ];

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = (data) => {
        setIsLoading(true);

        // Simulate a submission delay
        setTimeout(() => {
            setIsLoading(false);
            toast.success("Your message has been sent successfully!", {
                position: "top-right",
                autoClose: 3000,
            });
            reset();
        }, 2000);
    };

    return (
        <>
            <Helmet>
                <title>AffClickZen| Contact Us</title>
            </Helmet>
            <div className=" flex items-center justify-center bg-slate-200 px-5  ">
                <div className="max-w-screen-xl w-full flex flex-col lg:flex-row gap-10 py-24 md:py-48 ">
                    {/* Left Side - Contact Info */}
                    <div className="flex flex-col gap-5 justify-center w-full lg:w-1/2" data-aos="zoom-in">
                        <h3 className="font-heebo font-semibold uppercase text-Blue">Contact us</h3>
                        <h1 className="font-heebo font-bold text-lg xl:text-5xl">Get In Touch</h1>

                        <p className="font-heebo text-lg">
                            Looking to boost customer acquisition or enhance audience monetization? Fill out our contact form, and our team will reach out to you promptly!
                        </p>

                        <div className="flex flex-col md:flex-row justify-between gap-2">
                            {/* Contact Details */}
                            <div className="flex flex-col gap-2">
                                <h2 className="uppercase font-semibold font-heebo">Contact Us</h2>
                                <div className="flex items-center">
                                    <FaPhoneAlt className="text-Blue text-xl mr-1" />
                                    <p className="text-md font-heebo">+1 (315) 694 2852</p>
                                </div>
                                <div className="flex items-center">
                                    <MdEmail className="text-Blue text-xl mr-1" />
                                    <p className="text-md font-heebo">
                                        <a href="mailto:contact@gmail.com">support@mcashmedia.com</a>
                                    </p>
                                </div>
                            </div>

                            {/* Address and Social Icons */}
                            <div className="flex flex-col gap-2 mt-5 md:mt-0">
                                <h2 className="uppercase font-semibold font-heebo">Mailing Address</h2>
                                <div className="flex items-start md:items-center">
                                    <FaLocationDot className="text-Blue text-xl" />
                                    <p className="text-md font-heebo">1900 Olevia St, Jacksonville, FL 32207</p>
                                </div>

                                {/* Social Icons */}
                                <div className="flex items-center gap-2">
                                    <p className="capitalize text-md font-heebo">Follow us:</p>
                                    <div className="flex gap-4">
                                        {socialLinks.map((social) => (
                                            <a
                                                key={social.id}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-Blue text-xl transition duration-300 hover:text-blue-700 hover:scale-110 bg-gray-200 p-2 rounded-full"
                                            >
                                                {social.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="lg:w-1/2 w-full bg-gray-100 p-8 rounded-lg shadow-md" data-aos="zoom-in">
                        <h2 className="font-heebo font-semibold uppercase text-Blue mb-6 text-lg">Send Us a Message</h2>
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                            {/* Full Name */}
                            <div>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    {...register("fullName", {
                                        required: "Full Name is required",
                                        minLength: { value: 3, message: "Name must be at least 3 characters" },
                                    })}
                                    className={`p-3 border rounded-lg w-full ${errors.fullName ? "border-red-500" : "border-gray-300"
                                        }`}
                                />
                                {errors.fullName && (
                                    <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Enter a valid email address",
                                        },
                                    })}
                                    className={`p-3 border rounded-lg w-full ${errors.email ? "border-red-500" : "border-gray-300"
                                        }`}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                                )}
                            </div>

                            {/* Phone */}
                            <div>
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    {...register("phone", {
                                        required: "Phone number is required",
                                        pattern: {
                                            value: /^[0-9]+$/,
                                            message: "Phone number can only contain numbers",
                                        },
                                        minLength: { value: 10, message: "Phone number must be at least 10 digits" },
                                        maxLength: { value: 15, message: "Phone number cannot exceed 15 digits" },
                                    })}
                                    className={`p-3 border rounded-lg w-full ${errors.phone ? "border-red-500" : "border-gray-300"
                                        }`}
                                />
                                {errors.phone && (
                                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                                )}
                            </div>

                            {/* Message */}
                            <div>
                                <textarea
                                    placeholder="Your Message"
                                    rows="5"
                                    {...register("message", {
                                        required: "Message is required",
                                        minLength: { value: 10, message: "Message must be at least 10 characters" },
                                    })}
                                    className={`p-3 border rounded-lg w-full ${errors.message ? "border-red-500" : "border-gray-300"
                                        }`}
                                />
                                {errors.message && (
                                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="bg-Blue hover:bg-Blue-hover text-white font-semibold p-3 rounded-lg transition duration-300 flex items-center justify-center"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <div className="loader border-t-2 border-white w-6 h-6 rounded-full animate-spin"></div>
                                ) : (
                                    "Submit"
                                )}

                                <TiArrowRight className="text-xl" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </>

    );
};

export default ContactUs;
