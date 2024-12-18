const Footer = () => {
    const currentYear = new Date().getFullYear(); 

    return (
        <div className="text-center py-10 bg-slate-50 text-gray-600 font-heebo">
            © {currentYear} MCash Media. All rights reserved.
        </div>
    );
};

export default Footer;
