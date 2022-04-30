import React from "react";
import { AiOutlineBell } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

const Header = () => {
    return (
        <nav
            className="
  relative
  w-full
  flex flex-wrap
  items-center
  justify-between
  py-4
  bg-white
  text-gray-500
  hover:text-gray-700
  focus:text-gray-700
  shadow-md
  navbar navbar-expand-lg navbar-light
  "
        >
            <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <div class="flex justify-center items-center">
                    <div class="mb-3 xl:w-96">
                        <input
                            type="search"
                            class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-400 focus:outline-none
      "
                            id="exampleSearch"
                            placeholder="Search here..."
                        />
                    </div>
                </div>

                <div className="flex items-center relative">
                    <a
                        className="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4"
                        href="#"
                    >
                        <HiOutlineMail className="text-2xl" />
                    </a>
                    <div className="dropdown relative">
                        <a
                            className="
          text-gray-500
          hover:text-gray-700
          focus:text-gray-700
          mr-4
          dropdown-toggle
          hidden-arrow
          flex items-center
        "
                            href="#"
                            id="dropdownMenuButton1"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <AiOutlineBell className="text-2xl ml-2" />
                            {/* <span className="text-white bg-red-700 absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5">
                                1
                            </span> */}
                        </a>
                        <ul
                            className="
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
    "
                            aria-labelledby="dropdownMenuButton1"
                        >
                            <li>
                                <a
                                    className="
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
          hover:bg-gray-100
        "
                                    href="#"
                                >
                                    Profile
                                </a>
                            </li>
                            <li>
                                <a
                                    className="
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
          hover:bg-gray-100
        "
                                    href="#"
                                >
                                    Settings
                                </a>
                            </li>
                            <li>
                                <a
                                    className="
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
          hover:bg-gray-100
        "
                                    href="#"
                                >
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown relative">
                        <a
                            className="dropdown-toggle flex items-center hidden-arrow"
                            href="#"
                            id="dropdownMenuButton2"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                                className="rounded-full w-12 ml-2"
                                alt=""
                                loading="lazy"
                            />
                        </a>
                        <ul
                            className="
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
  "
                            aria-labelledby="dropdownMenuButton2"
                        >
                            <li>
                                <a
                                    className="
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
        hover:bg-gray-100
      "
                                    href="#"
                                >
                                    Action
                                </a>
                            </li>
                            <li>
                                <a
                                    className="
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
        hover:bg-gray-100
      "
                                    href="#"
                                >
                                    Another action
                                </a>
                            </li>
                            <li>
                                <a
                                    className="
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
        hover:bg-gray-100
      "
                                    href="#"
                                >
                                    Something else here
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
