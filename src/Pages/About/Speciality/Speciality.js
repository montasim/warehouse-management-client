import React from 'react';
import { BiDesktop } from 'react-icons/bi';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { MdSecurity } from 'react-icons/md';
import { SiMongodb, SiHackthebox } from 'react-icons/si';

const Speciality = () => {
    return (
        <aside className="text-white bg-gray-900 pt-20">
            <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <div className="w-3/6 mx-auto text-center">
                    <h2 className="text-3xl font-bold sm:text-4xl">My Specialty in Web Development</h2>

                    <p className="mt-4 text-gray-300">
                        I am a computer science professionals with advance knowledge of MERN stack web development. I love problem solving and explore new technologies.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
                    <a
                        className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-indigo-500/10 hover:border-indigo-500/10"
                        href="/services/digital-campaigns"
                    >
                        <BiDesktop className='text-indigo-500 text-4xl' />

                        <h3 className="mt-4 text-xl font-bold text-white">UI Design</h3>

                        <p className="mt-1 text-sm text-gray-300">
                            Modern and clean looking UI.
                        </p>
                    </a>

                    <a
                        className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-indigo-500/10 hover:border-indigo-500/10"
                        href="/services/digital-campaigns"
                    >
                        <SiHackthebox className='text-indigo-500 text-4xl' />

                        <h3 className="mt-4 text-xl font-bold text-white">UX Design</h3>

                        <p className="mt-1 text-sm text-gray-300">
                            Smooth user experience.
                        </p>
                    </a>

                    <a
                        className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-indigo-500/10 hover:border-indigo-500/10"
                        href="/services/digital-campaigns"
                    >
                        <SiMongodb className='text-indigo-500 text-4xl' />
                        <h3 className="mt-4 text-xl font-bold text-white">MongoDB Database</h3>

                        <p className="mt-1 text-sm text-gray-300">
                            Modern and secure database.
                        </p>
                    </a>

                    <a
                        className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-indigo-500/10 hover:border-indigo-500/10"
                        href="/services/digital-campaigns"
                    >
                        <FaNodeJs className='text-indigo-500 text-4xl' />

                        <h3 className="mt-4 text-xl font-bold text-white">NodeJs Backend</h3>

                        <p className="mt-1 text-sm text-gray-300">
                            Advance backend server.
                        </p>
                    </a>

                    <a
                        className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-indigo-500/10 hover:border-indigo-500/10"
                        href="/services/digital-campaigns"
                    >
                        <FaReact className='text-indigo-500 text-4xl' />

                        <h3 className="mt-4 text-xl font-bold text-white">Popular frontend framework </h3>

                        <p className="mt-1 text-sm text-gray-300">
                            World's most popular front end framework
                        </p>
                    </a>

                    <a
                        className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-indigo-500/10 hover:border-indigo-500/10"
                        href="/services/digital-campaigns"
                    >
                        <MdSecurity className='text-indigo-500 text-4xl' />

                        <h3 className="mt-4 text-xl font-bold text-white">World class security</h3>

                        <p className="mt-1 text-sm text-gray-300">
                            Ensure security with JWT.
                        </p>
                    </a>
                </div>

                <div className="mt-12 text-center">
                    <a
                        className="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent active:text-indigo-500 focus:outline-none focus:ring"
                        href="https://www.linkedin.com/in/montasim"
                    >
                        <span className="text-sm font-medium"> Hire Me </span>

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
            </div>
        </aside>
    );
};

export default Speciality;