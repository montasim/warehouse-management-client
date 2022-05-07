import React from 'react';

const Connect = () => {
    return (
        <div class="fixed inset-x-0 bottom-0 p-4 alert alert-dismissible">
            <div class="relative max-w-xl p-6 bg-gray-100 rounded-lg shadow-sm">
                <button
                    type="button"
                    class="absolute p-1 text-gray-400 bg-white border border-gray-200 rounded-full -top-1 -right-1" data-bs-dismiss="alert"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-3 h-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </button>

                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <img
                        class="object-cover w-full h-full rounded-xl"
                        src="https://img.freepik.com/free-vector/flat-creativity-concept-illustration_52683-64279.jpg?w=740&t=st=1651906211~exp=1651906811~hmac=847c79496b43552f353b14a2e30cf766dc533e0c3b464d8ff46c86804d9ed368"
                        alt=""
                    />

                    <div>
                        <h2 class="text-lg font-medium">
                            Want to share your idea with me?
                        </h2>

                        <p class="mt-4 text-sm text-gray-500">
                            I am always happy to work with new idea. If you think your idea is worth enough, feel free to share with me. We will discuss the next.
                        </p>

                        <div class="mt-6 sm:text-right">
                            <a
                                class="inline-block px-5 py-3 text-sm font-medium text-white bg-indigo-500 rounded-lg "
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