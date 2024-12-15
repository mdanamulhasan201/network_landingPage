const Footer = () => {
    const currentYear = new Date().getFullYear(); 

    return (
        <div className="text-center py-4 bg-gray-100 text-gray-600 font-heebo">
            © {currentYear} Media Cash. All rights reserved.
        </div>
    );
};

export default Footer;
