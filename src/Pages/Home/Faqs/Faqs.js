import React from 'react';

const Faqs = () => {
    return (
        <section className='lg:mx-12 sm:mx-2 my-20'>
            <div className='ml-6 mb-12'>
                <h2 className="text-3xl font-bold text-gray-800 flex items-center"> Have some questions in your mind?</h2>
                <p className="mt-4 text-gray-500 w-3/6">Acquiring a new technology is always a hassle. We provide simple but effective solutions to manage your inventory. Learn more here.</p>
            </div>

            <div
                class="bg-white border border-gray-200 divide-y divide-gray-200 rounded-xl"
            >
                <details class="p-6 group" open>
                    <summary class="flex items-center justify-between cursor-pointer">
                        <h5 class="text-lg font-medium text-gray-900">
                            Lorem ipsum dolor sit amet consectetur adipisicing?
                        </h5>

                        <span class="relative flex-shrink-0 ml-1.5 w-5 h-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p class="mt-4 leading-relaxed text-gray-700">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                        molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                        voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                        earum similique!
                    </p>
                </details>

                <details class="p-6 group">
                    <summary class="flex items-center justify-between cursor-pointer">
                        <h5 class="text-lg font-medium text-gray-900">
                            Lorem ipsum dolor sit amet consectetur adipisicing?
                        </h5>

                        <span class="relative flex-shrink-0 ml-1.5 w-5 h-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p class="mt-4 leading-relaxed text-gray-700">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                        molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                        voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                        earum similique!
                    </p>
                </details>
            </div>
        </section>
    );
};

export default Faqs;