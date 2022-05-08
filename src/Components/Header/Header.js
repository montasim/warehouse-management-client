import React, { useEffect, useState } from 'react';
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
import { ImBlog } from 'react-icons/im';
import { getAuth, signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import maleUser from '../../Media/Image/maleUser.png';

const Header = () => {
    const navigate = useNavigate();
    const auth = getAuth();
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://posdash-server.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [products]);

    let email, userImage;

    if (user !== null) {
        user.providerData.forEach((profile) => {
            const splitEmail = profile?.email.split('@');

            email = splitEmail[0];
            userImage = profile?.photoURL;
        });
    }

    const logOut = () => {
        if (window.confirm("Are You Sure?") === true) {
            signOut(auth);
            navigate('/');
            toast('See You Soon');
        } else {

        }
    }

    return (
        <div className="bg-white font-sans leading-normal tracking-normal" data-new-gr-c-s-check-loaded="14.1058.0" data-gr-ext-installed="">

            <nav className="flex items-center justify-between flex-wrap bg-white shadow-lg px-8 py-5 fixed w-full z-10 top-0">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <Link to="/">
                        <div className="flex items-center">
                            <div className="shrink-0">
                                <img src={logo} className="w-6" alt="POSDash logo" />
                            </div>
                            <div className="grow ml-3">
                                <p className="text-xl text-indigo-600 font-semibold">POSDash</p>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="block lg:hidden py-5">
                    <button onClick={() => {
                        document.getElementById("nav-content").classList.toggle("hidden")
                    }} id="nav-toggle" className="flex items-center px-4 py-3 border rounded text-indigo-600 border-indigo-600 hover:text-indigo-600 hover:border-indigo-600">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>

                <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden" id="nav-content">
                    <ul className="list-reset lg:flex justify-end flex-1 items-center">
                        <li className="m-3">
                            <Link className="nav-link text-gray-500 hover:bg-indigo-200 hover:px-4 hover:py-1.5 hover:rounded-full hover:text-gray-700 focus:text-gray-700 p-0 flex items-center" to="/">
                                <AiOutlineHome className='mr-2 text-xl text-indigo-600' />
                                Home
                            </Link>
                        </li>
                        <li className="m-3">
                            <Link className="nav-link text-gray-500 hover:bg-indigo-200 hover:px-4 hover:py-1.5 hover:rounded-full hover:text-gray-700 focus:text-gray-700 p-0 flex items-center" to="/blog">
                                <ImBlog className='mr-2 text-xl text-indigo-600' />
                                Blog
                            </Link>
                        </li>
                        <li className="m-3">
                            <Link className="nav-link text-gray-500 hover:bg-indigo-200 hover:px-4 hover:py-1.5 hover:rounded-full hover:text-gray-700 focus:text-gray-700 p-0 flex items-center" to="/about">
                                <SiMicrodotblog className='mr-2 text-xl text-indigo-600' />
                                About
                            </Link>
                        </li>
                        {
                            user ? <>
                                <li className="m-3">
                                    <Link className="nav-link text-gray-500 hover:bg-indigo-200 hover:px-4 hover:py-1.5 hover:rounded-full hover:text-gray-700 focus:text-gray-700 p-0 flex items-center" to="/add-item">
                                        <BsPlusSquare className='mr-2 text-xl text-indigo-600' />
                                        Add Item
                                    </Link>
                                </li>
                                <li className="m-3">
                                    <Link className="nav-link text-gray-500 hover:bg-indigo-200 hover:px-4 hover:py-1.5 hover:rounded-full hover:text-gray-700 focus:text-gray-700 p-0 flex items-center" to="/inventory">
                                        <RiCheckboxMultipleBlankLine className='mr-2 text-xl text-indigo-600' />
                                        Manage Items <span className='ml-2 px-1 rounded-md bg-indigo-600 text-white text-md text-bold'>{products.length}</span>
                                    </Link>
                                </li>
                                <li className="m-3">
                                    <Link className="nav-link text-gray-500 hover:bg-indigo-200 hover:px-4 hover:py-1.5 hover:rounded-full hover:text-gray-700 focus:text-gray-700 p-0 flex items-center" to="/my-items">
                                        <RiProductHuntLine className='mr-2 text-xl text-indigo-600' />
                                        My Items
                                    </Link>
                                </li>
                                <li className="m-3">
                                    <div className="dropdown relative">
                                        <Link className="dropdown-toggle flex items-center hidden-arrow" to="#" id="dropdownMenuButton2" role="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <span
                                                className="rounded-full text-gray-700 bg-indigo-200 font-semibold text-sm flex align-center cursor-pointer hover:bg-indigo-600 hover:text-white hover:shadow-lg focus:bg-indigo-600 focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-600 active:text-white active:shadow-lg transition duration-300 ease w-max">
                                                <img className="rounded-full w-9 h-9 max-w-none" alt="A"
                                                    src={userImage || maleUser} />
                                                <span className="flex items-center px-3 py-2">
                                                    {email}
                                                </span>
                                            </span>
                                        </Link>
                                        <ul className="
    dropdown-menu
    min-w-max
    absolute
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
        w-full
        whitespace-nowrap
        hover:bg-indigo-200
        text-gray-700 flex items-center
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
        w-full
        whitespace-nowrap
        hover:bg-indigo-200
        text-gray-700 flex items-center
      " to="/settings">
                                                    <FiSettings className='mr-2' />
                                                    Settings
                                                </Link>
                                            </li>
                                            <li onClick={logOut}>
                                                <Link className="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        w-full
        whitespace-nowrap
        hover:bg-indigo-200
        text-gray-700 flex items-center
      " to="#">
                                                    <IoIosLogOut className='mr-2' />
                                                    Logout
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </> :
                                <>
                                    <li className="m-3">
                                        <Link className="nav-link text-gray-500 hover:bg-indigo-200 hover:px-4 hover:py-1.5 hover:rounded-full hover:text-gray-700 focus:text-gray-700 p-0 flex items-center" to="/register">
                                            <BiUserPlus className='mr-2 text-xl text-indigo-600' />
                                            Register
                                        </Link>
                                    </li>
                                    <li className="m-3" onClick={() => navigate('/login')}>
                                        <button type="button" className="px-6 pt-2.5 pb-2 bg-indigo-600 text-white font-semibold text-xs leading-normal uppercase shadow-md focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out flex align-center rounded-full items-center">
                                            <AiOutlineUser className='mr-2' />
                                            Login
                                        </button>
                                    </li>
                                </>
                        }
                    </ul>
                </div>
            </nav>

            <div className="container shadow-lg mx-auto bg-white mt-24 md:mt-18">

            </div>

        </div>
    );
};

export default Header;