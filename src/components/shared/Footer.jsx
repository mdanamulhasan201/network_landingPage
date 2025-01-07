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
            <p className="font-heebo text-gray-300">© {currentYear} AffClickZen. All rights reserved.</p>

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

                                <p className="font-semibold text-md font-heebo">EFFECTIVE 8/13/2023</p>
                                <p className="font-heebo text-md">
                                    THIS AFFILIATE AGREEMENT (the "Agreement"), together with any amendments, are entered into by and between mrge BC Advertising Inc. dba Mcashmedia ("Mcashmedia"), and the applying Party submitting the Application For Affiliate Status (the "Affiliate"), also referred to herein jointly as the Parties ("Parties", each a "Party"). This Affiliate Agreement supplements all other Campaign Terms subsequently agreed to by the Affiliate.
                                </p>
                                <p className="font-heebo text-md ">

                                    WHEREAS, Mcashmedia and Affiliate desire to provide for the terms and conditions of this Affiliate Agreement as more specifically set forth herein;
                                </p>
                                <p className="font-semibold text-md font-heebo">THEREFORE, the Parties agree to be legally bound as follows:</p>

                                <p className="font-semibold text-md font-heebo">1. Definitions.</p>
                                <ul className=" pl-5 flex flex-col gap-2 font-heebo">

                                    <li><strong>1.1. "Opt-in" or "Opted-in":</strong> Means that the consumer has made an active, affirmative choice to receive Ads from the Affiliate.</li>
                                    <li><strong>1.2. "User":</strong> Means any person using the Internet.</li>
                                    <li><strong>1.3. "Action":</strong> Means a User's completion of an action (such as a click, sale, lead, or call) defined by the Advertiser or Mcashmedia.</li>
                                    <li><strong>1.4. "Network":</strong> Means the advertising Network operated by Mcashmedia, which is made up of Affiliates and Advertisers.</li>
                                    <li><strong>1.5. "Advertiser":</strong> Means the advertiser, Advertiser, or advertising agency providing advertisements to Mcashmedia for use by the Affiliate.</li>
                                    <li><strong>1.6. "Ad":</strong> Means the advertisement in the form of graphics and/or text supplied to Mcashmedia for inclusion in the Mcashmedia Network and to be made available for Affiliate use.</li>
                                    <li><strong>1.7. "Spam":</strong> Means unsolicited bulk email where recipients have not agreed in advance to receive Ads.</li>
                                    <li><strong>1.8. "Campaign Terms":</strong> Means the specific guidelines for each Advertiser campaign as listed in the Mcashmedia Network.</li>
                                    <li><strong>1.9. "Applicable Privacy Laws":</strong> All applicable laws, statutes, and regulations (“Laws”) designed to protect the privacy and data rights of individuals, and any legislation or regulations adopted to implement, amend, or replace such Laws, including the European Union General Data Protection Regulation ("GDPR"), the European Union Directive on Privacy and Electronic Communications (the ePrivacy directive) and any local implementing laws; USA’s Personal Information Protection and electronic Documents Act (“PIPEDA”) and any provincial legislation for which an exempting order has been granted; and Section 5 of the Federal Trade Commission Act and state laws prohibiting unfair or deceptive acts or practices, the Children’s Online Privacy Protection Act, the California Consumer Privacy Act of 2018, the Colorado Privacy Act, and similar comprehensive consumer privacy Laws.</li>
                                </ul>

                                <p className="font-semibold text-md font-heebo">2. Amendments.</p>
                                <ul className=" pl-5 flex flex-col gap-2 font-heebo">
                                    <li><strong>2.1.</strong> From time to time, Mcashmedia may amend, replace or supplement the Agreement, including but not limited to changing Advertiser payouts, by posting an updated Agreement or Campaign Terms on the Mcashmedia website, and it shall be deemed effective immediately unless otherwise noted, and Affiliate will be deemed to have consented to, and agreed to be bound by, the updated Agreement or Campaign Terms. It is the responsibility of the Affiliate to read and keep up to date with the Agreement and Campaign Terms with or without notice of change from Mcashmedia.
                                    </li>
                                </ul>
                                <p className="font-semibold text-md font-heebo">3. Affiliate Requirements.</p>
                                <ul className=" pl-5 flex flex-col gap-2 font-heebo">
                                    <li><strong>3.1.</strong> Affiliate is subject to review and may be rejected for any reason, and at any time, by Mcashmedia.
                                    </li>
                                    <li><strong>3.2.</strong> Affiliate must submit valid and correct contact information, including but not limited to name, e-mail address, street address, and telephone number. Affiliate must ensure this information remains up-to-date at all times within the Mcashmedia Network. Affiliate must accurately, clearly and completely describe all promotional methods in their descriptions and provide additional information when necessary.
                                    </li>
                                    <li><strong>3.3.</strong> Affiliate websites must not be associated with or contain any illegal activity, or pornographic, obscene, racist, or hateful content, or deceptive advertising, piracy, libelous or defamatory statements.
                                    </li>
                                    <li><strong>3.4.</strong> Affiliate websites must not contain any mechanisms that could be downloaded on to a User's computer without the User's explicit knowledge and consent.
                                    </li>
                                    <li><strong>3.5.</strong> In its sole discretion, if at any time Mcashmedia deems the Affiliate's website or advertising activities are contrary to the terms set out in the Agreement, the Affiliate shall be terminated from the Network and shall forfeit any and all commissions and earnings.

                                    </li>
                                </ul>

                                <p className="font-semibold text-md font-heebo">4. Affiliate Rules.</p>
                                <ul className=" pl-5 flex flex-col gap-2 font-heebo">
                                    <li><strong>4.1.</strong> Failure to adhere to the following rules is a violation of the Agreement and will result in immediate termination of the Affiliate from the Mcashmedia Network with forfeiture of all monies due to Affiliate.
                                    </li>
                                    <li><strong>4.2.</strong>Affiliate must not load Advertiser's website within a frameset or iframe unless prior written approval is obtained from Mcashmedia.
                                    </li>
                                    <li><strong>4.3.</strong> Affiliate must not modify the Ads supplied by Mcashmedia in any way unless prior written approval is obtained from Mcashmedia.
                                    </li>
                                    <li><strong>4.4.</strong> Affiliate must indicate whether he uses incentive traffic, and only offer incentives to Users to respond to Ads with permission from Mcashmedia and the Advertiser as indicated on the Network and Campaign Terms, or in writing. Mcashmedia reserves the right to define the term incentive.
                                    </li>
                                    <li><strong>4.5.</strong> Affiliate must not make misleading or disparaging statements, oral or written, about any Ad, Advertiser or Mcashmedia.
                                    </li>
                                    <li><strong>4.6.</strong> Affiliate must agree to receive periodic communications from Mcashmedia. This communication could be in the form of e-mail, instant message, postal mail, telephone or fax.
                                    </li>
                                    <li><strong>4.7.</strong> Affiliate must not display any Ad in third Party newsgroups, social Networks, message boards, blogs, link farms, counters, chatrooms or guestbooks without the consent of such third-Party entity.
                                    </li>
                                    <li><strong>4.8.</strong> Affiliate must comply with all Campaign Terms as outlined in Ads.
                                    </li>
                                    <li><strong>4.9.</strong> Affiliates must not use SMS/text messages to deliver Ads to Users.
                                    </li>
                                    <li><strong>4.10.</strong> Affiliate must not generate any Actions in bad faith or through fraudulent mechanisms. This includes, but is not limited to, generating own Actions using manual or automated processes, misrepresenting product or service offered by Advertisers, deceiving Users into obtaining product or service offered by Advertisers, and encouraging or educating Surfers to cancel any product purchase or service provided by Advertisers.
                                    </li>
                                    <li><strong>4.11.</strong> Affiliate must not share, lend, lease, sell or transfer their account to any third Party unless prior written approval is obtained from Mcashmedia.
                                    </li>
                                    <li className="font-semibold"><strong>4.12.</strong> Any Affiliate engaged in the distribution of Ads via email must comply with all of the following rules:
                                    </li>
                                    <li ><strong>4.12.1.</strong> Affiliate must distribute Ads only to those recipients who have Opted-in to receive such email from the Affiliate. Mcashmedia prohibits the use of Spam. Any use of Spam whatsoever by Affiliate will result in the forfeiture of Affiliate's entire commission for all campaigns, and the termination of the Affiliate's account. Affiliate will also be held liable for any and all damages resulting from a violation of this provision including reasonable court costs.
                                    </li>
                                    <li ><strong>4.12.2.</strong> If requested by Mcashmedia, Affiliate must be able within 24 hours of such request, to supply the name, date, time, IP address and URL where the User gave permission to the Affiliate to receive such Ads through e-mail.
                                    </li>
                                    <li ><strong>4.12.3.</strong> Affiliate must ensure each email recipient is provided with a valid opt-out mechanism within each email delivered in order for the recipients to "opt-out" of future mailings from Affiliate.
                                    </li>
                                    <li ><strong>4.12.4.</strong> Affiliate must not use the Advertiser or Mcashmedia name (including any abbreviation thereof) in the originating email address line ("From" line) or subject line of any email transmission, unless specific permission is given otherwise.
                                    </li>
                                    <li ><strong>4.12.5.</strong> Affiliate must not use falsified sender information or falsified IP Addresses.
                                    </li>
                                    <li ><strong>4.12.6.</strong>  Affiliate must use only pre-approved Advertiser subject lines and from lines as set out in Campaign Terms.
                                    </li>
                                    <li ><strong>4.12.7.</strong> Affiliate must use only legitimate routing information.
                                    </li>
                                    <li ><strong>4.12.8.</strong> Affiliate must use their own tracking links that redirect to the tracking links supplied by Mcashmedia.
                                    </li>
                                    <li ><strong>4.12.9.</strong> Affiliate must have a proper privacy policy on their website that includes a link to Mcashmedia’s privacy policy to the extent Affiliate communicates any personal information with Mcashmedia. Affiliates’ privacy policy must be in compliance with all Applicable Privacy Laws, guidelines, rules and regulations and shall warrant that email campaigns are conducted in accordance with that privacy policy, and in accordance with any Applicable Privacy Laws.
                                    </li>
                                    <li ><strong>4.12.10.</strong> Affiliate must ensure each email contains Advertiser's unsubscribe mechanism as set out in Campaign Terms.
                                    </li>
                                    <li ><strong>4.12.11.</strong>  Affiliate must not send email to any email address or domain contained in an Advertiser's suppression list as set out in Campaign Terms.
                                    </li>
                                    <li ><strong>4.12.12.</strong> Affiliate must ensure each email clearly contains the Affiliate's physical address, which cannot be a PO BOX.
                                    </li>
                                    <li ><strong>4.12.13.</strong> Affiliate must comply with all campaign instructions from Mcashmedia and Advertiser as set out in Campaign Terms.

                                    </li>
                                    <li ><strong>4.12.14.</strong> Affiliate must be compliant with all relevant laws, including but not limited to the Controlling the Assault of Non-Solicited Pornography And Marketing (CAN-SPAM) Act of 2003 15 U.S.C. ch. 103 and an Act to promote the efficiency and adaptability of the Canadian economy by regulating certain activities that discourage reliance on electronic means of carrying out commercial activities, and to amend the Canadian Radio-television and Telecommunications Commission Act, the Competition Act, the Personal Information Protection and Electronic Documents Act and the Telecommunications Act S.C. 2010, c. 23 (CASL).
                                    </li>
                                    <li ><strong>4.13.</strong> If Affiliate has not logged into their account for six (6) consecutive months, it will be moved to an inactive status. If this inactivity continues for nine (9) months, Mcashmedia reserves the right to terminate the account for inactivity and debit any remaining balance that is held in the Affiliate account.
                                    </li>
                                    <li ><strong>4.14.</strong> If Affiliate (i) operates from a jurisdiction subject to Applicable Privacy Laws; (ii) markets to or targets individuals in a jurisdiction subject to Applicable Privacy Laws; or (iii) collects or otherwise processes any personal information from users in a jurisdiction subject to Applicable Privacy Laws, then Affiliate hereby represents, warrants, covenants and agrees that Affiliate will (a) comply with Applicable Privacy Laws; (b) inform end users in a prominent manner of their rights under Applicable Privacy Laws and that Affiliate uses tracking devices and cookies for advertising purposes, including Interest-Based Advertising; and (c) obtain all required end user consents to place tracking devices, such as cookies (including those enabled by Mcashmedia at Affiliate’s request on Affiliate’s behalf) on such end users' computers and internet enabled devices and provide information regarding the removal of such tracking devices.
                                    </li>
                                </ul>


                                <p className=" text-md font-heebo"> <strong>5.</strong>  If Affiliate determines that Applicable Privacy Laws do not apply to them, then Affiliate shall provide Mcashmedia with its analysis concluding the same or, provide detailed information regarding the specific steps Affiliate takes to ensure that individuals located in jurisdictions subject to Applicable Privacy Laws do not visit Affiliates’ Site via our services and technology..</p>
                                <p className="font-semibold text-md font-heebo">6.  Advertising Services and Warranties..</p>
                                <ul className=" pl-5 flex flex-col gap-2 font-heebo">
                                    <li><strong>6.1.</strong> Provided that Affiliate complies with all provisions of this Agreement and Campaign Terms, Mcashmedia hereby grants to Affiliate a non-exclusive, limited, revocable license to market, display, perform, copy, transmit, and promote the Ad in connection with its obligations hereunder; and market display, perform, copy, transmit, and promote the Ad to third Parties in connection with its obligations hereunder. Affiliate's use of Ads or copyrighted materials in violation of this Agreement is strictly forbidden and will result in this limited license being immediately withdrawn and may further result in the termination of the Affiliate's account and being held liable under applicable law.

                                    </li>
                                    <li><strong>6.2.</strong> Mcashmedia's sole obligation to the Affiliate under this Agreement with respect to Ads shall be to provide such Ads for use in their advertising efforts. The advertising services provided by Mcashmedia are provided "as is". Mcashmedia makes no warranties, guaranties, promises, or estimates, expressed or implied, oral, written or otherwise except as specifically set forth herein, AND does not guarantee, including but not limited to, demographic profiling of Users, click to Action conversion rates, response rates or conversion rates from Action to sale.

                                    </li>
                                    <li><strong>6.3.</strong> No additional warranties are provided.
                                    </li>
                                </ul>

                                <p className="font-semibold text-md font-heebo">7. Commission Earnings and Payments.</p>
                                <ul className=" pl-5 flex flex-col gap-2 font-heebo">
                                    <li><strong>7.1.</strong> Mcashmedia shall send Affiliate's commission payment approximately fifteen (15) days from the last business day of each month in which earnings are accrued if the amount due to Affiliate exceeds either one hundred (100) dollars USD or the minimum payment amount requested by the Affiliate, whichever is higher. Payment thresholds may vary based payment type chosen by Affiliate. Policies regarding payment type thresholds can change without notice to Affiliate. Commissions will only be earned on Actions reported by the Advertiser, and only after Mcashmedia receives full payment from the Advertiser. Mcashmedia is under no obligation to pay Affiliates for Actions which are not paid by the Advertiser.
                                    </li>
                                    <li><strong>7.2.</strong> Mcashmedia shall increase the payment frequency for Affiliate to weekly, provided Affiliate has received one previous payment from Mcashmedia and is setup to receive payments electronically. All other conditions and restrictions for payment as outlined in item 6.1 remain in force for weekly payments. Mcashmedia in its sole discretion may disqualify any Affiliate from being eligible for weekly payments.
                                    </li>
                                    <li><strong>7.3.</strong> In the event of non-payment by an Advertiser, and If Mcashmedia elects in its own discretion not to make payment to Affiliate, an Affiliate's recourse for any earned commissions not paid shall be to make a claim against the relevant Advertiser(s), and Mcashmedia disclaims any and all liability for such payment.
                                    </li>
                                    <li><strong>7.4.</strong> Mcashmedia or the Advertiser may reverse any Action generated by the Affiliate. Circumstances for Action reversals include but are not limited to duplicate Actions, fraudulently generated Actions, non-payment, Affiliate's failure to comply with the Agreement, invalid or incomplete data, or product returns. Reversals may be applied at any time, including for Actions during a period where payment has already been issued to the Affiliate.
                                    </li>
                                    <li><strong>7.5.</strong> In the event reversals are applied to Actions for which an Affiliate has already been paid, Affiliate is required to return payment for these Actions to Mcashmedia.
                                    </li>
                                </ul>

                                <p className="font-semibold text-md font-heebo">8. Referral Program.</p>
                                <ul className=" pl-5 flex flex-col gap-2 font-heebo">
                                    <li><strong>8.1.</strong> Affiliate shall earn a 10% referral fee on the commission payments made to any other new Affiliates (excluding bonuses, rewards, additional payouts, Affiliate earnings where the Affiliate is an advertising Network, and referral income) who have been referred to Mcashmedia using the specified link code. Affiliate shall earn this fee on the commission payments of a referred Affiliate for a period of six (6) months after the referred Affiliate joins the Mcashmedia Network. Secondary accounts held by Affiliate are excluded from the referral program. Mcashmedia reserves the right to terminate an Affiliate referral program, in whole or in part, at any time for any reason, including but not limited to, fraud, questionable activity or breach of the terms set out in the Agreement or Campaign Terms.
                                    </li>
                                </ul>
                                <p className="font-semibold text-md font-heebo">9. Representations and Warranties.</p>
                                <ul className=" pl-5 flex flex-col gap-2 font-heebo">
                                    <li><strong>9.1.</strong> Each Party represents and warrants they have full corporate right, power, and authority to enter into this Agreement, to grant the rights and licenses granted and to perform the acts required of it.
                                    </li>
                                    <li><strong>9.2.</strong> Each Party acknowledges that the other Party makes no representations, warranties, or agreements related to the subject matter hereof that are not expressly provided for in this Agreement.
                                    </li>
                                </ul>
                                <p className="font-semibold text-md font-heebo">10. Non-Circumvention.
                                </p>
                                <ul className=" pl-5 flex flex-col gap-2 font-heebo">
                                    <li><strong>10.1.</strong> Affiliate shall not solicit or recruit, directly or indirectly, any Advertiser that is known to Affiliate to be an Advertiser of Mcashmedia, for purposes of offering products or services that are competitive with Mcashmedia, nor contact such Advertisers for any purpose, during the term of Affiliate's membership in the Mcashmedia Network and for the twelve (12) month period following termination of Affiliate's membership in the Mcashmedia Network.
                                    </li>
                                </ul>
                                <p className="font-semibold text-md font-heebo">11. Limitation of Liability. </p>
                                <ul className=" pl-5 flex flex-col gap-2 font-heebo">
                                    <li><strong>11.1.</strong> EXCEPT FOR THE INDEMNIFICATION PROVISIONS AT CLAUSE 12, UNDER NO CIRCUMSTANCES SHALL EITHER PARTY BE LIABLE TO THE OTHER FOR INDIRECT, INCIDENTAL, PUNITIVE, CONSEQUENTIAL, SPECIAL OR EXEMPLARY DAMAGES OR COSTS, DIRECT OR INDIRECT, (EVEN IF SUCH PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), ARISING FROM AFFILIATE PARTICIPATION IN Mcashmedia'S NETWORK. Mcashmedia SHALL NOT IN ANY EVENT BE LIABLE TO AFFILIATE FOR MORE THAN THE AMOUNT PAID TO AFFILIATE HEREUNDER. NO ACTION, SUIT OR PROCEEDING SHALL BE BROUGHT AGAINST Mcashmedia MORE THAN ONE YEAR AFTER THE DATE OF SERVICE.
                                    </li>
                                    <li><strong>11.2.</strong> Affiliate agrees not to hold Mcashmedia or Advertisers liable for any of the consequences of interruption or service.
                                    </li>
                                </ul>
                                <p className="font-semibold text-md font-heebo">12. Indemnification. </p>
                                <ul className=" pl-5 flex flex-col gap-2 font-heebo">
                                    <li><strong>12.1.</strong> Affiliate hereto agrees to indemnify and hold harmless Mcashmedia, Advertiser, and each if its agents, officers, directors and employees against all liability to third Parties resulting from the acts or failure to act of such indemnifying Party, or any act of its customers or users. Affiliate is solely responsible for any legal liability arising out of or relating to the Affiliate's website(s), any material to which Users can link through the Affiliate's website(s) and/or any consumer and/or governmental/regulatory complaint arising out of any privacy breach, regulatory compliance issue, e-mail campaign or other advertising campaign conducted by Affiliate, including but not limited to any Spam or fraud complaint and/or any complaint relating to failure to have proper permission to conduct such campaign to the consumer.
                                    </li>
                                </ul>
                                <p className="font-semibold text-md font-heebo">13. Confidentiality. </p>
                                <ul className=" pl-5 flex flex-col gap-2 font-heebo">
                                    <li><strong>13.1.</strong> Affiliate agrees to refrain from disclosing Mcashmedia's confidential information or the Advertiser's confidential information (including but not limited to commission rates, conversion rates, email addresses, fees, identities of Advertisers) to any third-Party without prior written permission from Mcashmedia.
                                    </li>
                                </ul>
                                <p className="font-semibold text-md font-heebo">14. Force Majeure. </p>
                                <ul className=" pl-5 flex flex-col gap-2 font-heebo">
                                    <li><strong>14.1.</strong> Neither Party shall be deemed in default of this Agreement to the extent that performance of its obligations or attempts to cure any breach are delayed or prevented by reason of any act of God, fire, natural disaster, accident, terrorism, riots, acts of government, shortage of materials or supplies, or any other cause beyond the reasonable control of such Party; provided, that the Party whose performance is affected by any such event gives the other Party written notice thereof within three (3) business days of such event or occurrence.
                                    </li>
                                </ul>
                                <p className="font-semibold text-md font-heebo">15. Relationship.</p>
                                <ul className=" pl-5 flex flex-col gap-2 font-heebo">
                                    <li><strong>15.1.</strong> The Parties to the Agreement are independent non-exclusive contractors. Neither Party will have any right, or authority to enter into any agreement on behalf of, or incur any obligation or liability of, or to otherwise bind the other Party, nor is either Party an agent, representative, partner, employee, or joint venture of the other Party.
                                    </li>
                                </ul>
                                <p className="font-semibold text-md font-heebo">16. Remedies.</p>
                                <ul className=" pl-5 flex flex-col gap-2 font-heebo">
                                    <li><strong>16.1.</strong> Mcashmedia reserves the right to withhold payment and take appropriate legal action to cover its damages against any Affiliate that violates the terms of this Agreement or breaches the representations and warranties set forth in this Agreement, or commits fraudulent activity against Mcashmedia. Except as otherwise specified, the rights and remedies granted to a Party under the Agreement are cumulative and in addition to, not in lieu of, any other rights and remedies which the Party may possess at law or in equity.
                                    </li>
                                </ul>
                                <p className="font-semibold text-md font-heebo">17. Entire Agreement.</p>
                                <ul className=" pl-5 flex flex-col gap-2 font-heebo">
                                    <li><strong>17.1.</strong> This Agreement constitutes the entire and only agreement and supersedes any and all prior agreements, whether written, oral, express, or implied, of the Parties with respect to the transactions set forth herein.
                                    </li>
                                </ul>
                                <p className="font-semibold text-md font-heebo">18. Governing Law.</p>
                                <ul className=" pl-5 flex flex-col gap-2 font-heebo">
                                    <li><strong>18.1.</strong> The rights and obligations of the Parties under this Agreement shall be governed by and construed under the laws of the Province of Ontario, USA.
                                    </li>
                                    <li><strong>18.2.</strong> The Parties irrevocably submit and attorn to the exclusive jurisdiction of the courts of the Province of Ontario.
                                    </li>
                                </ul>
                                <p className="font-semibold text-md font-heebo">19. Termination.</p>
                                <ul className=" pl-5 flex flex-col gap-2 font-heebo">
                                    <li><strong>19.1.</strong> This Agreement may be terminated by either Party. This Agreement may be terminated immediately upon notice for your breach of this Agreement.
                                    </li>
                                    <li><strong>19.2.</strong> An Advertiser may terminate Affiliate from the Advertiser's program for any or no reason.
                                    </li>
                                    <li><strong>19.3.</strong> Upon termination of this Agreement, any permissions granted under this Agreement will terminate, and Affiliate must immediately remove all Ads and link to Advertiser(s).
                                    </li>
                                </ul>

                                <p>IN WITNESS WHEREOF, the Parties have caused this Agreement to be duly executed and binding upon Affiliate's submission and Mcashmedia's acceptance of Affiliate's properly completed Affiliate Network application without need for further action by Mcashmedia.</p>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Footer;
