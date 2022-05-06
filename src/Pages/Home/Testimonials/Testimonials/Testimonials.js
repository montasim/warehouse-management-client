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
        <section className="bg-white">
            <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24">
                <div className="max-w-xl mx-auto text-center">
                    <h2 className="text-4xl font-bold tracking-tight sm:text-3xl flex items-center">
                        <MdOutlineReviews className='text-4xl' /> Read trusted reviews from our customers
                    </h2>

                    <p className="max-w-lg mx-auto mt-4 text-gring-offset-warm-gray-500">
                        POSData is a world class inventory management system. We provide live support to all of our user. Hear more from our honorable users.
                    </p>
                </div>

                <div
                    className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3 sm:gap-16"
                >
                    {
                        testimonials.map((testimonial, index) => <Testimonial key={index} testimonial={testimonial} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;