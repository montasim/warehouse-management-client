import React from 'react';

const Testimonial = ({ testimonial }) => {
    const { name, image, review } = testimonial;

    return (
        <div className="mb-6 md:mb-0">
            <div className="flex justify-center mb-6">
                <img
                    src={image} alt={`${name} + "pic"`}
                    className="rounded-full shadow-lg w-24"
                />
            </div>
            <p className="text-xl my-4 text-gray-500">
                {review}
            </p>
            <p className="italic">{name}</p>
        </div>
    );
};

export default Testimonial;