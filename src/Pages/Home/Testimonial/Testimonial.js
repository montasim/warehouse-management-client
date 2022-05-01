import React from 'react';

const Testimonial = () => {
    return (
        <section className="my-28 text-gray-700 px-4">
            <div className="text-center max-w-3xl mx-auto">
                <h3 className="text-3xl font-bold mb-6 text-gray-800">Testimonials</h3>
                <p className="mb-6 pb-2 md:mb-12">
                    POSData is a world class inventory management system. We provide live support to all of our user. Hear more from our honorable users.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 text-center">
                <div className="mb-6 md:mb-0">
                    <div className="flex justify-center mb-6">
                        <img
                            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(22).jpg"
                            className="rounded-full shadow-lg w-24"
                        />
                    </div>
                    <p className="text-xl my-4 text-gray-500">
                        The best inventory management system you will find. It's easy to use, customizable. Give it a try to find more.
                    </p>
                    <p className="italic">- Anna Morian</p>
                </div>
                <div className="mb-6 md:mb-0">
                    <div className="flex justify-center mb-6">
                        <img
                            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(22).jpg"
                            className="rounded-full shadow-lg w-24"
                        />
                    </div>
                    <p className="text-xl my-4 text-gray-500">
                        I love this inventory management system. It's really satisfying to work with. You can always give it a try.
                    </p>
                    <p className="italic">- Eva Johnson</p>
                </div>
                <div className="mb-0">
                    <div className="flex justify-center mb-6">
                        <img
                            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(19).jpg"
                            className="rounded-full shadow-lg w-24"
                        />
                    </div>
                    <p className="text-xl my-4 text-gray-500">
                        Simply the best inventory management system I know. I like it's design. Simple interface & user friendly.
                    </p>
                    <p className="italic">- Teresa May</p>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;