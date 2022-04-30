import React from 'react';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import Pricing from '../Pricing/Pricing';
import Offer from '../Offer/Offer';
import Contact from '../Contact/Contact';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
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