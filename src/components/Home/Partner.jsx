import Slider from "react-slick";
import { motion } from "framer-motion";
import partner1 from "../../assets/partner1.webp";

const Partner = () => {
    const partners = [
        { id: 1, image: partner1, alt: "partner1" },
        { id: 2, image: partner1, alt: "partner2" },
        { id: 3, image: partner1, alt: "partner3" },
        { id: 4, image: partner1, alt: "partner4" },
        { id: 5, image: partner1, alt: "partner5" },
        { id: 6, image: partner1, alt: "partner6" },
        { id: 7, image: partner1, alt: "partner7" },
        { id: 8, image: partner1, alt: "partner8" },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    };

    // Animation variants for fading
    const fadeVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 1 } },
        exit: { opacity: 0, transition: { duration: 0.5 } },
    };

    return (
        <div className="">
            <div className="max-w-screen-xl mx-auto px-4 py-12">
            <h1 className="text-center font-bold font-heebo text-3xl text-[#000872] relative">
                Our Partner
                <span className="block mx-auto mt-2 h-1 w-16 bg-[#000872] rounded-full"></span>
            </h1>
            <div className="mt-8">
                <Slider {...settings}>
                    {partners.map((partner) => (
                        <motion.div
                            key={partner.id}
                            variants={fadeVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="p-4"
                        >
                            <img
                                src={partner.image}
                                alt={partner.alt}
                                className="mx-auto h-20 w-20 object-contain"
                            />
                        </motion.div>
                    ))}
                </Slider>
            </div>
        </div>
        </div>
    );
};

export default Partner;
