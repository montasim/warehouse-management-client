import React from 'react';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import Pricing from '../Pricing/Pricing';
import Offer from '../Offer/Offer';
import Contact from '../Contact/Contact';
import Testimonial from '../Testimonial/Testimonial';
import BackToTop from '../../../Components/BackToTop/BackToTop';

const Home = () => {
    return (
        <div>
            <BackToTop />
            <Offer />
            <Banner />
            <Testimonial />
            <Items />
            <Pricing />
            <Contact />
        </div>
    );
};

export default Home;