import React from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { BsDisplay } from 'react-icons/bs';
import { GrShieldSecurity } from 'react-icons/gr';
import { IoIosAddCircle } from 'react-icons/io';
import { SiJsonwebtokens } from 'react-icons/si';
import { MdOutlineFeaturedPlayList } from 'react-icons/md';

const Features = () => {
    return (
        <section>
            <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-16 lg:items-center"
                >
                    <div className="max-w-lg mx-auto text-center lg:text-left lg:mx-0">
                        <h2 className="text-3xl font-bold sm:text-4xl flex items-center"><MdOutlineFeaturedPlayList className='mr-3' /> POSDash Features</h2>

                        <p className="mt-4 text-gray-600">
                            We offer modern, clean and customizable features for your needs. No matter how much products you have or how many clients you want to provide service we are here for you. POSDash provides scalable services for your needs.
                        </p>

                        <a
                            className="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
                            href="#pricing"
                        >
                            <span className="text-sm font-medium"> Get Started </span>

                            <svg
                                className="w-5 h-5 ml-3"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </a>
                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                        <a
                            className="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
                            href="/accountant"
                        >
                            <span className="inline-block p-3 rounded-lg bg-gray-50">
                                <BsDisplay className='text-xl' />
                            </span>

                            <h6 className="mt-2 font-bold">Display Products</h6>

                            <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                                Display all products in a dashboard.
                            </p>
                        </a>

                        <a
                            className="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
                            href="/accountant"
                        >
                            <span className="inline-block p-3 rounded-lg bg-gray-50">
                                <AiFillEdit className='text-xl' />
                            </span>

                            <h6 className="mt-2 font-bold">Modify Stock</h6>

                            <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                                Can update your stock anytime.
                            </p>
                        </a>

                        <a
                            className="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
                            href="/accountant"
                        >
                            <span className="inline-block p-3 rounded-lg bg-gray-50">
                                <IoIosAddCircle className='text-xl' />
                            </span>

                            <h6 className="mt-2 font-bold">Add Product</h6>

                            <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                                Add any product anytime.
                            </p>
                        </a>

                        <a
                            className="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
                            href="/accountant"
                        >
                            <span className="inline-block p-3 rounded-lg bg-gray-50">
                                <AiFillDelete className='text-xl' />
                            </span>

                            <h6 className="mt-2 font-bold">Delete Product</h6>

                            <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                                Delete any product anytime.
                            </p>
                        </a>

                        <a
                            className="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
                            href="/accountant"
                        >
                            <span className="inline-block p-3 rounded-lg bg-gray-50">
                                <GrShieldSecurity className='text-xl' />
                            </span>

                            <h6 className="mt-2 font-bold">Authentication</h6>

                            <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                                Keep track of every users.
                            </p>
                        </a>

                        <a
                            className="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
                            href="/accountant"
                        >
                            <span className="inline-block p-3 rounded-lg bg-gray-50">
                                <SiJsonwebtokens className='text-xl' />
                            </span>

                            <h6 className="mt-2 font-bold">JWT Token</h6>

                            <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                                JSON Web Token for security.
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;