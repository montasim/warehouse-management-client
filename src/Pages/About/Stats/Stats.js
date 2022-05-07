import React from 'react';

const Stats = () => {
    return (
        <aside class="text-white bg-gray-900 pb-14">
            <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <ul
                    class="mt-8 border-2 border-white border-opacity-25 divide-y-2 divide-white sm:grid sm:divide-y-0 sm:divide-x-2 sm:border-l-0 sm:border-r-0 divide-opacity-25 sm:grid-cols-3"
                >
                    <li class="p-8">
                        <p class="text-3xl font-extrabold">4+</p>
                        <p class="mt-1 text-xl font-medium">Frontend Projects</p>
                    </li>

                    <li class="p-8">
                        <p class="text-3xl font-extrabold">5+</p>
                        <p class="mt-1 text-xl font-medium">Backend Projects</p>
                    </li>

                    <li class="p-8">
                        <p class="text-3xl font-extrabold">3000+</p>
                        <p class="mt-1 text-xl font-medium">Commits This Year</p>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Stats;