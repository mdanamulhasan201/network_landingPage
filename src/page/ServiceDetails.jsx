import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import dataManagementImg from '../assets/servicesBg/datamanagementResize.jpg'
import AffiliateServicesImg from '../assets/servicesBg/Affiliate-ServicesResize.jpg'
import digitalworld from '../assets/servicesBg/digitalworld.png'
import data from '../assets/servicesBg/data.png'
import { FaCheckCircle } from "react-icons/fa";
const ServiceDetails = () => {
    const { slug } = useParams();

    const services = [
        {
            id: 1,
            slug: "data-management",
            title: "Data Management",
            subtitle: "Strategically planned, implemented & managed.",
            bannerImage: dataManagementImg,
            description: [
                {
                    descriptionTitle: "It seems like you're referencing data services from MCash Media. Could you clarify what exactly you need assistance with regarding the demographics, psychographics, or the type of data? If you're looking to integrate this information into a project, I can help guide you through the process!",
                    details: [
                        {
                            Title1: "Gathered from our own properties.",

                        },
                        {
                            Title2: "Collected from our partners' feeds."
                        }
                    ]
                }
            ],

            subContent: [
                {
                    title: "In the digital era, data is a powerful asset.",
                    description: "As data flows through our system in real-time, we add extra information to each record, making it more valuable to you. Our services are fully customized to meet the needs of each client. Our experts analyze the data thoroughly to deliver the best results. Everyone has data, but Diablo helps you understand it. We improve your data and help you make money from it using multi-channel marketing solutions.",
                    image: digitalworld,
                },
                [
                    {
                        title: "Ultimately, data is only valuable if you deeply understand the consumer",

                        subtitle: "We generate highly specific audiences across various sectors.",
                        audiences: [
                            {
                                data: "Financial, Retail, Household Products, Insurance, Debt, Legal, Disability, Auto, Health, Fitness, And so many others.",
                            },
                        ],
                    },
                ],
                [
                    {
                        titles: "We provide the best Data Management services",
                        descriptions: "We recognize that data isn’t just for measuring outcomes—it’s about leveraging intelligent systems to give your business predictive insights and a competitive edge. Our tools allow us to break down and analyze data to create highly focused audiences. With our proprietary reporting platform, we track performance metrics and revenue effectively.",
                        image: data,
                    },
                ],
            ],
            ourProcess: [
                { id: 1, title: "Evaluate & Assess our data sources" },
                { id: 2, title: "Strategically plan & implement" },
                { id: 3, title: "Manage & Optimize" },
                { id: 4, title: "Repeat" },
            ],
        },
        {
            id: 2,
            slug: "affiliate-services",
            title: "Affiliate Services",
            subtitle: "Connect to new audiences at scale.",
            bannerImage: AffiliateServicesImg,
            description: [
                {
                    descriptionTitle: "Expand your reach with our affiliate services.",
                    Title1: "Grow your audience",
                },
            ],
            subContent: [
                {
                    title: "Maximize your affiliate network.",
                    subTitle: "Achieve scalable growth.",
                    description: "We connect you to the right platforms and partners.",
                    image: "https://via.placeholder.com/400",
                },
            ],
            ourProcess: [
                { id: 1, title: "Identify potential partners" },
                { id: 2, title: "Set up tracking and reporting" },
                { id: 3, title: "Launch and optimize campaigns" },
            ],
        },
        {
            id: 3,
            slug: "legal-marketing",
            title: "Legal Marketing",
            subtitle: "Experience real growth with Facebook marketing.",
            bannerImage: "https://via.placeholder.com/600",
            description: [
                {
                    descriptionTitle: "Tailored marketing strategies for legal professionals.",
                    expertise: [
                        { details: "Mass Tort, Personal Injury, Criminal Defense Family" },
                    ],
                },
            ],
            subContent: [
                {
                    title: "Engage your audience with expert marketing.",
                    subTitle: "Your success is our priority.",
                    description: "We specialize in creating impactful campaigns.",
                    image: "https://via.placeholder.com/400",
                },
            ],
            ourProcess: [
                { id: 1, title: "Understand client needs" },
                { id: 2, title: "Design and implement campaigns" },
                { id: 3, title: "Track and analyze results" },
            ],
        },
    ];

    const service = services.find((service) => service.slug === slug);

    if (!service) {
        return (
            <div>
                <Helmet>
                    <title>Cash Media | Service Not Found</title>
                </Helmet>
                <h1>Service not found</h1>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>Cash Media | {service.title}</title>
                <meta name="description" content={service.subtitle} />
            </Helmet>

            <div className="bg-slate-50 ">
                <div className="relative w-full h-auto">
                    {/* Background Image */}
                    <img
                        src={service.bannerImage || "image not found"}
                        alt={service.title}
                        className="w-full h-96 object-cover"
                    />

                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex items-center bg-[#4144BB] bg-opacity-60 backdrop-blur-[3px]">
                        <div className="max-w-screen-xl px-5 sm:px-10 xl:px-5 w-full mx-auto ">
                            <div className="text-left font-heebo ">
                                <h1 className="uppercase font-heebo font-bold text-xl xl:text-2xl text-gray-300">Services</h1>
                                <h1 className="text-4xl md:text-5xl xl:text-6xl mb-4 mt-1 font-semibold text-white">{service.title}</h1>
                                <p className="text-lg text-white">{service.subtitle}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-screen-xl px-5 sm:px-10 xl:px-5 w-full mx-auto ">
                    {/* Description Section */}
                    <div className="my-14 max-w-screen-sm mx-auto">
                        {service.description.map((desc, index) => (
                            <div key={index} className="">
                                {desc.descriptionTitle && <p className="text-xl font-heebo leading-8 text-gray-600 mb-5">{desc.descriptionTitle}</p>}

                                {/* Display details as an ordered list */}
                                {desc.details && (
                                    <ol className="list-decimal pl-4">
                                        {desc.details.map((detail, detailIndex) => (
                                            <li key={detailIndex} className="text-xl text-[#000872] font-heebo font-semibold">
                                                {detail.Title1 && <p className="mb-2">{detail.Title1}</p>}
                                                {detail.Title2 && <p>{detail.Title2}</p>}
                                            </li>
                                        ))}
                                    </ol>
                                )}

                                {desc.expertise &&
                                    desc.expertise.map((item, idx) => (
                                        <p key={idx} className="ml-4">{item.details}</p>
                                    ))}
                            </div>
                        ))}
                    </div>



                    {/* Sub Content Section */}
                    <div>
                        {service.subContent.map((sub, index) =>
                            Array.isArray(sub) ? (
                                <div key={index} className=" my-14">
                                    {sub.map((item, idx) => (
                                        <div key={idx} className="mb-4 ">

                                            {item.title && <p className="text-3xl font-heebo text-center mb-4 font-semibold text-[#000872]">{item.title}</p>}

                                            {item.subtitle && <p className="text-lg my-5 text-center text-gray-600 font-heebo">{item.subtitle}</p>}

                                            <div className="max-w-screen-md mx-auto">
                                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 justify-center items-center">
                                                    {
                                                        item.audiences &&
                                                        item.audiences[0].data.split(", ").map((aud, audIdx) => (
                                                            <div key={audIdx} className="flex items-center space-x-2 ml-4">
                                                                {/* Checkmark Icon */}
                                                                <FaCheckCircle className="text-[#783FC7] text-xl" />
                                                                {/* Audience Text */}
                                                                <span className="text-[#000872] text-xl font-semibold">{aud}</span>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                            <div className="flex flex-col md:flex-row justify-between items-center gap-10 my-0 md:my-5">

                                                <div className="w-full md:w-5/12">
                                                    {
                                                        item.image && <img src={item.image} alt="service" className="w-full " />
                                                    }
                                                </div>

                                                <div className="w-full md:w-7/12">
                                                    <div >
                                                        {item.titles && <p className="text-2xl md:text-3xl font-heebo font-semibold mb-5 text-[#000872]"> {item.titles}</p>}
                                                    </div>
                                                    <div>
                                                        {item.descriptions && <p className="text-lg md:text-xl font-heebo leading-8 text-gray-600"> {item.descriptions}</p>}
                                                    </div>
                                                </div>

                                            </div>


                                            {item.audiences &&
                                                item.audiences.map((aud, audIdx) => (
                                                    <p key={audIdx} className="ml-4">{aud.title}</p>
                                                ))}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div key={index} className="mb-4">
                                    <div className="flex flex-col md:flex-row justify-between items-center">
                                        <div className="w-full md:w-1/2">
                                            {sub.title && <p className="text-2xl md:text-3xl font-heebo font-semibold mb-5 text-[#000872]"> {sub.title}</p>}
                                            {sub.description && <p className="text-lg md:text-xl font-heebo leading-8 text-gray-600"> {sub.description}</p>}
                                        </div>

                                        <div className="w-full md:w-1/2">
                                            {
                                                sub.image && <img src={sub.image} alt="service" className="w-full " />
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                    </div>

                    {/* Our Process Section */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Our Process</h2>
                        <ul className="list-disc pl-6">
                            {service.ourProcess.map((process) => (
                                <li key={process.id}>{process.title}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetails;
