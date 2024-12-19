import React from 'react';

const AboutUs = () => {
    return (
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
    );
};

export default AboutUs;