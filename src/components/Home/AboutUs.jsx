import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const AboutUs = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: true, 
        });
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto px-4 py-16">
            <h1
                className="text-center font-bold font-heebo text-3xl text-[#000872] relative"
            >
                About Us
                <span className="block mx-auto mt-2 h-1 w-16 bg-[#000872] rounded-full"></span>
            </h1>
            <div className="mt-8">
                <h1
                    className="text-2xl xl:text-3xl font-heebo font-bold"
                    data-aos="fade-right" 
                >
                    Dedicated to Delivering Value
                </h1>
                <p
                    className="font-heebo text-lg mt-5"
                    data-aos="fade-up" 
                >
                    <span className="font-semibold">Cash Media</span> is a premier growth partner,
                    offering a strategic approach to performance marketing. As a dynamic and
                    results-oriented agency, we prioritize delivering tangible, data-driven
                    outcomes. Our team is composed of seasoned professionals with a business-focused
                    mindset, dedicated to driving your success with precision and expertise.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
