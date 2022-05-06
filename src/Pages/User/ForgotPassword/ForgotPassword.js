import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../../Components/Loading/Loading';
import auth from '../../../Hooks/Firebase.Init';
import logo from '../../../Media/Logo/logo.png';

const ForgotPassword = () => {
    const navigate = useNavigate();

    const [formError, setFormError] = useState('');

    const [
        sendPasswordResetEmail,
        resetSending,
        resetError
    ] = useSendPasswordResetEmail(auth);

    const resetPassword = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;

        await sendPasswordResetEmail(email);

        toast('Password Reset Link Send');
    }

    if (resetError) {
        setFormError(resetError?.message);
    }

    if (resetSending) {
        return <Loading />;
    }

    return (
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-auto my-32">
            <h2 className='text-center my-8 text-2xl flex items-center'>
                <img className='w-8 mr-4' src={logo} alt="" />
                Reset Your Password
            </h2>
            <form onSubmit={resetPassword}>
                <div className="form-group mb-6">
                    <input type="email" className="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none" id="formEmail" name='email' autoComplete="on" placeholder="Email address" />
                </div>

                <p className='mb-4 text-red-600'>{formError}</p>

                <button type="submit" className="
      w-full
      px-6
      py-2.5
      bg-indigo-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-indigo-600 hover:shadow-lg
      focus:bg-indigo-600 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-indigo-600 active:shadow-lg
      transition
      duration-150
      ease-in-out">Reset Password</button>

                <button onClick={() => navigate('/')} className="
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