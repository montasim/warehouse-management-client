import React from 'react';

const Blog = () => {
    return (
        <section>
            <div className="space-y-4 mt-32 mb-20 md:px-20 sm:px-14 px-6">
                <details className="p-6 border-l-4 border-blue-400 bg-gray-50 shadow-md group" open>
                    <summary className="flex items-center justify-between cursor-pointer">
                        <h5 className="text-lg font-medium text-gray-900">
                            1. What is the difference between JavaScript and NodeJS?
                        </h5>

                        <span
                            className="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        JavaScript is normally used for client-side for a web application. Whereas Node JS mainly used for accessing or running server-side operation. JavaScript can run multiples web engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome). Node JS only support the Google Chrome V8 engine. JavaScript is the upgraded version of ECMA script that uses Chrome's V8 engine written in C++. Nodejs is written in C, C++ and Javascript.
                    </p>
                </details>

                <details className="p-6 border-l-4 border-orange-400 bg-gray-50 shadow-md group">
                    <summary className="flex items-center justify-between cursor-pointer">
                        <h5 className="text-lg font-medium text-gray-900">
                            2. What is the differences between SQL and NoSQL databases?
                        </h5>

                        <span
                            className="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        SQL databases are relational database, NoSQL databases are non-relational database. SQL databases are table-based, while NoSQL databases are document based. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON. SQL databases are vertically scalable. This means that you can increase the load on a single server by increasing things like RAM, CPU or SSD. But on the other hand NoSQL databases are horizontally scalable. This means that you handle more traffic by sharding, or adding more servers in your NoSQL database.
                    </p>
                </details>

                <details className="p-6 border-l-4 border-gray-400 bg-gray-50 shadow-md group">
                    <summary className="flex items-center justify-between cursor-pointer">
                        <h5 className="text-lg font-medium text-gray-900">
                            3. When should you use NodeJS and when should you use MongoDB?
                        </h5>

                        <span
                            className="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        NodeJS is mainly used for server-side or back-end of an application. Whereas MongoDB is NoSQl database which is mainly used as an database. If I need to write a server-side application I will use NodeJs. And if I need to store data for an application I will use MongoDB.
                    </p>
                </details>

                <details className="p-6 border-l-4 border-green-400 bg-gray-50 shadow-md group">
                    <summary className="flex items-center justify-between cursor-pointer">
                        <h5 className="text-lg font-medium text-gray-900">
                            4. What is the purpose of JWT and how does it work?
                        </h5>

                        <span
                            className="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        JSON Web Token (JWT) is way for securely transmitting information between server and client as a JSON object. JWT is used for authorization and securely information exchange.
                    </p>
                </details>
            </div>
        </section>
    );
};

export default Blog;