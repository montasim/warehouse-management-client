import React from 'react';

const Header = () => {
    return (
        <aside class="relative overflow-hidden text-gray-300 bg-gray-900 lg:flex">
            <div class="w-full p-12 text-center lg:w-1/2 sm:p-16 lg:p-24 lg:text-left">
                <div class="max-w-xl mx-auto lg:ml-0">
                    <p class="text-sm font-medium">Learn more about the developer.</p>

                    <p class="mt-2 text-2xl font-bold text-white sm:text-3xl">
                        Hi, I am Montasim. A full stack web developer.
                    </p>

                    <p class="hidden lg:mt-4 lg:block">
                        I want to make difference and willing to work hard for skillful career rather than regular career that I can be satisfied for. I want to work hard, be responsible and improve my profession and skills with a reputed organization in an ethical way in order to accept challenges.
                    </p>

                    <a
                        href="https://www.linkedin.com/in/montasim"
                        class="inline-block px-5 py-3 mt-8 text-sm font-medium text-white bg-indigo-500 rounded-lg hover:bg-indigo-600"
                    >
                        Contact Me
                    </a>
                </div>
            </div>

            <div class="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-auto">
                <img
                    src="https://www.hyperui.dev/photos/women-2.jpeg"
                    alt="Women smiling at college"
                    class="absolute inset-0 object-cover w-full h-full"
                />
            </div>
        </aside>
    );
};

export default Header;