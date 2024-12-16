import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { slug } = useParams();

    const services = [
        { id: 1, slug: "data-management", title: "Data Management", image: "", description: "We provide the best Data Management services" },
        { id: 2, slug: "affiliate-services", title: "Affiliate Services", image: "", description: "We provide the best Affiliate Services services" },
        { id: 3, slug: "legal-marketing", title: "Legal Marketing", image: "", description: "We provide the best Legal Marketing services" },
        { id: 4, slug: "lead-generation", title: "Lead Generation", image: "", description: "We provide the best Lead Generation services" },
        { id: 5, slug: "media-buying", title: "Media Buying", image: "", description: "We provide the best Media Buying services" },
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
        <div className="p-4 max-w-screen-md mx-auto">
            <Helmet>
                <title>Cash Media | {service.title}</title>
                <meta name="description" content={service.description} />
            </Helmet>
            <h1 className="text-2xl font-bold mb-4">{service.title}</h1>
            <img src={service.image || 'https://via.placeholder.com/400'} alt={service.title} className="mb-4 rounded" />
            <p>{service.description}</p>
        </div>
    );
};

export default ServiceDetails;
