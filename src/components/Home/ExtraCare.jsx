import { useEffect } from "react";
import support from "../../assets/support.svg";
import AOS from "aos";
import "aos/dist/aos.css";
const ExtraCare = () => {
   
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
        <div className="max-w-screen-xl mx-auto px-4 py-16">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
                {/* Left side */}
                <div className="w-full lg:w-7/12 mx-auto text-center lg:text-left" data-aos="fade-right">
                    <h1 className="text-2xl xl:text-3xl font-heebo font-bold">
                        We go beyond the ordinary, showing true commitment and care.
                    </h1>
                    <p className="font-heebo text-lg mt-5">
                        Explore our values and history, meet the passionate team behind Diablo, and find out how you can become a part of our journey!
                    </p>
                </div>

                {/* Right side */}
                <div className="w-full lg:w-5/12 mx-auto" data-aos="fade-left">
                    <div className="flex justify-center lg:justify-end items-center">
                        <img src={support} alt="Support" className="w-full max-w-full h-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraCare;
