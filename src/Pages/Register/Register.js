import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../Hooks/Firebase.Init';
import { toast } from 'react-toastify';
import SocialMediaLogin from '../../Components/SocialMediaLogin/SocialMediaLogin';
import Loading from '../../Components/Loading/Loading';

const Register = () => {
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false);
    const [formError, setFormError] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        registerLoading,
        registerError,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [
        sendEmailVerification,
        verificationSending,
        verificationError
    ] = useSendEmailVerification(auth);

    const register = async event => {
        event.preventDefault();

        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        if (password !== confirmPassword) {
            setFormError('Password Do Not Match!');
        }
        else if (!agree) {
            setFormError('Agree to our Terms & Condition');
        }
        else {
            createUserWithEmailAndPassword(email, password);
            await sendEmailVerification();
            toast('Email Verification Sent');
            navigate('/');
        }
    }

    if (registerError) {
        setFormError(registerError?.message);
    }
    if (registerLoading) {
        return <Loading />;
    }
    if (user) {
        navigate('/');
    }

    if (verificationError) {
        setFormError(verificationError?.error);
    }
    if (verificationSending) {
        return <p>Sending...</p>;
    }

    return (
        <section className="h-screen m-24">
            <div className="px-6 h-full text-gray-800">
                <div
                    className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                >
                    <div
                        className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
                    >
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="w-full"
                            alt="Sample image"
                        />
                    </div>
                    <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                        <form onSubmit={register}>
                            <div className="flex flex-row items-center justify-center lg:justify-start">
                                <p className="text-lg mb-0 mr-4">Register with</p>
                                <SocialMediaLogin />
                            </div>

                            <div
                                className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                            >
                                <p className="text-center font-semibold mx-4 mb-0">Or</p>
                            </div>

                            <div className='mb-6 flex gap-4'>
                                <div className="w-1/2">
                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="formFirstName" name='firstName'
                                        placeholder="First Name"
                                    />
                                </div>

                                <div className="w-1/2">
                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="formLastName" name='lastName'
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <input
                                    type="text"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="formEmail" name='email'
                                    placeholder="Email address"
                                />
                            </div>

                            <div className="mb-6">
                                <input
                                    type="password"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="formPassword" name='password'
                                    placeholder="Password"
                                />
                            </div>

                            <div className="mb-6">
                                <input
                                    type="password"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="formConfirmPassword" name='confirmPassword'
                                    placeholder="Confirm Password"
                                />
                            </div>

                            <div className="flex justify-between items-center mb-6">
                                <div className="form-group form-check">
                                    <input onClick={() => setAgree(!agree)}
                                        type="checkbox"
                                        className="form-check-input appearance-none h-4 w-4 border border-red-600 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        id="exampleCheck2" name='terms'
                                    />
                                    <label className={`form-check-label inline-block ${!agree ? 'text-red-600' : 'text-grey-800'}`} htmlFor="exampleCheck2"
                                    >Agree to our terms & condition</label
                                    >
                                </div>
                                <Link to="/forgot-password" className="text-blue-700">Forgot password?</Link>
                            </div>

                            <div className="text-center lg:text-left">
                                <p className='mb-4 text-red-600'>{formError}</p>
                                <button
                                    type="submit"
                                    className="button inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                >
                                    Register
                                </button>
                                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                    Already have an account?
                                    <Link
                                        to="/login"
                                        className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                    > Login</Link
                                    >
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;