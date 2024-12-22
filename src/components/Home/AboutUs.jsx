import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


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
        <div className="max-w-screen-xl mx-auto px-4 py-16 ">


            {/* Title Section */}
            <h1
                className="text-center font-bold font-heebo text-3xl text-titleColor relative"
                data-aos="fade-down"
            >
                About Us
                <span
                    className="block mx-auto mt-2 h-1 w-16 bg-titleColor rounded-full"
                    data-aos="fade-up"
                ></span>
            </h1>

            {/* Content Section */}
            <div className="mt-8 text-center md:text-start" data-aos="fade-up">
                <h1 className="text-2xl xl:text-3xl font-heebo font-bold">
                    Dedicated to Delivering Value
                </h1>
                <p className="font-heebo text-lg mt-5">
                    <span className="font-semibold">MCash Media</span>  stands as a leading growth partner, taking a strategic approach to performance marketing. As a results-driven and dynamic agency, we focus on delivering measurable, data-backed results. Our team of experienced professionals brings a business-oriented perspective, committed to driving your success with accuracy and expertise.
                    To run a successful performance marketing campaign, delivering the right message through the right channels is key. Whether you aim to acquire new customers, generate leads, or drive meaningful customer actions, we provide the tools, expertise, and talent to achieve your goals.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
