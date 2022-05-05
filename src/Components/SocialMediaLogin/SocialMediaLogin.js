import React from 'react';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle, useSignInWithTwitter } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../Hooks/Firebase.Init';
import { BsGoogle, BsFacebook, BsGithub, BsTwitter } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const SocialMediaLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [
        signInWithGoogle,
        googleUser,
        googleLoading,
        googleError
    ] = useSignInWithGoogle(auth);

    const [
        signInWithGithub,
        githubUser,
        githubLoading,
        githubError
    ] = useSignInWithGithub(auth);

    if (googleError || githubError) {
        toast(googleError?.message);
    }
    if (googleLoading || githubLoading) {
        return <Loading />;
    }
    if (googleUser || githubUser) {
        toast('Welcome Back');
        navigate(from, { replace: true });
    }

    return (
        <>
            <button onClick={() => signInWithGithub()}
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
            >
                <BsGithub className='text-xl' />
            </button>

            <button onClick={() => signInWithGoogle()}
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
            >
                <BsGoogle className='text-xl' />
            </button>
        </>
    );
};

export default SocialMediaLogin;