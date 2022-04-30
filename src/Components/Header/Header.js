import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Media/Logo/logo.png';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BsPlusSquare } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { FiSettings } from 'react-icons/fi';
import { IoIosLogOut } from 'react-icons/io';
import { RiCheckboxMultipleBlankLine, RiProductHuntLine } from 'react-icons/ri';
import { SiMicrodotblog } from 'react-icons/si';
import { BiUserPlus } from 'react-icons/bi';

const Header = () => {
    const navigate = useNavigate();

    return (

        <nav className="
  relative
  w-full
  flex flex-wrap
  items-center
  justify-between
  py-4
  bg-gray-100
  text-gray-500
  hover:text-gray-700
  focus:text-gray-700
  shadow-lg
  navbar navbar-expand-lg navbar-light
  ">
            <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <button className="
      navbar-toggler
      text-gray-500
      border-0
      hover:shadow-none hover:no-underline
      py-2
      px-2.5
      bg-transparent
      focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
    " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
                        className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor"
                            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                        </path>
                    </svg>
                </button>
                <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
                    <div className="pt-4 pb-2 px-6">
                        <Link to="/">
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
                </div>

                <div className="flex items-center relative">
                    <ul class="navbar-nav flex flex-col pl-0 list-style-none items-center">
                        <li class="nav-item p-2">
                            <Link class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0 flex items-center" to="/">
                                <AiOutlineHome className='mr-2 text-xl text-blue-600' />
                                Home
                            </Link>
                        </li>
                        <li class="nav-item p-2">
                            <Link class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0 flex items-center" to="/add-item">
                                <BsPlusSquare className='mr-2 text-xl text-blue-600' />
                                Add Item
                            </Link>
                        </li>
                        <li class="nav-item p-2">
                            <Link class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0 flex items-center" to="/manage-items">
                                <RiCheckboxMultipleBlankLine className='mr-2 text-xl text-blue-600' />
                                Manage Items
                            </Link>
                        </li>
                        <li class="nav-item p-2">
                            <Link class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0 flex items-center" to="/my-items">
                                <RiProductHuntLine className='mr-2 text-xl text-blue-600' />
                                My Items
                            </Link>
                        </li>
                        <li class="nav-item p-2">
                            <Link class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0 flex items-center" to="/blog">
                                <SiMicrodotblog className='mr-2 text-xl text-blue-600' />
                                Blog
                            </Link>
                        </li>
                        <li class="nav-item p-2">
                            <Link class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0 flex items-center" to="/register">
                                <BiUserPlus className='mr-2 text-xl text-blue-600' />
                                Register
                            </Link>
                        </li>
                        <li class="nav-item p-2" onClick={() => navigate('/login')}>
                            <button type="button" class="inline-block px-6 pt-2.5 pb-2 bg-blue-600 text-white font-medium text-xs leading-normal uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center rounded-full items-center">
                                <AiOutlineUser className='mr-2' />
                                Login
                            </button>
                        </li>
                    </ul>
                    <div className="dropdown relative">
                        <Link className="dropdown-toggle flex items-center hidden-arrow" to="#" id="dropdownMenuButton2" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" className="rounded-full w-12 ml-4" alt="" loading="lazy" />
                        </Link>
                        <ul className="
    dropdown-menu
    min-w-max
    absolute
    hidden
    bg-white
    text-base
    z-50
    float-left
    py-2
    list-none
    text-left
    rounded-lg
    shadow-lg
    mt-1
    hidden
    m-0
    bg-clip-padding
    border-none
    left-auto
    right-0
  " aria-labelledby="dropdownMenuButton2">
                            <li>
                                <Link className="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100 flex items-center
      " to="/profile">
                                    <CgProfile className='mr-2' />
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <Link className="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100 flex items-center
      " to="/settings">
                                    <FiSettings className='mr-2' />
                                    Settings
                                </Link>
                            </li>
                            <li>
                                <Link className="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100 flex items-center
      " to="#">
                                    <IoIosLogOut className='mr-2' />
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;