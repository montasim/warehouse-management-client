import React from 'react';
import Banner from '../Banner/Banner';
import Items from '../Items/Items/Items';
import Pricing from '../Pricing/Pricing';
import Contact from '../Contact/Contact';
import Testimonials from '../Testimonials/Testimonials/Testimonials';
import Features from '../Features/Features';
import Stats from '../Stats/Stats';
import Faqs from '../Faqs/Faqs';

const Home = () => {
    return (
        <div>
            <Banner />
            <Stats />
            <Features />
            <Testimonials />
            <Items />
            <Pricing />
            <Faqs />
            <Contact />
        </div>
    );
};

export default Home;