import React from 'react';
import pic from '../../../Media/Image/img.jpg';

const Header = () => {
    return (
        <aside className="relative overflow-hidden text-gray-300 bg-gray-900 lg:flex">
            <div className="w-full p-12 text-center lg:w-1/2 sm:p-16 lg:p-24 lg:text-left">
                <div className="max-w-xl mx-auto lg:ml-0">
                    <p className="text-sm font-medium">Learn more about the developer.</p>

                    <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                        Hi, I am Montasim. A full stack web developer.
                    </p>

                    <p className="hidden lg:mt-4 lg:block">
                        I want to make difference and willing to work hard for skillful career rather than regular career that I can be satisfied for. I want to work hard, be responsible and improve my profession and skills with a reputed organization in an ethical way in order to accept challenges.
                    </p>

                    <a
                        href="https://www.linkedin.com/in/montasim"
                        className="inline-block px-5 py-3 mt-8 text-sm font-medium text-white bg-indigo-500 rounded-lg hover:bg-indigo-600"
                    >
                        Contact Me
                    </a>
                </div>
            </div>

            <div className="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-auto">
                <img
                    src={pic}
                    alt="Women smiling at college"
                    className="absolute inset-0 object-cover w-full h-full"
                />
            </div>
        </aside>
    );
};

export default Header;