import React from 'react';
import Banner from '../Banner/Banner';
import Items from '../Items/Items/Items';
import Pricing from '../Pricing/Pricing';
import Offer from '../Offer/Offer';
import Contact from '../Contact/Contact';
import Testimonials from '../Testimonials/Testimonials/Testimonials';
import BackToTop from '../../../Components/BackToTop/BackToTop';

const Home = () => {
    return (
        <div>
            <Offer />
            <Banner />
            <Testimonials />
            <Items />
            <Pricing />
            <Contact />
        </div>
    );
};

export default Home;