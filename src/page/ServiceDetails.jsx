import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import dataManagementImg from '../assets/servicesBg/datamanagementResize.jpg'
import AffiliateServicesImg from '../assets/servicesBg/Affiliate-ServicesResize.jpg'
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
                    descriptionTitle: "We provide the best Data Management services",
                    Title1: "This is the best",
                    Title2: "sdufhgs",
                },
            ],
            subContent: [
                {
                    title: "In the digital world, data is power.",
                    subTitle: "We provide the best Data Management services",
                    description: "We provide the best Data Management services",
                    image: "https://via.placeholder.com/400",
                },
                [
                    {
                        title: "After all, data is only relevant if you fully understand the Consumer.",
                        subtitle: "We create highly targeted audiences with a multitude of verticals.",
                        audiences: [
                            {
                                title: "Financial, Retail, Household Products, Insurance, Debt, Legal, Disability, Auto, Health, Fitness, And so many others.",
                            },
                        ],
                    },
                ],
                [
                    {
                        title: "We provide the best Data Management services",
                        description: "We provide the best Data Management services",
                        image: "https://via.placeholder.com/400",
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

            <div className=" ">
                <div className="relative w-full h-auto">
                    {/* Background Image */}
                    <img
                        src={service.bannerImage || "image not found"}
                        alt={service.title}
                        className="w-full h-96 object-cover"
                    />

                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex items-center bg-[#181E2C] bg-opacity-70 backdrop-blur-[4px]">
                        <div className="max-w-screen-xl w-full mx-auto ">
                            <div className="text-left">
                                <h1 className="uppercase font-heebo font-bold text-2xl text-[#F029C9]">Services</h1>
                                <h1 className="text-3xl font-bold mb-4 text-white">{service.title}</h1>
                                <p className="text-lg mb-4 text-white">{service.subtitle}</p>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Description Section */}
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Description</h2>
                    {service.description.map((desc, index) => (
                        <div key={index} className="mb-4">
                            {desc.descriptionTitle && <p><strong>Title:</strong> {desc.descriptionTitle}</p>}
                            {desc.Title1 && <p><strong>Point 1:</strong> {desc.Title1}</p>}
                            {desc.Title2 && <p><strong>Point 2:</strong> {desc.Title2}</p>}
                            {desc.expertise &&
                                desc.expertise.map((item, idx) => (
                                    <p key={idx} className="ml-4">- {item.details}</p>
                                ))}
                        </div>
                    ))}
                </div>

                {/* Sub Content Section */}
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Sub Content</h2>
                    {service.subContent.map((sub, index) =>
                        Array.isArray(sub) ? (
                            <div key={index} className="ml-4">
                                {sub.map((item, idx) => (
                                    <div key={idx} className="mb-4">
                                        {item.title && <p><strong>Title:</strong> {item.title}</p>}
                                        {item.subtitle && <p><strong>Subtitle:</strong> {item.subtitle}</p>}
                                        {item.description && <p><strong>Description:</strong> {item.description}</p>}
                                        {item.audiences &&
                                            item.audiences.map((aud, audIdx) => (
                                                <p key={audIdx} className="ml-4">- {aud.title}</p>
                                            ))}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div key={index} className="mb-4">
                                {sub.title && <p><strong>Title:</strong> {sub.title}</p>}
                                {sub.subTitle && <p><strong>Subtitle:</strong> {sub.subTitle}</p>}
                                {sub.description && <p><strong>Description:</strong> {sub.description}</p>}
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
        </>
    );
};

export default ServiceDetails;
