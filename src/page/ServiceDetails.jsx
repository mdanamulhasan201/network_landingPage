import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import dataManagementImg from '../assets/servicesBg/datamanagementResize.jpg'
import digitalworld from '../assets/servicesBg/digitalworld.png'
import AffiliateServicesImg from '../assets/servicesBg/Affiliate-ServicesResize.jpg'
import Legal_MarketingImg from '../assets/servicesBg/Legal-MarketingResize.jpg'
import lead_generationImg from '../assets/servicesBg/LeadGenerationResize.jpg'
import AffiliateMarketingImg from '../assets/servicesBg/affiliate-services/Marketingconsulting.png'
import AffiliateMarketing from '../assets/servicesBg/affiliate-services/campaign.png'
import facebookHelps from '../assets/servicesBg/legal/facebook.png'
import lawsImage from '../assets/servicesBg/legal/law.png'
import data from '../assets/servicesBg/data.png'

import searchingImg from '../assets/servicesBg/lead/finding.png'
import qualityImg from '../assets/servicesBg/lead/quality.png'
import marketingImage from '../assets/servicesBg/media/maketing.png'
import searchingImgs from '../assets/servicesBg/media/searchingImg.png'

import { FaCheckCircle, FaCheckSquare } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import Nav from "../components/shared/Nav";
import ContactUs from "../components/Home/ContactUs";
import Footer from "../components/shared/Footer";



