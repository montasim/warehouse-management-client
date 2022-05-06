import React from 'react';
import { ImPriceTag } from 'react-icons/im';

const Pricing = () => {
    return (
        <section id='pricing' className="bg-white lg:mx-4 mx-2">
            <div className="container px-6 py-8 mx-auto">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 flex items-center"><ImPriceTag className='mr-3' /> Simple, transparent pricing</h2>
                        <p className="mt-4 text-gray-500">No Contracts. No surorise fees.</p>
                    </div>

                    <div className="overflow-hidden p-0.5 mt-6 border rounded-lg">
                        <div className="sm:-mx-0.5 flex">
                            <button className=" focus:outline-none px-3 w-1/2 sm:w-auto py-1 sm:mx-0.5 text-white bg-indigo-600 rounded-lg">Monthly</button>
                            <button className=" focus:outline-none px-3 w-1/2 sm:w-auto py-1 sm:mx-0.5 text-gray-800 bg-transparent rounded-lg hover:bg-indigo-600 hover:text-white">Yearly</button>
                        </div>
                    </div>
                </div>

                <div className="grid gap-6 mt-16 -mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div className="px-6 py-4 transition-colors duration-200 transform rounded-lg shadow-lg hover:bg-gray-200">
                        <p className="text-lg font-medium text-gray-800">Intro</p>
                        <h4 className="mt-2 text-4xl font-semibold text-indigo-600">$19 <span className="text-base font-normal text-gray-600">/ Month</span></h4>
                        <p className="mt-4 text-gray-500">For most businesses that want to optimaize web queries.</p>

                        <div className="mt-8 space-y-8">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700">All limited links</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700">Own analytics platform</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700">Chat support</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700">Optimize hashtags</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700">Unlimited users</span>
                            </div>
                        </div>

                        <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                            Choose plan
                        </button>
                    </div>

                    <div className="px-6 py-4 transition-colors duration-200 transform rounded-lg shadow-lg hover:bg-gray-200">
                        <p className="text-lg font-medium text-gray-800">Base</p>
                        <h4 className="mt-2 text-4xl font-semibold text-indigo-600">$39 <span className="text-base font-normal text-gray-600">/ Month</span></h4>
                        <p className="mt-4 text-gray-500">For most businesses that want to optimaize web queries.</p>

                        <div className="mt-8 space-y-8">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700">All limited links</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700">Own analytics platform</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700">Chat support</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700">Optimize hashtags</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700">Unlimited users</span>
                            </div>
                        </div>

                        <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                            Choose plan
                        </button>
                    </div>

                    <div className="px-6 py-4 transition-colors duration-200 transform bg-gray-800 rounded-lg shadow-lg">
                        <p className="text-lg font-medium text-gray-100">Popular</p>
                        <h4 className="mt-2 text-4xl font-semibold text-gray-100">$99 <span className="text-base font-normal text-gray-400">/ Month</span></h4>
                        <p className="mt-4 text-gray-300">For most businesses that want to optimaize web queries.</p>

                        <div className="mt-8 space-y-8">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-300">All limited links</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-300">Own analytics platform</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-300">Chat support</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-300">Optimize hashtags</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-300">Unlimited users</span>
                            </div>
                        </div>

                        <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                            Choose plan
                        </button>
                    </div>

                    <div className="px-6 py-4 transition-colors duration-200 transform rounded-lg shadow-lg hover:bg-gray-200">
                        <p className="text-lg font-medium text-gray-800">Exterprise</p>
                        <h4 className="mt-2 text-4xl font-semibold text-indigo-600">$199 <span className="text-base font-normal text-gray-600">/ Month</span></h4>
                        <p className="mt-4 text-gray-500">For most businesses that want to optimaize web queries.</p>

                        <div className="mt-8 space-y-8">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700">All limited links</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700">Own analytics platform</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700">Chat support</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700">Optimize hashtags</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700">Unlimited users</span>
                            </div>
                        </div>

                        <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                            Choose plan
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;