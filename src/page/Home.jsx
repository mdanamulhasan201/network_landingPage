
import { Helmet } from 'react-helmet-async';
import AboutUs from '../components/Home/AboutUs';
// import Banner from '../components/Home/Banner';
import ExtraCare from '../components/Home/ExtraCare';
import Our_Services from '../components/Home/Our_Services';
import Partner from '../components/Home/Partner';
import Hero from '../components/Home/Hero';
import { useEffect } from 'react';

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>AffClickZen | Home</title>
            </Helmet>
            {/* <Banner /> */}
            <Hero/>
            <AboutUs />
            <Our_Services />
            <ExtraCare />
            <Partner /> 
        </>
    )
};

export default Home;