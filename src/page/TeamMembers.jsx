import { Helmet } from "react-helmet-async";
import bannerImg from "../assets/ourTeam/teambanner.jpg"


const TeamMembers = () => {
    return (
        <div >
            <Helmet>
                <title>Cash Media | Our Team</title>
            </Helmet>

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
                            <h1 className="uppercase font-heebo font-bold text-xl xl:text-2xl text-gray-300">Our Team</h1>
                            <h1 className="text-4xl md:text-5xl xl:text-6xl mb-4 mt-1 font-semibold text-[#F4C44D]">
                                Meet McashMedia
                            </h1>
                            <p className="text-lg lg:w-96 text-white">Clients trust us and stay for the relationships we build.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto px-4 py-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                    {/* Left Side */}
                    <div className="w-full md:w-5/12">
                        <p className="text-lg md:text-xl font-heebo leading-8 text-gray-600">
                            At Mcashmedia, we are a dynamic collective of affiliate marketing experts dedicated
                            to revolutionizing performance marketing. Our team thrives on creativity,
                            innovation, and a results-driven approach to connecting brands with their ideal audiences.
                            <br />
                            <br />
                            With extensive expertise in social, native, email, and SMS traffic, we pride ourselves on
                            delivering high-quality leads and crafting tailored campaigns that exceed expectations.
                            Mcashmedia is more than a marketing company—it’s a partnership built on trust, precision,
                            and a shared vision for success.
                        </p>
                    </div>
                    {/* Right Side */}
                    <div className="w-full md:w-7/12">
                        <div className="flex justify-center md:justify-end">
                            <img src={bannerImg} alt="Our Team Banner" />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default TeamMembers;