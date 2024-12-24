import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(true);
        isTermsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setIsTermsModalOpen(false);
    };
    const handleTermsModalOpen = () => {
        setIsTermsModalOpen(true);
    };

    // const handleTermsModalClose = () => {
    //     setIsModalOpen(false);
    //     setIsTermsModalOpen(false);
    // };

    return (
        <div className="py-5 bg-[#004AAD] border-t border-gray-500  flex flex-col md:flex-row gap-2 justify-between items-center px-5">
            <p className="font-heebo text-gray-300">© {currentYear} McashMedia. All rights reserved.</p>

            <ul className="flex items-center gap-5 font-heebo text-gray-300">
                <li>
                    <button
                        onClick={handleModalOpen}
                        className="hover:underline hover:text-white transform duration-300"
                    >
                        Privacy Policy
                    </button>
                </li>
                <li>
                    <button
                        onClick={handleTermsModalOpen}
                        className="hover:underline hover:text-white transform duration-300"
                    >
                        Terms of Use
                    </button>
                </li>
            </ul>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="bg-white rounded-lg max-w-xl w-full max-h-[90vh] overflow-y-auto flex flex-col"
                        >
                            {/* Sticky Header */}
                            <div className="sticky top-0 bg-white z-10 flex justify-between items-center border-b p-4">
                                <h2 className="text-xl text-black font-heebo font-bold">Privacy Policy</h2>
                                <button
                                    onClick={handleModalClose}
                                    className="px-4 py-2 bg-[#004AAD] text-white rounded hover:bg-[#003580] transform duration-300"
                                >
                                    <IoClose />
                                </button>
                            </div>

                            {/* Scrollable Content */}
                            <div className="p-4 space-y-4 text-gray-600 font-heebo">
                                <p className="font-heebo text-md">
                                    At <span className="font-bold">Mcashmedia</span>, your privacy is very important to us. We are headquartered in USA. We are dedicated to providing you with superior service while protecting your privacy and safeguarding your personal information.

                                </p>
                                <p className="font-semibold text-md">Notice at Collection</p>
                                <p>In order to provide our services, we collect the following Personal Information from our advertisers and affiliates:</p>

                                <ul className="list-disc pl-5 flex flex-col gap-2">
                                    <li>Contact Information (name, email, phone number, skype handle, address)</li>
                                    <li>Location information</li>
                                    <li>Internet Protocol addresses (IPs) and domain names</li>
                                    <li>Browser Type / Operating System</li>
                                    <li>Financial information and transaction history</li>
                                    <li>Unique identifiers associated with clicks on ads shown by affiliates</li>
                                    <li>(for Affiliates only) Information about your performance (clicks generated, leads generated, transactions completed)</li>
                                </ul>

                                <p className="font-heebo text-md">We also collect Internet Protocol addresses (IPs) and User Agent Data (information about your browser and operating system) from people who click on the advertisements we have placed with our affiliates so we can track unique traffic and to identify fraud. Under the GDPR, the lawful basis for collecting this information is that we have a legitimate commercial interest in determining how many unique users click on our advisements and preventing fraud. No more identifying information is collected about this group and so we cannot associate IPs with an identifiable individual.</p>

                                <p className="font-heebo text-md">We may “sell” or “share” any of these categories of Personal Information, except information about Affiliates’ performance, with advertisers who engage Mcashmedia to help them run advertising campaigns. Click here to request to opt out of the sale or sharing of your Personal Information. We do not knowingly sell or share Personal Information about individuals who are under the age of 16. Please see the “Retention of Personal Information” section below for further details about how long we retain Personal Information.</p>

                                <p className="font-semibold text-md">Use and Disclosure of Personal Information</p>

                                <p className="font-heebo text-md">We use Personal Information in a number of ways. For advertisers, we use it to communicate with you about our products, services, and promotions and to invoice you. For affiliates, we use this information to scrutinise applicants for fraud, communicate with you about our products, services, and promotions, track traffic, and to make payments to you. Under the GDPR, the lawful basis for collecting this information is that it is necessary for the performance of the contracts we have entered into and, for the purposes of scrutinising applicants for fraud, our legitimate interests in preventing fraud. We do not sell Affiliates’ Personal Information to third parties.</p>

                                <p className="font-heebo text-md">We also share your Personal Information with our business partners , service providers and as required by law.</p>

                                <p className="font-semibold text-md">Retention of Personal Information</p>

                                <p className="font-heebo text-md">We retain Personal Information about our affiliates indefinitely. We do this so that we can scrutinize prospective affiliates against all our known affiliates for fraud prevention purposes. We retain Personal Information about our advertisers for ten years. We retain IPs for ten years .</p>

                                <p className="font-heebo text-md">We store your Personal Information in Canada or with one of our trusted hosting partners. Our hosting partners store your Personal Information either in Canada, the European Union or a jurisdiction with adequate protection as determined by the European Commission under the terms of the GDPR.</p>

                                <p className="font-semibold text-md">Security of Personal Information</p>

                                <p className="font-heebo text-md">We protect personal information from loss or theft, unauthorized access, use or disclosure, modification or destruction through appropriate technical and organizational measures to ensure a level of security appropriate to the risk.
                                </p>

                                <p>Our hosting partners and sub-processors are required to agree to the mandatory sub-processing contractual terms under the GDPR. The terms of these agreements include the sub-processor's obligation to:</p>

                                <ul className="list-disc pl-5 flex flex-col gap-2">
                                    <li>Keep your Personal Information confidential;</li>
                                    <li>Process your Personal Information only as we direct them, and;</li>
                                    <li>Maintain appropriate technical and organizational measures to safeguard your Personal Information.
                                        Employees are governed by strict standards and policies to ensure that Personal Information is secure and treated with the utmost care and respect.</li>
                                </ul>

                                <p className="font-semibold text-md">Keeping Information Accurate and Your Data Subject Rights</p>
                                <p className="font-heebo text-md">It is important that your Personal Information is accurate and complete. Having accurate information about you enables us to give you the best possible service. You have the right to request to access, verify and amend the information we have about you. We rely on you to keep us informed of any changes, such as a change of address, telephone number or any other circumstances – you simply edit this in your profile. You also have the right to withdraw any consent you provided to us to process your personal information and to lodge a complaint with the applicable data protection authority if you believe we are processing your personal information in a non-compliant manner.</p>

                                <p className="font-semibold text-md">Cookies</p>

                                <p className="font-heebo text-md"><span className="font-semibold text-md">Mcashmedia</span> may collect user information from its websites (for example, via cookies which are alphanumeric identifiers transmitted from a website to a visitor’s browser and IP address). This information is used solely for enabling us to provide you with a customized online experience and to find ways to improve our site. Although cookies are widely used, it may be possible to disable cookies via your browser settings. However, in so doing, some websites may not function properly or optimally.</p>

                                <p className="font-semibold text-md">Definition of Personal Information</p>
                                <p className="font-heebo text-md">"Personal Information" is defined in Canada's Personal Information Protection and Electronic Documents Act, S.C. 2000, c. 5 ("PIPEDA"), as information about an identifiable individual.</p>

                                <p className="font-heebo text-md">"Personal Data" is defined in the European General Data Protection Regulation ("GDPR"), as information relating to an identified or identifiable natural person; an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person.</p>

                                <p className="font-heebo text-md">In our privacy policy, we use the term "Personal Information" to mean both Personal Information as defined by PIPEDA and Personal Data as defined by the GDPR.</p>

                                <p className="font-semibold text-md">Your Rights</p>

                                <p className="font-semibold text-md">Depending on your country and state of residence, you may have the right to:</p>
                                <ul className="list-disc pl-5 flex flex-col gap-2">
                                    <li>Access your personal information by making a subject access request</li>
                                    <li>Rectification, erasure or restriction of your information where this is justified</li>
                                    <li>Object to the processing of your information where this is justified</li>
                                    <li>Opt out of the “sale” or “sharing” (as those terms are defined under or your Personal Information)</li>
                                    <li>Data portability</li>
                                </ul>
                                <p className="font-semibold text-md">To exercise your rights, please contact our Data Protection Officer:</p>

                                <div>
                                    <h1 className="font-semibold text-md">Mcashmedia</h1>
                                    <p className="font-heebo text-md">1900 Olevia St, Jacksonville, FL 32207</p>
                                    <p className="font-heebo text-md">privacy@mcashmedia.com</p>
                                    <p className="font-heebo text-md">+1-315-694-2852</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Terms Modal */}
            <AnimatePresence>
                {isTermsModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="bg-white rounded-lg max-w-xl w-full max-h-[90vh] overflow-y-auto flex flex-col"
                        >
                            {/* Sticky Header */}
                            <div className="sticky top-0 bg-white z-10 flex justify-between items-center border-b p-4">
                                <h2 className="text-xl text-black font-heebo font-bold">Terms of Use</h2>
                                <button
                                    onClick={handleModalClose}
                                    className="px-4 py-2 bg-[#004AAD] text-white rounded hover:bg-[#003580] transform duration-300"
                                >
                                    <IoClose />
                                </button>
                            </div>

                            {/* Scrollable Content */}
                            <div className="p-4 space-y-4 text-gray-600 font-heebo">
                                <p className="font-heebo text-md">
                                    By accessing this website we assume you accept these terms and conditions. Do not continue to use Mcashmedia if you do not agree to take all of the terms and conditions stated on this page.
                                </p>
                                <p className="font-semibold text-md">Cookies</p>
                                <p className="font-heebo text-md">
                                    We employ the use of cookies. By accessing Mcashmedia, you agreed to use cookies in agreement with the Mcashmedia's Privacy Policy.
                                </p>
                                <p className="font-heebo text-md">
                                    Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
                                </p>
                                <p className="font-semibold text-md">License</p>
                                <p className="font-heebo text-md">
                                    Unless otherwise stated, Mcashmedia and/or its licensors own the intellectual property rights for all material on Mcashmedia. All intellectual property rights are reserved. You may access this from Mcashmedia for your own personal use subjected to restrictions set in these terms and conditions.
                                </p>

                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Footer;
