import React from 'react';

const Banner = () => {
    return (
        <section className="text-white bg-gray-900">
            <div className="max-w-screen-xl px-4 py-20 mx-auto lg:items-center lg:flex">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-indigo-600 to-orange-300">
                        Understand User Flow.

                        <span className="sm:block">
                            Increase Performance.
                        </span>
                    </h1>

                    <p className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl">
                        Feel the key Performance. Optimized view, blazing fast performance
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <a className="block w-full px-12 py-3 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring" href="#pricing">
                            Get Started
                        </a>

                        <a className="block w-full px-12 py-3 text-sm font-medium text-white border border-indigo-600 rounded sm:w-auto hover:bg-indigo-600 active:bg-indigo-500 focus:outline-none focus:ring" href="#contact">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;