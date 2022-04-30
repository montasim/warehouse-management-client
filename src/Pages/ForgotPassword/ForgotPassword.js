import React from 'react';
import logo from '../../Media/Logo/logo.png';

const ForgotPassword = () => {
    return (
        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-auto my-32">
            <h2 className='text-center my-8 text-2xl flex items-center'>
                <img className='w-8 mr-4' src={logo} alt="" />
                Reset Your Password
            </h2>
            <form>
                <div class="form-group mb-6">
                    <input type="email" class="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput91"
                        placeholder="Email address" />
                </div>
                <button type="submit" class="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Reset Password</button>
                <button type="submit" class="
      w-full
      px-6
      py-2.5
      bg-orange-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-orange-700 hover:shadow-lg
      focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-orange-800 active:shadow-lg
      transition
      duration-150
      ease-in-out mt-4">Cancel</button>
            </form>
        </div>
    );
};

export default ForgotPassword;