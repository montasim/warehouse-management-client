import React from 'react';

const Connect = () => {
    return (
        <div className="fixed inset-x-0 bottom-0 p-4 alert alert-dismissible">
            <div className="relative max-w-xl p-6 bg-gray-100 rounded-lg shadow-sm">
                <button
                    type="button"
                    className="absolute p-1 text-gray-400 bg-white border border-gray-200 rounded-full -top-1 -right-1" data-bs-dismiss="alert"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <img
                        className="object-cover w-full h-full rounded-xl"
                        src="https://i.ibb.co/WBNxpk9/idea.png"
                        alt=""
                    />

                    <div>
                        <h2 className="text-lg font-medium">
                            Want to share your idea with me?
                        </h2>

                        <p className="mt-4 text-sm text-gray-500">
                            I am always happy to work with new idea. If you think your idea is worth enough, feel free to share with me. We will discuss the next.
                        </p>

                        <div className="mt-6 sm:text-right">
                            <a
                                className="inline-block px-5 py-3 text-sm font-medium text-white bg-indigo-500 rounded-lg "
                                href="https://www.linkedin.com/in/montasim"
                            >
                                Contact with LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Connect;