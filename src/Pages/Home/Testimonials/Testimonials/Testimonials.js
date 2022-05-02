import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import { MdOutlineReviews } from 'react-icons/md';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('https://posdash-server.herokuapp.com/testimonials')
            .then(res => res.json())
            .then(data => setTestimonials(data));
    }, []);

    return (
        <section className="my-28 text-gray-700 px-4">
            <div className="text-center max-w-3xl mx-auto">
                <h3 className="flex items-center justify-center text-3xl font-bold mb-6 text-gray-800">
                    <MdOutlineReviews className='text-3xl mr-3' />
                    Testimonials
                </h3>
                <p className="mb-6 pb-2 md:mb-12">
                    POSData is a world class inventory management system. We provide live support to all of our user. Hear more from our honorable users.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 text-center">
                {
                    testimonials.map((testimonial, index) => <Testimonial key={index} testimonial={testimonial} />)
                }
            </div>
        </section>
    );
};

export default Testimonials;