const ServiceDetails = () => {
    const { slug } = useParams();
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

    const services = [
        {
            id: 1,
            slug: "data-management",
            title: "Data Management",
            subtitle: "Strategically planned, implemented & managed.",
            bannerImage: dataManagementImg,

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
                { id: 2, title: "Compliance review" },
                { id: 3, title: "Design data strategy" },
                { id: 4, title: "Receive data via API in real-time" },
                { id: 5, title: "Hygiene emails and postal addresses" },
                { id: 6, title: "Append demo’s and behaviors" },
                { id: 7, title: "Monetize data using multi-channel marketing" },
                { id: 8, title: "Analyze effectiveness using proprietary reporting tools" },
                { id: 9, title: "Feedback & Optimize" },
            ],
        },
        {
            id: 2,
            slug: "affiliate-services",
            title: "Affiliate Services",
            subtitle: "Strategically planned, implemented & managed.",
            bannerImage: AffiliateServicesImg,
            subContent: [
                {
                    title: "We deliver performance-based results through data-driven strategies and innovative affiliate management tools.",
                    description: "We create campaigns that are strategically designed to connect with target audiences and achieve the specific growth goals of our advertising partners. With over 15 years of experience, we’ve successfully built and managed affiliate programs across a wide range of industries. Our expertise, innovative tools, and advanced technology are here to take your program to the next level.",
                    image: AffiliateMarketingImg,
                },
                [
                    {
                        titles: "Here's how we bring it to life.",
                        descriptions: "We take a strategic approach to affiliate marketing, helping you reach new customers while boosting your brand's credibility. Our team of experts manages all aspects of your affiliate program, offering best practices, valuable insights, and expanding your audience reach. From tracking click-to-conversion metrics and optimizing landing pages to providing creative recommendations, growth strategies, and ensuring affiliates are paid promptly, MCash Media takes care of the daily management of your affiliate program. Over the years, we’ve built strong, trusted relationships with our network partners, minimizing fraud and lowering customer acquisition costs through streamlined processes. These efficiencies are the foundation of our long-lasting partnerships that stand the test of time.",
                        image: AffiliateMarketing,
                    },
                ],
            ],
            ourProcess: [
                { id: 1, title: "Affiliate Program Setup" },
                { id: 2, title: "Affiliate Recruitment" },
                { id: 3, title: "Campaign Launch" },
                { id: 4, title: "Ongoing Affiliate Support" },
                { id: 5, title: "Optimization & Growth" },
                { id: 6, title: "Affiliate Payouts" },
                { id: 7, title: "Fraud Prevention" },
                { id: 8, title: "Detailed Reporting and Performance Analysis" },
                { id: 9, title: "Feedback & Optimize" },
            ],
        },
        {
            id: 3,
            slug: "legal-marketing",
            title: "Legal Marketing",
            subtitle: "Driving Growth and Building Trust for Legal Professionals",
            bannerImage: Legal_MarketingImg,
            description: [
                {
                    descriptionTitle: "Areas of Expertise:",
                    details: [
                        {
                            laws: "Medical Malpractice, Mass Tort , Personal Injury, Social Security Disability, Workers’ Compensation",
                        },

                    ]
                }
            ],

            subContent: [
                {
                    title: "We leverage Facebook to help your law firm attract more qualified clients effectively.",
                    description: "Our targeted Facebook marketing strategies focus on connecting your law firm with potential clients who need your expertise. By utilizing advanced audience targeting and compelling ad creatives, we ensure your message reaches the right people at the right time.",
                    image: facebookHelps,
                },

                [
                    {
                        titles: "At Law Scout, we prioritize trust in our partnerships, delivering the results essential for your firm’s growth and success.",
                        descriptions: "Our services empower you to track your ROI with clarity, showcasing the effectiveness of our campaigns. At Law Scout, we tailor each campaign to align with your unique needs—whether it’s your practice area, location, statute of limitations, operating hours, or other specifics. We’re dedicated to building genuine relationships with our clients and delivering personalized strategies that reflect their legal expertise. With a passion for what we do, our team takes pride in connecting individuals with the legal assistance they deserve, keeping your firm ahead of the competition.",
                        image: lawsImage,
                    },
                ],
            ]
        },
        {
            id: 4,
            slug: "lead-generation",
            title: "Lead Generation",
            subtitle: "Focus on quality leads, not mere traffic.",
            bannerImage: lead_generationImg,
            subContent: [
                {
                    title: "It’s not about quantity; it’s all about quality.",
                    description: "Our success is measured by both quality and volume, and we consistently deliver. We keep you involved throughout the entire process, providing full transparency into how leads are generated and the impact of our strategies. This approach is far more cost-effective than simply paying for additional traffic.",
                    image: searchingImg,
                },

                [
                    {
                        titles: "Clicks and impressions are valuable, but qualified leads are what truly matter.",
                        descriptions: "Targeted lead generation campaigns are crucial for business growth, but executing them effectively requires expertise. What sets Diablo apart is our understanding that not everyone is a lead. Many businesses make the mistake of casting a wide net, but we focus on reaching only those genuinely interested in your offering. As a performance agency, we bridge the gap between these leads and your business by auditing, identifying the ideal audience, and using the best technologies to capture them.",
                        image: qualityImg,
                    },
                ],

            ],

            ourProcess: [
                { id: 1, title: "Identify target audience" },
                { id: 2, title: "Design strategy" },
                { id: 3, title: "Allocate budget" },
                { id: 4, title: "Launch campaign" },
                { id: 5, title: "Monitor & Respond" },
                { id: 6, title: "Analyze effectiveness" },
                { id: 7, title: "Optimize" },
                { id: 8, title: "Scale High-Converting Campaigns for Greater Impact" },
                { id: 9, title: "Expand Effective Campaign" },
            ],
        },
        {
            id: 5,
            slug: "media-buying",
            title: "Media Buying",
            subtitle: "Carefully designed, executed, and overseen.",
            bannerImage: lead_generationImg,
            subContent: [
                {
                    title: "We deliver results with advanced technology, in-house media buying, and premium inventory access.",
                    description: "We leverage actionable insights from key data to drive decision-making and continuously optimize performance. By working closely with our clients, we ensure that both successful strategies and areas needing improvement are identified. This collaboration allows us to refine and align our approach, making sure it stays focused on achieving the client’s objectives and delivering measurable results.",
                    image: marketingImage,
                },

                [
                    {
                        titles: "We prioritize complete transparency in our services.",
                        descriptions: "How do we achieve this? Our clients get access to a dashboard with detailed spend reporting directly from Facebook, showing exactly how every dollar is spent—no hidden fees, no surprises. Our expert team ensures fast campaign builds while maintaining full customization options, including landing pages, form questions, ad copy, and imagery tailored to the client’s needs. Additionally, we offer the option to generate both leads and calls by adding a phone number to the form at no extra cost.",
                        image: searchingImgs,
                    },
                ],

            ],

            ourProcess: [
                { id: 1, title: "Campaign Performance & ROI Evaluation" },
                { id: 2, title: "Research competitors" },
                { id: 3, title: "Design buying strategy" },
                { id: 4, title: "Allocate budget" },
                { id: 5, title: "Launch campaign" },
                { id: 6, title: "Evaluate the Performance and Impact of Our Campaigns" },
                { id: 7, title: "Optimize" },
                { id: 8, title: "Assessing the Success and Efficiency of Marketing Strategies" },
                { id: 9, title: "Identify target audience" },
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

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (index) => ({
            opacity: 1,
            y: 0,
            transition: { delay: index * 0.2, duration: 0.5 },
        }),
    };

    return (
        <>
            <Helmet>
                <title>Cash Media | {service.title}</title>
                <meta name="description" content={service.subtitle} />
            </Helmet>
            <Nav />

            <div className="bg-slate-50 ">
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
                                <h1 className="uppercase font-heebo font-bold text-xl xl:text-2xl text-gray-300">Services</h1>
                                <h1 className="text-4xl md:text-5xl xl:text-6xl mb-4 mt-1 font-semibold text-white">
                                    {service.title}
                                </h1>
                                <p className="text-lg text-white">{service.subtitle}</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="max-w-screen-xl px-5 sm:px-10 xl:px-5 w-full mx-auto ">


                    {/* Description Section */}
                    <div className="my-14" data-aos="fade-up">
                        {service.description && service.description.map((desc, index) => (
                            <div key={index}>
                                {/* Description Title */}
                                {desc.descriptionTitle && (
                                    <p className="text-2xl font-bold text-titleColor  mb-5 uppercase text-center">
                                        {desc.descriptionTitle}
                                    </p>
                                )}

                                {/* Expertise Cards */}
                                {desc.details && (
                                    <div className="flex flex-wrap justify-center gap-5">
                                        {desc.details.map((detail, detailIndex) =>
                                            detail.laws &&
                                            detail.laws.split(',').map((law, lawIndex) => (
                                                <motion.div
                                                    key={`${detailIndex}-${lawIndex}`}
                                                    custom={lawIndex}
                                                    variants={cardVariants}
                                                    initial="hidden"
                                                    whileInView="visible"
                                                    viewport={{ once: true }}
                                                    className="flex flex-col items-center justify-center w-52 h-32 bg-white shadow-lg rounded-md p-4"
                                                >
                                                    {/* Icon */}
                                                    <FaCheckSquare className="text-[#783FC7] text-3xl mb-2" />
                                                    {/* Expertise Text */}
                                                    <p className="text-center text-titleColor font-heebo font-semibold">
                                                        {law.trim()}
                                                    </p>
                                                </motion.div>
                                            ))
                                        )}
                                    </div>
                                )}
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

                                            {item.title && <p className="text-3xl font-heebo text-center mb-4 font-semibold text-titleColor">{item.title}</p>}

                                            {item.subtitle && <p className="text-lg my-5 text-center text-gray-600 font-heebo">{item.subtitle}</p>}

                                            <div className="max-w-screen-md mx-auto" data-aos="fade-up">
                                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 justify-center items-center">
                                                    {
                                                        item.audiences &&
                                                        item.audiences[0].data.split(", ").map((aud, audIdx) => (
                                                            <div key={audIdx} className="flex items-center space-x-2 ml-4">
                                                                {/* Checkmark Icon */}
                                                                <FaCheckCircle className="text-[#783FC7] text-xl" />
                                                                {/* Audience Text */}
                                                                <span className="text-titleColor text-xl font-semibold">{aud}</span>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                            <div className="flex flex-col md:flex-row justify-between items-center gap-10 my-0 md:my-5">

                                                <div className="w-full md:w-5/12" data-aos="fade-up">
                                                    {
                                                        item.image && <img src={item.image} alt="service" className="w-full " />
                                                    }
                                                </div>

                                                <div className="w-full md:w-7/12" data-aos="fade-up">
                                                    <div >
                                                        {item.titles && <p className="text-2xl md:text-3xl font-heebo font-semibold mb-5 text-titleColor"> {item.titles}</p>}
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
                                    <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                                        <div className="w-full md:w-1/2" data-aos="fade-up">
                                            {sub.title && <p className="text-2xl md:text-3xl font-heebo font-semibold mb-5 text-titleColor"> {sub.title}</p>}
                                            {sub.description && <p className="text-lg md:text-xl font-heebo leading-8 text-gray-600"> {sub.description}</p>}
                                        </div>

                                        <div className="w-full md:w-1/2" data-aos="fade-up">
                                            {
                                                sub.image && <img src={sub.image} alt="service" className="w-full " />
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>

                {/* Our Process Section */}

                {
                    service.ourProcess && (
                        <div className="bg-slate-100">
                            <div className=" max-w-screen-xl mx-auto px-5 sm:px-10 xl:px-5">
                                <div className="flex flex-col items-center justify-center  py-20">
                                    <h2 className="text-2xl text-center md:text-3xl font-heebo font-semibold mb-10 text-titleColor">
                                        Our Process
                                    </h2>
                                    <div className="w-full flex justify-center" data-aos="fade-up">
                                        <ol className="list-decimal pl-4 grid grid-cols-1 md:grid-cols-2 gap-y-4">
                                            {service.ourProcess && service.ourProcess.map((process) => (
                                                <li
                                                    key={process.id}
                                                    className="text-xl font-heebo font-semibold text-left"
                                                >
                                                    {process.title}
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

            <ContactUs />
            <Footer />
        </>
    );
};

export default ServiceDetails;
