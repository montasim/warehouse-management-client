import React from 'react';

const Testimonial = () => {
    return (
        <section class="my-28 text-gray-700 px-4">
            <div class="text-center max-w-3xl mx-auto">
                <h3 class="text-3xl font-bold mb-6 text-gray-800">Testimonials</h3>
                <p class="mb-6 pb-2 md:mb-12">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam
                    iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum
                    porro a pariatur veniam.
                </p>
            </div>

            <div class="grid md:grid-cols-3 gap-12 text-center">
                <div class="mb-6 md:mb-0">
                    <div class="flex justify-center mb-6">
                        <img
                            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(22).jpg"
                            class="rounded-full shadow-lg w-24"
                        />
                    </div>
                    <p class="text-xl my-4 text-gray-500">
                        "Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit sed ut
                        perspiciatis unde omnis."
                    </p>
                    <p class="italic">- Anna Morian</p>
                </div>
                <div class="mb-6 md:mb-0">
                    <div class="flex justify-center mb-6">
                        <img
                            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(22).jpg"
                            class="rounded-full shadow-lg w-24"
                        />
                    </div>
                    <p class="text-xl my-4 text-gray-500">
                        "Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit sed ut
                        perspiciatis unde omnis."
                    </p>
                    <p class="italic">- Anna Morian</p>
                </div>
                <div class="mb-0">
                    <div class="flex justify-center mb-6">
                        <img
                            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(19).jpg"
                            class="rounded-full shadow-lg w-24"
                        />
                    </div>
                    <p class="text-xl my-4 text-gray-500">
                        "Neque cupiditate assumenda in maiores repudiandae mollitia architecto elit sed
                        adipiscing elit."
                    </p>
                    <p class="italic">- Teresa May</p>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;