import Slider from "react-slick";
import { motion } from "framer-motion";
// import partner1 from "../../assets/partner1.webp";
import partner1 from "../../assets/partner/partner1.png";
import partner2 from "../../assets/partner/partner2.png";
import partner3 from "../../assets/partner/partner3.png";
import partner4 from "../../assets/partner/partner4.png";
import partner5 from "../../assets/partner/partner5.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Partner = () => {

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

    const partners = [
        { id: 1, image: partner1, alt: "partner1" },
        { id: 2, image: partner2, alt: "partner2" },
        { id: 3, image: partner3, alt: "partner3" },
        { id: 4, image: partner4, alt: "partner4" },
        { id: 5, image: partner5, alt: "partner5" },
        { id: 6, image: partner2, alt: "partner2" },
        { id: 7, image: partner3, alt: "partner3" },
        { id: 8, image: partner4, alt: "partner4" },
    ];

    const settings = {
        dots: false,
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
                    slidesToShow: 5,
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

        <div className="max-w-screen-xl mx-auto px-8 py-16 ">
            <h1
                className="text-center font-bold font-heebo text-3xl text-titleColor relative"
                data-aos="fade-down"
            >
                Our Partners
                <span
                    className="block mx-auto mt-2 h-1 w-16 bg-titleColor rounded-full"
                    data-aos="fade-up"
                ></span>
            </h1>
            <div className="mt-8" data-aos="fade-up">
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
                                className="mx-auto h-32 w-32 object-contain"
                            />
                        </motion.div>
                    ))}
                </Slider>
            </div>
        </div>

    );
};

export default Partner;
