import React from 'react';
import Header from '../../../Components/Header/Header';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import Footer from '../../../Components/Footer/Footer';
import Pricing from '../Pricing/Pricing';
import Offer from '../Offer/Offer';
import Contact from '../Contact/Contact';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Offer />
            <Header />
            <Banner />
            <Testimonial />
            <Items />
            <Pricing />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;