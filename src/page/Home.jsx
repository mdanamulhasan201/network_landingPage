
import AboutUs from '../components/Home/AboutUs';
import Banner from '../components/Home/Banner';
import ContactUs from '../components/Home/ContactUs';
import ExtraCare from '../components/Home/ExtraCare';
import Our_Services from '../components/Home/Our_Services';
import Partner from '../components/Home/Partner';

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutUs />
            <Our_Services />
            <ExtraCare/>
            <ContactUs/>
            <Partner />
            
        </div>
    );
};

export default Home;