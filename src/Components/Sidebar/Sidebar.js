import React from 'react';
import logo from '../../Media/Logo/logo.png';
import { HiOutlineCube } from 'react-icons/hi';
import { AiOutlineShoppingCart, AiOutlineMinus } from 'react-icons/ai';
import { RiCheckboxMultipleBlankLine } from 'react-icons/ri';
import { FiCreditCard, FiFileText } from 'react-icons/fi';
import { BsArrowsAngleContract, BsPeople } from 'react-icons/bs';
import { BiPieChartAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className="w-60 h-full shadow-md bg-white absolute" id="sidenavSecExample">
            <div className="pt-4 pb-2 px-6">
                <Link to="/dashboard">
                    <div className="flex items-center">
                        <div className="shrink-0">
                            <img src={logo} className="w-6" alt="POSDash logo" />
                        </div>
                        <div className="grow ml-3">
                            <p style={{ color: '#110A57' }} className="text-xl font-semibold">POSDash</p>
                        </div>
                    </div>
                </Link>
            </div>

            <ul className="relative px-1 mt-8">
                <li className="relative">
                    <Link className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" to="/dashboard" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                        <HiOutlineCube className='text-xl' />
                        <span className='ml-4'>Dashboards</span>
                    </Link>
                </li>

                <li className="relative" id="sidenavSecEx2">
                    <a className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="primary" data-bs-toggle="collapse" data-bs-target="#collapseSidenavSecEx2" aria-expanded="false" aria-controls="collapseSidenavSecEx2">
                        <AiOutlineShoppingCart className='text-xl' />
                        <span className='ml-4'>Products</span>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                        </svg>
                    </a>
                    <ul className="relative accordion-collapse collapse mt-4" id="collapseSidenavSecEx2" aria-labelledby="sidenavSecEx2" data-bs-parent="#sidenavSecExample">
                        <li className="relative">
                            <Link to="/list-products" className="flex items-center text-base py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                <AiOutlineMinus className='mr-4' />
                                List Product
                            </Link>
                        </li>
                        <li className="relative mt-3">
                            <Link to="/add-product" className="flex items-center text-base py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                <AiOutlineMinus className='mr-4' />
                                Add Product
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="relative mt-1" id="sidenavSecEx3">
                    <a className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="primary" data-bs-toggle="collapse" data-bs-target="#collapseSidenavSecEx3" aria-expanded="false" aria-controls="collapseSidenavSecEx3">
                        <RiCheckboxMultipleBlankLine className='text-xl' />
                        <span className='ml-4'>Categories</span>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                        </svg>
                    </a>
                    <ul className="relative accordion-collapse collapse mt-4" id="collapseSidenavSecEx3" aria-labelledby="sidenavSecEx3" data-bs-parent="#sidenavSecExample">
                        <li className="relative">
                            <Link to="/list-categories" className="flex items-center text-base py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                <AiOutlineMinus className='mr-4' />
                                List Category
                            </Link>
                        </li>
                        <li className="relative mt-3">
                            <Link to="/add-category" className="flex items-center text-base py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                <AiOutlineMinus className='mr-4' />
                                Add Category
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>

            <ul className="relative px-1 mt-1">
                <li className="relative" id="sidenavSecEx4">
                    <a className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="primary" data-bs-toggle="collapse" data-bs-target="#collapsesidenavSecEx4" aria-expanded="false" aria-controls="collapsesidenavSecEx4">
                        <BiPieChartAlt className='text-xl' />
                        <span className='ml-4'>Sale</span>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                        </svg>
                    </a>
                    <ul className="relative accordion-collapse collapse mt-4" id="collapsesidenavSecEx4" aria-labelledby="sidenavSecEx4" data-bs-parent="#sidenavSecExample">
                        <li className="relative">
                            <Link to="/list-sale" className="flex items-center text-base py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                <AiOutlineMinus className='mr-4' />
                                List Sale
                            </Link>
                        </li>
                        <li className="relative mt-3">
                            <Link to="/add-sale" className="flex items-center text-base py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                <AiOutlineMinus className='mr-4' />
                                Add Sale
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="relative mt-1" id="sidenavSecEx5">
                    <a className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="primary" data-bs-toggle="collapse" data-bs-target="#collapsesidenavSecEx5" aria-expanded="false" aria-controls="collapsesidenavSecEx5">
                        <FiCreditCard className='text-xl' />
                        <span className='ml-4'>Purchases</span>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                        </svg>
                    </a>
                    <ul className="relative accordion-collapse collapse mt-4" id="collapsesidenavSecEx5" aria-labelledby="sidenavSecEx5" data-bs-parent="#sidenavSecExample">
                        <li className="relative">
                            <Link to="/list-purchases" className="flex items-center text-base py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                <AiOutlineMinus className='mr-4' />
                                List Purchases
                            </Link>
                        </li>
                        <li className="relative mt-3">
                            <Link to="/add-purchase" className="flex items-center text-base py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                <AiOutlineMinus className='mr-4' />
                                Add Purchase
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>

            <ul className="relative px-1 mt-1">
                <li className="relative" id="sidenavSecEx6">
                    <a className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="primary" data-bs-toggle="collapse" data-bs-target="#collapsesidenavSecEx6" aria-expanded="false" aria-controls="collapsesidenavSecEx6">
                        <BsArrowsAngleContract className='text-xl' />
                        <span className='ml-4'>Returns</span>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                        </svg>
                    </a>
                    <ul className="relative accordion-collapse collapse mt-4" id="collapsesidenavSecEx6" aria-labelledby="sidenavSecEx6" data-bs-parent="#sidenavSecExample">
                        <li className="relative">
                            <Link to="/list-returns" className="flex items-center text-base py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                <AiOutlineMinus className='mr-4' />
                                List Returns
                            </Link>
                        </li>
                        <li className="relative mt-3">
                            <Link to="/add-return" className="flex items-center text-base py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                <AiOutlineMinus className='mr-4' />
                                Add Return
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="relative mt-1" id="sidenavSecEx7">
                    <a className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="primary" data-bs-toggle="collapse" data-bs-target="#collapsesidenavSecEx7" aria-expanded="false" aria-controls="collapsesidenavSecEx7">
                        <BsPeople className='text-xl' />
                        <span className='ml-4'>People</span>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                        </svg>
                    </a>
                    <ul className="relative accordion-collapse collapse mt-4" id="collapsesidenavSecEx7" aria-labelledby="sidenavSecEx7" data-bs-parent="#sidenavSecExample">
                        <li className="relative">
                            <Link to="/customers" className="flex items-center text-base py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                <AiOutlineMinus className='mr-4' />
                                Customers
                            </Link>
                        </li>

                        <li className="relative mt-3">
                            <Link to="/add-customer" className="flex items-center text-base py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                <AiOutlineMinus className='mr-4' />
                                Add Customer
                            </Link>
                        </li>

                        <li className="relative mt-3">
                            <Link to="/users" className="flex items-center text-base py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                <AiOutlineMinus className='mr-4' />
                                Users
                            </Link>
                        </li>

                        <li className="relative mt-3">
                            <Link to="/add-user" className="flex items-center text-base py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                <AiOutlineMinus className='mr-4' />
                                Add User
                            </Link>
                        </li>

                        <li className="relative mt-3">
                            <Link to="/suppliers" className="flex items-center text-base py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                <AiOutlineMinus className='mr-4' />
                                Suppliers
                            </Link>
                        </li>

                        <li className="relative mt-3">
                            <Link to="/add-supplier" className="flex items-center text-base py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                <AiOutlineMinus className='mr-4' />
                                Add Supplier
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>

            <ul className="relative px-1 mt-1">
                <li className="relative">
                    <Link className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" to="/reports" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                        <FiFileText className='text-xl' />
                        <span className='ml-4'>Reports</span>
                    </Link>
                </li>
            </ul>

            <div className="text-center bottom-0 absolute w-full">
                <hr className="m-0" />
                <p className="py-2 text-base text-gray-700">Copyright &copy; {year}</p>
            </div>
        </div>
    );
};

export default Sidebar;