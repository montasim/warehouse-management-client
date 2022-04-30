import React from 'react';
import logo from '../../Media/Logo/logo.png';
import { HiOutlineCube } from 'react-icons/hi';
import { AiOutlineShoppingCart, AiOutlineMinus } from 'react-icons/ai';
import { RiCheckboxMultipleBlankLine } from 'react-icons/ri';
import { FiCreditCard, FiFileText } from 'react-icons/fi';
import { BsArrowsAngleContract, BsPeople } from 'react-icons/bs';
import { BiPieChartAlt } from 'react-icons/bi';

const Sidebar = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div class="w-60 h-full shadow-md bg-white absolute" id="sidenavSecExample">
            <div class="pt-4 pb-2 px-6">
                <a href="#!">
                    <div class="flex items-center">
                        <div class="shrink-0">
                            <img src={logo} class="w-6" alt="POSDash logo" />
                        </div>
                        <div class="grow ml-3">
                            <p style={{ color: '#110A57' }} class="text-xl font-semibold">POSDash</p>
                        </div>
                    </div>
                </a>
            </div>

            <ul class="relative px-1 mt-8">
                <li class="relative">
                    <a class="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                        <HiOutlineCube className='text-xl' />
                        <span className='ml-4'>Dashboards</span>
                    </a>
                </li>

                <li class="relative" id="sidenavSecEx2">
                    <a class="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="primary" data-bs-toggle="collapse" data-bs-target="#collapseSidenavSecEx2" aria-expanded="false" aria-controls="collapseSidenavSecEx2">
                        <AiOutlineShoppingCart className='text-xl' />
                        <span className='ml-4'>Products</span>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                        </svg>
                    </a>
                    <ul class="relative accordion-collapse collapse mt-4" id="collapseSidenavSecEx2" aria-labelledby="sidenavSecEx2" data-bs-parent="#sidenavSecExample">
                        <li class="relative">
                            <a href="#!" class="flex items-center text-base py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                <AiOutlineMinus className='mr-4' />
                                List Product
                            </a>
                        </li>
                        <li class="relative mt-3">
                            <a href="#!" class="flex items-center text-base py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                <AiOutlineMinus className='mr-4' />
                                Add Product
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="relative mt-1" id="sidenavSecEx3">
                    <a class="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="primary" data-bs-toggle="collapse" data-bs-target="#collapseSidenavSecEx3" aria-expanded="false" aria-controls="collapseSidenavSecEx3">
                        <RiCheckboxMultipleBlankLine className='text-xl' />
                        <span className='ml-4'>Categories</span>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                        </svg>
                    </a>
                    <ul class="relative accordion-collapse collapse mt-4" id="collapseSidenavSecEx3" aria-labelledby="sidenavSecEx3" data-bs-parent="#sidenavSecExample">
                        <li class="relative">
                            <a href="#!" class="flex items-center text-base py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                <AiOutlineMinus className='mr-4' />
                                List Category
                            </a>
                        </li>
                        <li class="relative mt-3">
                            <a href="#!" class="flex items-center text-base py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                <AiOutlineMinus className='mr-4' />
                                Add Category
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>

            <ul class="relative px-1 mt-1">
                <li class="relative" id="sidenavSecEx4">
                    <a class="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="primary" data-bs-toggle="collapse" data-bs-target="#collapsesidenavSecEx4" aria-expanded="false" aria-controls="collapsesidenavSecEx4">
                        <BiPieChartAlt className='text-xl' />
                        <span className='ml-4'>Sale</span>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                        </svg>
                    </a>
                    <ul class="relative accordion-collapse collapse mt-4" id="collapsesidenavSecEx4" aria-labelledby="sidenavSecEx4" data-bs-parent="#sidenavSecExample">
                        <li class="relative">
                            <a href="#!" class="flex items-center text-base py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                <AiOutlineMinus className='mr-4' />
                                List Sale
                            </a>
                        </li>
                        <li class="relative mt-3">
                            <a href="#!" class="flex items-center text-base py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                <AiOutlineMinus className='mr-4' />
                                Add Sale
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="relative mt-1" id="sidenavSecEx5">
                    <a class="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="primary" data-bs-toggle="collapse" data-bs-target="#collapsesidenavSecEx5" aria-expanded="false" aria-controls="collapsesidenavSecEx5">
                        <FiCreditCard className='text-xl' />
                        <span className='ml-4'>Purchases</span>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                        </svg>
                    </a>
                    <ul class="relative accordion-collapse collapse mt-4" id="collapsesidenavSecEx5" aria-labelledby="sidenavSecEx5" data-bs-parent="#sidenavSecExample">
                        <li class="relative">
                            <a href="#!" class="flex items-center text-base py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                <AiOutlineMinus className='mr-4' />
                                List Purchase
                            </a>
                        </li>
                        <li class="relative mt-3">
                            <a href="#!" class="flex items-center text-base py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                <AiOutlineMinus className='mr-4' />
                                Add Purchase
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>

            <ul class="relative px-1 mt-1">
                <li class="relative" id="sidenavSecEx6">
                    <a class="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="primary" data-bs-toggle="collapse" data-bs-target="#collapsesidenavSecEx6" aria-expanded="false" aria-controls="collapsesidenavSecEx6">
                        <BsArrowsAngleContract className='text-xl' />
                        <span className='ml-4'>Returns</span>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                        </svg>
                    </a>
                    <ul class="relative accordion-collapse collapse mt-4" id="collapsesidenavSecEx6" aria-labelledby="sidenavSecEx6" data-bs-parent="#sidenavSecExample">
                        <li class="relative">
                            <a href="#!" class="flex items-center text-base py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                <AiOutlineMinus className='mr-4' />
                                List Returns
                            </a>
                        </li>
                        <li class="relative mt-3">
                            <a href="#!" class="flex items-center text-base py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                <AiOutlineMinus className='mr-4' />
                                Add Return
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="relative mt-1" id="sidenavSecEx7">
                    <a class="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="primary" data-bs-toggle="collapse" data-bs-target="#collapsesidenavSecEx7" aria-expanded="false" aria-controls="collapsesidenavSecEx7">
                        <BsPeople className='text-xl' />
                        <span className='ml-4'>People</span>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                        </svg>
                    </a>
                    <ul class="relative accordion-collapse collapse mt-4" id="collapsesidenavSecEx7" aria-labelledby="sidenavSecEx7" data-bs-parent="#sidenavSecExample">
                        <li class="relative">
                            <a href="#!" class="flex items-center text-base py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                <AiOutlineMinus className='mr-4' />
                                Customers
                            </a>
                        </li>

                        <li class="relative mt-3">
                            <a href="#!" class="flex items-center text-base py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                <AiOutlineMinus className='mr-4' />
                                Add Customer
                            </a>
                        </li>

                        <li class="relative mt-3">
                            <a href="#!" class="flex items-center text-base py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                <AiOutlineMinus className='mr-4' />
                                Users
                            </a>
                        </li>

                        <li class="relative mt-3">
                            <a href="#!" class="flex items-center text-base py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                <AiOutlineMinus className='mr-4' />
                                Add User
                            </a>
                        </li>

                        <li class="relative mt-3">
                            <a href="#!" class="flex items-center text-base py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                <AiOutlineMinus className='mr-4' />
                                Suppliers
                            </a>
                        </li>

                        <li class="relative mt-3">
                            <a href="#!" class="flex items-center text-base py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                <AiOutlineMinus className='mr-4' />
                                Add Supplier
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>

            <ul class="relative px-1 mt-1">
                <li class="relative">
                    <a class="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                        <FiFileText className='text-xl' />
                        <span className='ml-4'>Reports</span>
                    </a>
                </li>
            </ul>

            <div class="text-center bottom-0 absolute w-full">
                <hr class="m-0" />
                <p class="py-2 text-base text-gray-700">Copyright &copy; {year}</p>
            </div>
        </div>
    );
};

export default Sidebar;