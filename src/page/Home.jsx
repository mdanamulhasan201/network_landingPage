
import { Helmet } from 'react-helmet-async';
import AboutUs from '../components/Home/AboutUs';
import Banner from '../components/Home/Banner';
import ContactUs from '../components/Home/ContactUs';
import ExtraCare from '../components/Home/ExtraCare';
import Our_Services from '../components/Home/Our_Services';
import Partner from '../components/Home/Partner';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Cash Media | Home</title>
            </Helmet>
            <Banner />
            <AboutUs />
            <Our_Services />
            <ExtraCare />
            <ContactUs />
            <Partner />
        </>
    )
};

export default Home;