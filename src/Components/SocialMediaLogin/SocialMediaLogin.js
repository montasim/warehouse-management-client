import React, { useEffect } from 'react';
import { useAuthState, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../Hooks/Firebase.Init';
import { BsGoogle, BsGithub } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import useToken from '../../Hooks/useToken';

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

    const [token] = useToken(googleUser || githubUser);
    const [user] = useAuthState(auth);

    let email;

    if (user !== null) {
        user.providerData.forEach((profile) => {
            const splitEmail = profile?.email.split('@');

            email = splitEmail[0];
        });
    }

    if (googleError) {
        toast(googleError?.message);
    }
    if (githubError) {
        toast(githubError?.message);
    }
    if (googleLoading || githubLoading) {
        return <Loading />;
    }

    if (token) {
        toast(`Welcome Back ${email}`);
        navigate(from, { replace: true });
    }

    return (
        <>
            <button onClick={() => signInWithGithub()}
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block p-3 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-indigo-600 hover:shadow-lg focus:bg-indigo-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-600 active:shadow-lg transition duration-150 ease-in-out mx-1"
            >
                <BsGithub className='text-xl' />
            </button>

            <button onClick={() => signInWithGoogle()}
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block p-3 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-indigo-600 hover:shadow-lg focus:bg-indigo-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-600 active:shadow-lg transition duration-150 ease-in-out mx-1"
            >
                <BsGoogle className='text-xl' />
            </button>
        </>
    );
};

export default SocialMediaLogin;