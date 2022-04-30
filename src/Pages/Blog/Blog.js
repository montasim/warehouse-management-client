import React from 'react';

const Blog = () => {
    return (
        <div className="accordion accordion-flush m-24" id="accordionFlushExample">
            <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                <h2 className="accordion-header mb-0" id="flush-headingOne">
                    <button className="accordion-button
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                        aria-expanded="false" aria-controls="flush-collapseOne">
                        1. What is the difference between JavaScript and NodeJS?
                    </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse border-0 collapse show"
                    aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body py-4 px-5">JavaScript is normally used for client-side for a web application. Whereas Node JS mainly used for accessing or running server-side operation. JavaScript can run multiples web engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome). Node JS only support the Google Chrome V8 engine. JavaScript is the upgraded version of ECMA script that uses Chrome's V8 engine written in C++. Nodejs is written in C, C++ and Javascript. </div>
                </div>
            </div>
            <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                <h2 className="accordion-header mb-0" id="flush-headingTwo">
                    <button className="accordion-button
    collapsed
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                        aria-expanded="false" aria-controls="flush-collapseTwo">
                        2. What is the differences between SQL and NoSQL databases?
                    </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body py-4 px-5">SQL databases are relational database, NoSQL databases are non-relational database. SQL databases are table-based, while NoSQL databases are document based. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON. SQL databases are vertically scalable. This means that you can increase the load on a single server by increasing things like RAM, CPU or SSD. But on the other hand NoSQL databases are horizontally scalable. This means that you handle more traffic by sharding, or adding more servers in your NoSQL database. </div>
                </div>
            </div>
            <div className="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
                <h2 className="accordion-header mb-0" id="flush-headingThree">
                    <button className="accordion-button
    collapsed
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                        aria-expanded="false" aria-controls="flush-collapseThree">
                        3. When should you use NodeJS and when should you use MongoDB?
                    </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body py-4 px-5">NodeJS is mainly used for server-side or back-end of an application. Whereas MongoDB is NoSQl database which is mainly used as an database. If I need to write a server-side application I will use NodeJs. And if I need to store data for an application I will use MongoDB.</div>
                </div>
            </div>
            <div className="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
                <h2 className="accordion-header mb-0" id="flush-headingFour">
                    <button className="accordion-button
    collapsed
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour"
                        aria-expanded="false" aria-controls="flush-collapseFour">
                        4. What is the purpose of JWT and how does it work?
                    </button>
                </h2>
                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body py-4 px-5">JSON Web Token (JWT) is way for securely transmitting information between server and client as a JSON object. JWT is used for authorization and securely information exchange.

                        <br />

                        When a user login successfully, a JWT token is send to server. Server checks the token with previously stored token. If both token matches JWT verifies the authentic user. If tokens do not match JWT logout user.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;